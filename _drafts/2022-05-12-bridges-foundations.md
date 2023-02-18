---
layout: post
title: "Bridges: Economic Foundations and Risk in a Multi-Chain World"
subtitle: "Bridges: Economic Foundations and Risk in a Multi-Chain World"
date: 2022-05-12
categories: defi
authors: Dom
---

Your bridged funds are (likely) not safu.
While a lot of eyes are on the events surrounding LUNA/UST and the economic design flaws in stablecoins, similar economic risks are prevalent in bridge design.
We'll take a close look into the economic foundations surrounding bridges to understand the security and trade-offs.
We ignore technical risks such as a smart contract or runtime bugs and focus on the (in)security of economic bridge design.
We argue that most bridged assets today are insecure from an economic perspective and even seemlingly non-custodial bridges have viable economic attack vectors.
This post assumes some familiarity with bridges, [here is a good introduction in case you are not familiar with the terminology]().
Let's dive into it.

## Custodial vs Non-Custodial Bridges

In the bridge design space, the first and most important security aspect is the question of custody.
By that, we understand which entities can move the bridged assets and which rules apply.

We define non-custodial as the private key owner having sole access to their own funds.
The security of these funds is subject to the security of the consensus protocol on which the funds originate, i.e., the private key owner trusts that the security of the consensus protocol does not fail.
Anything else will be considered as custodial.

### Custodial Bridges

Most bridged assets to-date are in custodial bridges.
We can differentiate between different types of custodial bridges:

- **Single signer**: A single entity controls the bridged assets and could withdraw them at any time.
- **Multi-sig**: A group of entities control the assets via multi-sig accounts. 
- **Threshold signature**: A group of signers are responsible for keeping assets in custody.
- **MPC**: A group of entities control custody of the bridged asset. To move funds, all parties in the MPC protocol must sign. 

### Non-custodial Bridges?

Often times, bridges that are built using light clients and smart contracts to lock/unlock assets based on the verification of a pair of chains are considered to be non-custodial.
They rely on the security of consensus protocol of the two bridged chains.
We'll omit the problems around building secure chain relays and their attack vectors here for a moment.

However, in such a design the validators of the bridged chain have custody over the funds.
While this is likely the strongest way to build bridges, the system can still fail if the validators of one of the bridged systems fails.

Let's take an example: say a newly launched blockchain called "TotallySecure" is employing some form of Proof-of-Stake for its validators.
TotallySecure is bridging to Ethereum using light clients and smart contracts to lock/unlock assets similar to e.g., how IBC works.
You can transfer any Ethereum asset to TotallySecure.
TotallySecure is a very promising DeFi chain and loads of users bridge over their assets to farm some juicy yields.
However, a severe flaw in TotallySecures system leads to a confidence crisis in its token.
The PoS token goes to $0 in value and it becomes very easy/cheap to attack the consensus of TotallySecure.
Let's assume the TotallySecure team halts the chain and now the bridged assets annot be unlocked on Ethereum since it's missing the light client verification.
Even worse, assume that an attacker could take over the consensus of TotallySecure to produce new blocks that would grant the attacker all bridged assets.

In the multi-chain world, you trust both the consensus of the source and the destination chain.
Once, ither of the two consensus protocols fail, funds are not safu even in seemingly non-custodial designs.
This attack is far from theoreatical as well: especially chains that just bootstrap, cost to take over consensus are likely low for a wealthy attacker.

It is possible to remidiate these kind of attacks by utilizing the consensus of an already bootstrapped chain such as Polkadot parachains profiting of the security of the relay chain and Cosmos's approach to build another homogenous security zone.

## Collateral To the Rescue

In all the custodial and seemingly non-custodial settings, a collusion of all involved parties from single signer to multi-sigs, threshold signers and L1 validators could steal all bridged assets.
Why are they not doing it?

### Legal Repercussions

Many large multi-big bridges such as wBTC are not anonymous.
Briding over assets and tkaing them into custody is part of a business model with entities that have legal contracts in place.
In case those parties would steal funds, they would have to fear legal repercussions.
However, this is quite akin to CeFi where we trust certain entities to ensure the safety of funds and has little to do with DeFi.

### Profitability

Operating a bridge can be quite profitable for a protocol.
Apart from legal repercussions, having a sustainable business model outweigh the gains from a short-term (and protocol ending) theft of funds.
However, this does not protect users.
If a bridge were to fail and the bridged funds seized, 


- No collateral:
- Bonded:
- Insured:

## Pitfalls of Collateral



- Implicit collateral:
- Endogenous collateral:
- Exogenous collateral:


## Further Reading
- 
This post builds heavily on the [Stablecoin 2.0 blog post and paper](https://medium.com/coinmonks/stablecoins-2-0-economic-foundations-for-defi-b9ab38500b87).
