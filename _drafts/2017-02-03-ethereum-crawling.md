---
layout: post
title:  "Crawling Ethereum to learn about Smart Contracts"
subtitle: "Crawling Ethereum to learn about Smart Contracts"
date:   2017-02-03
categories: blockchain
---
The [Ethereum project](www.ethereum.org) is quite interesting as it allows to create [smart contracts](https://solidity.readthedocs.io/en/develop/introduction-to-smart-contracts.html) with its Turing-complete language [Solidity](https://solidity.readthedocs.io/en/develop/). I was curious about what is happening in general on the Ethereum blockchain. More specifically as part of my thesis project, I want to look into the smart contracts deployed on Ethereum. Obviously, I started with a search, but could not find a lot of statistics. Then I came across a research paper about the [analysis of modern blockchains](https://arxiv.org/abs/1606.06530), where the researchers did quantitative analysis on the blockchains behind Bitcoin, Namecoin, Peercoin, and Etherem. Luckily, they published their [code on GitHub](https://github.com/modernblockchains/newkidsontheblock). I am only interested in the Ethereum part for now, as I want to focus on the smart contract aspects.

Their code for Ethereum is structured in two parts:
- ethereum-crawler: a modified version of geth to store the relevant informtion
- ethereum-extractor: loads ethereum blocks into a DB to analyse it

I am trying to re-perform their experiments and will list the steps and my results here.

## Setting up geth from scratch
To load the ethereum blockchain locally, the ethereum-crawler needs to run. The instructions to install the go ethereum client are found [here](https://github.com/ethereum/go-ethereum/wiki/Developers'-Guide). As Ubuntu comes with an older version of go, I added the PPA.

```
sudo add-apt-repository ppa:gophers/archive
sudo apt-get update
```

Then installed Go 1.8 (you should use at least 1.7 for geth to work).

```
sudo apt-get install golang-1.8
```

Last, setting the Go path.

```
mkdir -p ~/go; echo "export GOPATH=$HOME/go" >> ~/.bashrc
echo "export PATH=$PATH:$HOME/go/bin:/usr/local/go/bin" >> ~/.bashrc
source ~/.bashrc
```

Make sure that everything worked fine and the GOPATH is set correctly

```
printenv | grep go
```

It should display something like ``GOPATH=/home/youruser/go``.

## Getting the modified geth version up and running
The modified get client stores relevant information in a MySQL database and requires thus the go package for that.

```
go get github.com/go-sql-driver/mysql
```

The researchers [newkidsontheblock repo](https://github.com/modernblockchains/newkidsontheblock) is based on geth version 1.3.5, but as we know Ethereum develops quite rapidly (including hard-forks) and as of writing this article the current geth version is 1.5.9. Hence, I needed to switch to the latest client.

In your GOPATH, create a directory structure like ``/home/youruser/go/src/github.com/ethereum``.
Next, fork the [Ethereum go implementation](https://github.com/ethereum/go-ethereum) and clone your fork into the ethereum folder. In case you work a bit longer on your fork, you can update your fork to the latest Ethereum version. If you don't know how, check [this post](http://stackoverflow.com/questions/7244321/how-do-i-update-a-github-forked-repository).
