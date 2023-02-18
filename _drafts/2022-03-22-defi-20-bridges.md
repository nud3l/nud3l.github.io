---
layout: post
title: "DeFi 2.0 Bridges"
subtitle: "Unlocking Collateral Liquidity"
date: 2022-03-22
categories: blockchain
authors: Dom
---

Insured bridges are great for their users and protocols that add the wrapped assets alike: if correctly implemented, the wrapped asset is insured by a collateral asset which greatly reduces both users and the wrapped asset itself defaulting.
However, this insurance comes at the price for providing collateral of the wrapped asset in the first place.
Especially with Bitcoin, more than the full value of the actually locked Bitcoin must be provided to account for exchange rate fluctuations (similar for other Bitcoin-like chains).
What if it was possible to unlock the collateral for other use cases though?
What if we could use vast amounts of locked capital and make it work in a *safe* and *profitable* way?
In this post, I'll explore the boundaries of what is sometimes termed DeFi 2.0 and apply this to designing cross-chain bridges.
Strap in this, will become technical.

# Unsustainable Farming

It has become quite a popular model in DeFi to reward users/capital providers with protocol tokens to (1) incentivize them to provide their capital and (2) distribute tokens to the users of the protocol to let them steer governance.
The main issue is that practically every protocol does this and thus, the most profitable strategy for users has become to move capital to where it generates most profit.
This is both unsustainable for protocols as they practically bribe users for a certain time t stay in the protocol with potentially few users remaining after the rewards have dried up (other protocols have great products too).
For users, it's less unsustainable since they can sell the farmed tokens but still it involves extra hassle of moving liquidity around selling reward tokens to hop on the next great thing.
There are of course yield aggregators and other workaround to fix the user side of the problem but that doesn't cut it for DeFi protocols.

# A Seedling of Sustainable Liquidity

Not all hope is lost though.
A new concept emerged last year with the infamous (3,3) and introduction of Protocol Controlled Value (PCV) or sometimes called Protocol Owned Liquidity (POL).
We'll use PCV and POL in this article interchangeably.
The idea of PCV is that DeFi protocols do not reward users for their liquidity but rather buy or rent liquidity.
In Olympus DAO, this is achieved by users being able to sell LP tokens in a trading pair that contains an asset the protocol wishes to acquire liquidity for plus the protocols own token against bonds.
The bonds are noted in the protocols own token and vest of 7 weeks.
Here, the protocol gives out tokens as well but it retains the liquidity brought in by users since the protocol is now the owner of the LP token that can be converted into both the desired asset and the protocol's own tokens.
Even more interesting, LP tokens can generate income from trading.
Thus, the protocol now profits from the trade on secondary markets outside its native protocol.

# Growing Sustainability

Before we dive into bridges, I want to quickly outline the Tokemak protocol as well.
Tokemak takes the OlympusDAO a notch further such that


# Farming on Bridges?

Simple desing insured bridge: use a collateral asset like ETH or DOT or ATOM to provide insurance for the locked asset.
Improvement 1: use interest generating assets like stETH as collateral. Comes with an extra issue that the underlying asset might fail and you still have the issue that the protocol does not control the value.

PCV entering the ring: protocol acquires LP tokens that are interest generating, uses it as collateral to operate their own Vault, and as a whole earns interest.

# Sustainable Bridges: The Difficult Part

Overall design:

- Everything should be protocol/DAO owned
- Where possible, the protocol/DAO should execute the protocol without the need for parties to come online
- Where possible, no honesty assumptions should be made

Detailed problems:

What happens if a Vault fails to redeem? 

- In that case, the protocol behaves like before: user gets LP tokens

Who controls the Bitcoin key(s)?

- Option 1: A trusted entity controls the BTC key on behalf of the protocol. This is essentially going to a custodial/wBTC-style bridge model where that entity would need to be auditable and collateralized. Not a feasible option.
- Option 2: A group of entities sign BTC transactions through an MPC protocol. The MPC protocol signers should be collateralized to ensure that failures can be punished. With the assumption that at least one single honest party exists, this setup would not require the entirety of the locked value be provided as collateral. In practice, this could be executed by the collators of the parachain (?).
- Option 3: A group of entities sign BTC transactions via threshold signer mechanism. This is quite similar to the MPC protocol.
- Option 4: Using regular keys. However, onchain it would need to be possible to sign BTC transactions from another chain. Unknown how to do that securely (i.e., without exposing the BTC private key).

Who controls the substrate key(s)?

- Technically not necessary anymore. Governance can decide on everything without having to have dedicated keys.

On liquidation, who gets the LP tokens?

-

# Mixed Models

- Vaults provide minimum amount of collateral, say 105%. Rest is being provided by the protocol through LP tokens but only available to token holders that have X governance tokens.
-  
