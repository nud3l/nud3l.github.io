---
layout: post
title:  "Integrating Python and Ethereum"
subtitle: "Interact with Ethereum contracts from python with web3py"
date:   2017-02-14
categories: blockchain
authors: Dominik
---
In Ethereum and other blockchains there are still a lot of proof of concept implementation and developers trying out how to cope with the new concepts. As part of the dInvest [dInvest post series]({% post_url 2017-01-10-dinvest %}) I was also looking into Ethereum and trying to implement a hedge fund in a blockchain. In a previous post I discussed how to get a quantitative framework in python up and running. In this post I will write how to integrate python programs with Ethereum smart contracts. For one reason or another you might be also faced with the issue, that although Ethereum offers a Turing-complete language not everything is actually doable there.

Let's say you have created one of the [simple tutorial contracts in Ethereum](www.ethereum.org/greeter) and now want to look at something more advanced. I personally liked the [Hitchhiker's Guide to Smart Contracts](https://medium.com/zeppelin-blog/the-hitchhikers-guide-to-smart-contracts-in-ethereum-848f08001f05##.3dxx4rysl) by Manuel Aráoz to get started with more complex code, setup testrpc, and truffle. Take a look at it.

## dInvest smart contract
dInvest is composed of one smart contract that is responsible for making investments, verifying investment
criteria and distribution of returns. The contract exposes public functions to create new investments and
for withdrawal which will act as main functions of a hedge fund. Users of the hedge fund are identified
by their Ethereum address which is equivalent for the public key. Suggestion of investment strategies and
strategy execution are done in different agents that also have Ethereum addresses. These agents are set by
the contract creator only.
When a user is creating an investment it is possible to specify a list of industry sectors identified by a
two digit number based on the Standard Industrial Classification codes. These sectors will be identified
as a black list when making the investments. Therefore user have the ability control the sectors which the
hedge fund will invest on.


The contract can be found in [the GitHub repo](github.com/nud3l/dInvest/blob/master/solidity/contracts/HedgeContract1.sol).

## Interaction with smart contracts
To interact with smart contracts, there are a couple of option including RPC or a JavaScript API. I found the easiest way to interact with Ethereum smart contracts from other programs (like python programs) was using their [web3 JavaScript API](github.com/ethereum/wiki/wiki/JavaScript-API). As the majority of dInvest is written in python, I wanted to stick to the language and not include JS as well. Luckily, there is a [web3 implementation in python](github.com/pipermerriam/web3.py). To get it up and running for the dInvest setting I switched to the virtualenv, where I also installed zipline and then install web3 simply with ```pip install web3```.

Using web3, there are three steps to get you up and running to interact with your smart contract:

1. Getting your ABI
2. Setup the RPC connection
3. Interact with the smart contract

In the next sections, I will go into detail how to achieve the three steps. I am using this mostly as a python module for other programs. In the end our python module structure might look like this:

```
contract
|-- __init__.py
|-- ContractHandler.py
|-- your-contract-name.json
```

## Getting your ABI
Now, to interact with any smart contract you need the [Application Binary Interface(ABI)](github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI) defined by the contract. The ABI is a static, strongly typed interface. Whenever you create a new contract or change an existing one, chances are your ABI changes as well. In my experience the easiest way to get the current ABI of a smart contract (which might be yours or any contract you have the source code available) is to go to [https://ethereum.github.io/browser-solidity/](https://ethereum.github.io/browser-solidity/) and copy/paste your code there. Then press the "Compile" button on the upper right side and copy the entire string in the "Interface" field into a ```your-contract-name.json``` file. Once you have that JSON, your web3 interface will know how to interact with the contract.

## Setting up the RPC provider
As a next step you will need to connect to the RPC provider. In your python file (e.g. ```ContractHandler.py```) include those lines of code:

```python
from web3 import Web3, TestRPCProvider

class ContractHandler:
  def __init__(self):
    self.web3 = Web3(RPCProvider(host='localhost', port='8545'))
    with open(str(path.join(dir_path, 'contract_abi.json')), 'r') as abi_definition:
      self.abi = json.load(abi_definition)
    self.contract_address = your_contract_address
    self.contract = self.web3.eth.contract(self.abi, self.contract_address)
```


I prefer having my configurations in a separate file. There are many ways to do it and it seems like there is no standard in python. I guess using a txt file is not the best option though and I plan to switch to yml soon. See also here [https://martin-thoma.com/configuration-files-in-python/](https://martin-thoma.com/configuration-files-in-python/). Make sure to run your favorite Ethereum client before starting your program (e.g. ```geth --rpc```).

## Interacting with the smart contract
Note: Before interacting with your own account you need to unlock it first. This is achieved in web3 via:
```python
self.web3.personal.unlockAccount(your_ethereum_account, your_ethereum_password)
```

There are some standard web3 calls you can make, like getting the current balance of an account in wei:

```python
wei_balance = self.web3.eth.getBalance(some_ethereum_address)
```

In case you want to call a function in the contract you can do this by calling the command as defined by the contract ABI. In our dInvest example there is a contract call which returns the blacklisted companies for our sustainable investment. It is callable with:

```python
blacklist = self.contract.call().blackListCompanies()
```

There are some more examples in the [GitHub code available](https://github.com/nud3l/dInvest/blob/master/trading/contract/ContractHandler.py).

## Final note
As a final note, I would like to point out that there are other blockchain solutions like [Hyperledger Fabric](hyperledger-fabric.readthedocs.io/en/latest/) or [Tendermint](tendermint.com) that aim to solve issues around compatibility with other programming language, transaction throughput etc. As they are permissioned blockchains I haven't yet given them a try, but might be interesting to take a look at.
