"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5074],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||o;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={slug:"analysing-ethereum-gas-cost",title:"Analysing Ethereum contract gas costs during development",categories:["blockchain","ethereum","smart-contracts","gas","truffle","testing"],authors:"dom"},s=void 0,i={permalink:"/blog/analysing-ethereum-gas-cost",editUrl:"https://github.com/nud3l/nud3l.github.io/blog/2018-11-06-analysing-ethereum-gas-cost.md",source:"@site/blog/2018-11-06-analysing-ethereum-gas-cost.md",title:"Analysing Ethereum contract gas costs during development",description:"Updating the state of a smart contract in Ethereum costs money. In this post I will go a bit into detail why this is necessary in Ethereum and how to check easily (with truffle test) your gas costs during local development. For this we will use a little pet example, you can use for your own deployments.",date:"2018-11-06T00:00:00.000Z",formattedDate:"November 6, 2018",tags:[],readingTime:4.735,hasTruncateMarker:!1,authors:[{name:"Dominik Harz",title:"CTO Interlay",url:"https://harz.dev",imageURL:"https://github.com/nud3l.png",key:"dom"}],frontMatter:{slug:"analysing-ethereum-gas-cost",title:"Analysing Ethereum contract gas costs during development",categories:["blockchain","ethereum","smart-contracts","gas","truffle","testing"],authors:"dom"},prevItem:{title:"Stealing All of Maker's Collateral",permalink:"/blog/maker-collateral-attack"},nextItem:{title:"Analyzing Bitcoin smart contracts from a mechanism design perspective",permalink:"/blog/bitcoin-smart-contracts-mechanism-design"}},c={authorsImageUrls:[void 0]},l=[{value:"Gas cost - why?",id:"gas-cost---why",level:2},{value:"Practical implications",id:"practical-implications",level:2},{value:"Local execution and global execution",id:"local-execution-and-global-execution",level:2},{value:"Measuring gas costs",id:"measuring-gas-costs",level:2}],u={toc:l},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Updating the state of a smart contract in Ethereum costs money. In this post I will go a bit into detail why this is necessary in Ethereum and how to check easily (with ",(0,r.kt)("inlineCode",{parentName:"p"},"truffle test"),") your gas costs during local development. For this we will use a little pet example, you can use for your own deployments."),(0,r.kt)("h2",{id:"gas-cost---why"},"Gas cost - why?"),(0,r.kt)("p",null,"Ethereum smart contracts are deployed at an address in the Ethereum network. They are identifiable by the fact that the ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," field in the address is occupied by the EVM bytecode. One example is the Maker ",(0,r.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359#code"},"Dai contract"),". Any contract in Ethereum is deployed that way and implements a range of functions that can update its own state and the state of the blockchain."),(0,r.kt)("p",null,"The own state is defined within the contract and refers to any contract wide variables you define like ",(0,r.kt)("inlineCode",{parentName:"p"},"uint"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"mapping"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),". The global state of the network is affected when you make a transaction to a contract, which, if everything goes right, will include one more transaction in the ever-growing list of transactions."),(0,r.kt)("p",null,"Everytime somebody invokes a state update (i.e. sends a transaction), the network reaches consensus over this operation. If 50% + 1 decide that the state transition is valid, the network state gets updated. However, this means that if you have a function that does ",(0,r.kt)("inlineCode",{parentName:"p"},"5 + 4")," and stores the result to a contract variable, every node in the network need to verify that the result is in fact ",(0,r.kt)("inlineCode",{parentName:"p"},"9"),". Assuming that Ethereum has ",(0,r.kt)("a",{parentName:"p",href:"https://www.ethernodes.org/network/1"},"more than 12,000 nodes"),", this is quite costly."),(0,r.kt)("p",null,"Moreover, assume that any of these operations are free. One could simply create a function that runs indefinitely to block all nodes verifying the network. This is the equivalent to a distributed denial-of-service attack. It would be nice if we would know in advance if a function terminates. However, the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Halting_problem"},"Halting problem")," prevents us from knowing this. Hence, we have to charge partial function execution and forcefully terminate execution when it becomes to burdensome for the network."),(0,r.kt)("h2",{id:"practical-implications"},"Practical implications"),(0,r.kt)("p",null,'Operations executed by the EVM cost gas depending how "heavy" they are on the network. Gas is a way of determining the cost for an operation. The current gas price on the other hand determines how much 1 gas costs in Ether. That way, the gas cost can be adjusted depending on the network load. For example, while the gas cost for a single operation is constant, the gas price can go up when the network is congested. An overview ',(0,r.kt)("a",{parentName:"p",href:"https://ethereum.github.io/yellowpaper/paper.pdf"},"of the gas costs are found in appendix G of the yellow paper"),"."),(0,r.kt)("h2",{id:"local-execution-and-global-execution"},"Local execution and global execution"),(0,r.kt)("p",null,"Any operation on a smart contract costs gas. It is important to note a difference though. ",(0,r.kt)("strong",{parentName:"p"},"Calls")," are only executed locally. So for example the function below measures its gas, but the you will not be charged executing such a function as it is a read-only function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"function balanceOf(address owner) public view returns (uint256) {\n    return _balances[owner];\n}\n")),(0,r.kt)("p",null,"However, ",(0,r.kt)("strong",{parentName:"p"},"transactions")," will deduct Ether from your balance as those are executed by the global network and miners need to have an incentive to include your transaction in a block. So the function below is from an ERC20 and executes a transfer. This updates the contract state, and thus requires a transaction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"function _transfer(address from, address to, uint256 value) internal {\n    require(value <= _balances[from]);\n    require(to != address(0));\n\n    _balances[from] = _balances[from].sub(value);\n    _balances[to] = _balances[to].add(value);\n    emit Transfer(from, to, value);\n}\n")),(0,r.kt)("h2",{id:"measuring-gas-costs"},"Measuring gas costs"),(0,r.kt)("p",null,"I will assume here that you are familiar with ",(0,r.kt)("a",{parentName:"p",href:"https://truffleframework.com/docs"},"Truffle")," and ",(0,r.kt)("a",{parentName:"p",href:"https://truffleframework.com/docs/ganache/overview"},"Ganache"),". When you develop your new great smart contracts, I like to create end-to-end tests that also check for gas costs."),(0,r.kt)("p",null,"Assuming your project folder looks something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"contracts/\nmigrations/\ntest/\n")),(0,r.kt)("p",null,"I am creating a folder ",(0,r.kt)("inlineCode",{parentName:"p"},"mkdir experiments")," where I will store the number of transactions each of my interactions require and the amount of gas that this operation is using."),(0,r.kt)("p",null,"Next, I'm creating a test script ",(0,r.kt)("inlineCode",{parentName:"p"},"demo.js")," in the test folder. I like to store my experiments in a CSV format so I can import it to other tools. First, the required imports:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'var fs = require("fs");\nvar csvWriter = require(\'csv-write-stream\');\nvar writer = csvWriter();\n\n// your contract\nconst ERC20 = artifacts.require("./ERC20.sol");\n')),(0,r.kt)("p",null,"You will write your tests based on the Truffle/Mocha/Chai interface. For this, I'm creating the variables I am using to store the measurements.\nAlso, I am using the ",(0,r.kt)("inlineCode",{parentName:"p"},"before")," construct to setup the CSV writer. During tests I would update the gas and number of transaction related counters."),(0,r.kt)("p",null,"After the tests are finished, the data is written to a CSV file. To USD conversion uses a helper function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"contract('ERC20', async (accounts) => {\n    // gas price conversion\n    const gas_limit = 7988288;\n\n    // experiment related vars\n    var transfer_success_gas = 0;\n    var transfer_fail_gas = 0;\n    var transfer_success_tx = 0;\n    var transfer_fail_tx = 0;\n\n    // any other const or vars\n    // ...\n\n    before('Create writer for experiments', async () => {\n        writer.pipe(fs.createWriteStream(('./experiments/ERC20.csv')));\n    })\n\n    after('Write experiment data to file', async () => {\n        let transfer_success_usd = convertToUsd(transfer_success_gas);\n        let transfer_fail_usd = convertToUsd(transfer_fail_gas);\n\n        writer.write(\n                {\n                    Transfer: transfer_success_gas,\n                    TransferFail: transfer_fail_gas,\n                });\n        writer.write(\n            {\n                Transfer: transfer_success_usd,\n                TransferFail: transfer_fail_usd,\n            });\n        writer.write(\n            {\n                Transfer: transfer_success_tx,\n                TransferFail: transfer_fail_tx,\n            });\n        writer.end();\n    })\n\n    // your tests\n    // it(\"Transfer Success\")\n    // it(\"Transfer Fail\")\n})\n")),(0,r.kt)("p",null,"The USD conversion function works like this. I have this in a separate file called ",(0,r.kt)("inlineCode",{parentName:"p"},"helpers.js")," that I export/import as a module."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'convertToUsd: function (gasCost) {\n    // gas price conversion\n    const gas_price = web3.toWei(5, "gwei");\n    const eth_usd = 200; // USD\n\n    return gasCost * web3.fromWei(gas_price, "ether") * eth_usd;\n}\n')),(0,r.kt)("p",null,"That's it. You can run the experiment with ",(0,r.kt)("inlineCode",{parentName:"p"},"truffle test path/to/the/file.js"),"."))}h.isMDXComponent=!0}}]);