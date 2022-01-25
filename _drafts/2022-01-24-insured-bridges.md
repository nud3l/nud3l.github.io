---
layout: post
title: "Insured Bitcoin Bridges"
subtitle: "Why DeFi needs collateral when bridging assets"
date: 2022-01-24
categories: blockchain, DeFi
authors: Dom
---

The future is multi-chain. The DeFi demand has outgrown Ethereum as transaction prices force users to try alternatives including other L1 and L2 solutions.
The core infrastructure piece connecting these systems are bridges.
Bridges allow users to move assets between systems seamlessly and I predict that once they work as they should, users will not care about the bridges any longer but take them as guaranteed piece of infrastructure.
But we are quite early in the game and in this post I want to outline *insured bridges*.

- Reduce risk of using other systems
- Tradtionally, insurance used
- Different levels of insurance give different kind of guarantees
- POst outlines and gives guidance on which level of insurance is good
- Limited to Bitcoin and similar assets like Doge, Zcash, ...
- Smart contract capable systems can use different constructions not covered here


## Bridged Bitcoin

## Insurance Types a.k.a. Collateral

In essence, we can differentiate three different types of collateral:

* **External**: External or sometimes called exogenous collateral originates outside the bridging system. For example, if the custodian of Bitcoin has to provide ETH collateral, the collateral price can be modeled exogenously since the ETH price does not only depend on the bridge using it as collateral but on the entire Ethereum ecosystem and its usage of ETH.
* **Internal**: Internal or sometimes called endogenous collateral is an asset that is created as part of the bridge. For example, if the custodian of Bitcoin has to provide collateral in a governance token of the bridge, the price of the collateral can be modeled endogenously. On a high-level, endogenous assets have two implications: if there is a high demand on the bridge and high trust in the governance token, the collateral scales well as the expected price increases and with it usually its demand. On the other hand, if there is a confidence crisis in the bridge, self-enforcing spirals can cause the collateral asset to deteriorate much faster compared to exogenous collateral assets.
* **Imaginary**: Imaganiry or sometimes called implicit collateral is a non-tokenized value. For example, the custodian of Bitcoin of a bridge has a high level of trust and there are possibly legal actions possible against the custodian such that it can be trusted to a certain extend.
