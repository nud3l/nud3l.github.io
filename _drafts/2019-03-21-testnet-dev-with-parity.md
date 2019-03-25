---
layout: post
title:  "Using Parity dev chain as an alternative to ganache-cli"
subtitle: "Using Parity dev chain as an alternative to ganache-cli"
date:   2019-03-21
categories: blockchain
authors: Dominik
---

I love `ganache-cli` for local Solidity development since it is very easy to setup and gives me a lot of control over the chain configuration. However, sometimes I want to ``stress-test'' my contracts. 
For example, sometimes I have functions with linear time complexity in my contracts and I want to figure out how many operations the function has before running out of gas.
The problem with `ganache` is that is is memory heavy.
Even on my 16 GB RAM laptop, `ganache-cli` has a tendency to run of out memory in these kind of experiments.

##### Parity Dev Chain

While `ganache-cli` is a great tool, it is written in JavaScript and is quite memory intensive.
Parity, on the other hand, is an EVM implementation written in Rust, which is known for being a extremely efficient language.
Naturally, I wanted to try Parity as a local development environment to reduce memory foot print.

Parity has a nice [introduction](https://wiki.parity.io/Private-development-chain) to their private dev chain.
In this post I will go through the process of installing Parity on my Fedora 29 system and configure it for my experiment needs.

##### Install Parity

First, you will need to install the system dependencies. On Fedora that works with:

```bash
sudo dnf install libudev-devel
```

Second, download a suitable binary from the official releases: [https://github.com/paritytech/parity-ethereum/releases](https://github.com/paritytech/parity-ethereum/releases)
Then, make the binary executable.

```bash
mkdir ~/apps/parity
cd ~/apps/parity
wget https://releases.parity.io/ethereum/v2.4.2/x86_64-unknown-linux-gnu/parity
chmod u+x parity
```

##### Configure Parity dev

You could now just start `parity` to sync a full Ethereum node.
However, we want to use a local dev node which requires some configuration.
The default dev node only comes with a single account.
Typically, I need more accounts for my experiments and some further extra configuration.
Let's jump into the options.

