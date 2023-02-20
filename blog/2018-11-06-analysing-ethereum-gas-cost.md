---
slug: analysing-ethereum-gas-cost
title:  "Analysing Ethereum contract gas costs during development"
categories: [blockchain, ethereum, smart-contracts, gas, truffle, testing]
authors: dom
---

Updating the state of a smart contract in Ethereum costs money. In this post I will go a bit into detail why this is necessary in Ethereum and how to check easily (with `truffle test`) your gas costs during local development. For this we will use a little pet example, you can use for your own deployments.

## Gas cost - why?
Ethereum smart contracts are deployed at an address in the Ethereum network. They are identifiable by the fact that the `code` field in the address is occupied by the EVM bytecode. One example is the Maker [Dai contract](https://etherscan.io/address/0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359#code). Any contract in Ethereum is deployed that way and implements a range of functions that can update its own state and the state of the blockchain.

The own state is defined within the contract and refers to any contract wide variables you define like `uint`, `mapping`, or `string`. The global state of the network is affected when you make a transaction to a contract, which, if everything goes right, will include one more transaction in the ever-growing list of transactions.

Everytime somebody invokes a state update (i.e. sends a transaction), the network reaches consensus over this operation. If 50% + 1 decide that the state transition is valid, the network state gets updated. However, this means that if you have a function that does `5 + 4` and stores the result to a contract variable, every node in the network need to verify that the result is in fact `9`. Assuming that Ethereum has [more than 12,000 nodes](https://www.ethernodes.org/network/1), this is quite costly.

Moreover, assume that any of these operations are free. One could simply create a function that runs indefinitely to block all nodes verifying the network. This is the equivalent to a distributed denial-of-service attack. It would be nice if we would know in advance if a function terminates. However, the [Halting problem](https://en.wikipedia.org/wiki/Halting_problem) prevents us from knowing this. Hence, we have to charge partial function execution and forcefully terminate execution when it becomes to burdensome for the network.

## Practical implications
Operations executed by the EVM cost gas depending how "heavy" they are on the network. Gas is a way of determining the cost for an operation. The current gas price on the other hand determines how much 1 gas costs in Ether. That way, the gas cost can be adjusted depending on the network load. For example, while the gas cost for a single operation is constant, the gas price can go up when the network is congested. An overview [of the gas costs are found in appendix G of the yellow paper](https://ethereum.github.io/yellowpaper/paper.pdf).

## Local execution and global execution
Any operation on a smart contract costs gas. It is important to note a difference though. **Calls** are only executed locally. So for example the function below measures its gas, but the you will not be charged executing such a function as it is a read-only function.

```
function balanceOf(address owner) public view returns (uint256) {
    return _balances[owner];
}
```

However, **transactions** will deduct Ether from your balance as those are executed by the global network and miners need to have an incentive to include your transaction in a block. So the function below is from an ERC20 and executes a transfer. This updates the contract state, and thus requires a transaction.

```
function _transfer(address from, address to, uint256 value) internal {
    require(value <= _balances[from]);
    require(to != address(0));

    _balances[from] = _balances[from].sub(value);
    _balances[to] = _balances[to].add(value);
    emit Transfer(from, to, value);
}
```

## Measuring gas costs
I will assume here that you are familiar with [Truffle](https://truffleframework.com/docs) and [Ganache](https://truffleframework.com/docs/ganache/overview). When you develop your new great smart contracts, I like to create end-to-end tests that also check for gas costs.

Assuming your project folder looks something like this:
```
contracts/
migrations/
test/
```

I am creating a folder `mkdir experiments` where I will store the number of transactions each of my interactions require and the amount of gas that this operation is using.

Next, I'm creating a test script `demo.js` in the test folder. I like to store my experiments in a CSV format so I can import it to other tools. First, the required imports:

```
var fs = require("fs");
var csvWriter = require('csv-write-stream');
var writer = csvWriter();

// your contract
const ERC20 = artifacts.require("./ERC20.sol");
```

You will write your tests based on the Truffle/Mocha/Chai interface. For this, I'm creating the variables I am using to store the measurements.
Also, I am using the `before` construct to setup the CSV writer. During tests I would update the gas and number of transaction related counters.

After the tests are finished, the data is written to a CSV file. To USD conversion uses a helper function.

```
contract('ERC20', async (accounts) => {
    // gas price conversion
    const gas_limit = 7988288;

    // experiment related vars
    var transfer_success_gas = 0;
    var transfer_fail_gas = 0;
    var transfer_success_tx = 0;
    var transfer_fail_tx = 0;

    // any other const or vars
    // ...

    before('Create writer for experiments', async () => {
        writer.pipe(fs.createWriteStream(('./experiments/ERC20.csv')));
    })

    after('Write experiment data to file', async () => {
        let transfer_success_usd = convertToUsd(transfer_success_gas);
        let transfer_fail_usd = convertToUsd(transfer_fail_gas);

        writer.write(
                {
                    Transfer: transfer_success_gas,
                    TransferFail: transfer_fail_gas,
                });
        writer.write(
            {
                Transfer: transfer_success_usd,
                TransferFail: transfer_fail_usd,
            });
        writer.write(
            {
                Transfer: transfer_success_tx,
                TransferFail: transfer_fail_tx,
            });
        writer.end();
    })

    // your tests
    // it("Transfer Success")
    // it("Transfer Fail")
})
```

The USD conversion function works like this. I have this in a separate file called `helpers.js` that I export/import as a module.

```
convertToUsd: function (gasCost) {
    // gas price conversion
    const gas_price = web3.toWei(5, "gwei");
    const eth_usd = 200; // USD

    return gasCost * web3.fromWei(gas_price, "ether") * eth_usd;
}
```

That's it. You can run the experiment with `truffle test path/to/the/file.js`.
