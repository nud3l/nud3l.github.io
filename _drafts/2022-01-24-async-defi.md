---
layout: post
title: "Asynchronous DeFi"
subtitle: ""
date: 2022-01-24
categories: blockchain, DeFi
authors: Dom
---

- Majority of DeFi happens on Ethereum right now
- Ethereum is for the most part one large system where we can use synchronous programming models
- In practice, a sequence of protocol interactions can be bundled via a smart contract
- In multi-chain, that is not possible anymore since communication across chains happens asynchronously
- With that, we have to think about DeFI as an asynchronous model

Consequences
- Flash loans are not possible cross-chain since we cannot provide the atomicity of a single transaction


Bridge flash loans
- Bridges provide large amounts of capital
- Reserved assets by users bridging over asset to other ecosystems
- n vs n^2 communication complexity
- Synchronous programming models within a chain, asynchronous programming models across chains
- Utilize asynchronous artifacts like reserved assets on the chain that is being bridged from for FL
- Utilize collateral pools for bridged assets for FL

