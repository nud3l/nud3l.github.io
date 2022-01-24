---
layout: mathpost
title:  "Analysing Bitcoin smart contracts from a mechanism design perspective"
subtitle: "Analysing Bitcoin smart contracts from a mechanism design perspective"
date:   2018-09-12
categories: blockchain, DeFi
authors: Dom
---

Contracts can be used to enforce agreements between entities.
To this extent, smart contracts have been proposed by Nick Szabo and implemented for example in Bitcoin.
This article covers the basics of mechanism design of smart contracts in the context of Bitcoin.
Mechanism design is concerned with creating or encoding preferences in an agreement.
Hence, an author of a smart contract can create a mechanism that enforces certain behaviour of the agents (or humans) interacting with the contract.
Essentially, the author of the contract wants to reward desired behaviours and punish undesired behaviours.
This is widely used in cryptocurrency protocols including the Lightning Network or Ethereum-based protocols such as Casper or TrueBit.

**Use Case:** Agents having access to sensors could sell the sensor data they are collecting to agents willing to buy this data.
This represents a simple contract where a resource is exchanged for a price.
Bitcoin in combination with payment channels secure the payments and allow for micro-payments.
Thus, one has to design protocols integrating with these existing technologies to achieve for example secure decentralised data exchanges.


## Bitcoin and smart contracts

Nakamoto introduced Bitcoin as a way to send money between peers without trusted third parties \[2\].
In Nakamoto consensus the heaviest chain is considered having correct transactions as most miners have contributed to this specific chain by solving a proof of work (PoW) puzzle.
Assuming that the majority of players in the system are honest (i.e. $50\% + 1$), the heaviest chain represents the "true" state of the network.

Bitcoin also included the capability of executing smart contracts with Bitcoin Script \[3\].
A smart contract is a piece of software which formalises a relationship between entities much like a legal contract \[4\].
However, the idea is to use secure computer protocols and include game theoretic elements to cover aspects that cannot be adequately verified in the protocol.
Szabo argues that smart contracts cover interactions including search, negotiation, commitment, performance, and adjudication.

## Rational agents

Agents in decentralised systems are self-interested \[5\].
Hence, protocols facilitating (economic) interactions between agents need to account for autonomous agents to behave rationally.
A set of agents $P = \{1 ... n\}$ is considered to be rational if they seek maximise their utility $u_i$ depending on some function \[5\] \[6\] \[1\].
This is especially relevant in decentralised systems, where we have to assume agents act only in their interest.
Agents can apply multiple strategies $s \in S$ within a negotiation \[1\].
We have to assume that agents will execute actions $\theta \in \Theta$ based on $s$ that optimises their utility including cheating, lying, breaking contracts, and hiding their intentions.
However, we also assume that agents that interact can find an outcome $\omega \in \Omega$ that increases or optimises $u_i$.

## Mechanism design

Mechanism design is used to encode preferences in an agreement.
Essentially, a "designer" defines a preferred social choice which, under the assumption of rational agents, the mechanism is intended to favour \[6\].
Considering a contract $C$ as an agreement between agents, $C$ implements a mechanism $M = (\Sigma, g)$ \[7\].
The outcome of the mechanism $g$ depends on the actions of agents $\Sigma$.
$M$ implements a rule $f$.
Rational agents would only enter $C$ or follow $C$ if $f$ is the result of the dominant strategies or Nash equilibrium of the agents.

An agent will have multiple options to enter contracts with other agents.
To ensure that the proposed contract $C$ is chosen, we want to have it incentive compatible.
Loosely speaking incentive compatibility of a mechanism occurs when the utility $u_i$ of each agent $i$ is maximised when an agent is "truth-telling" (i.e. the dominant strategy).
In games without money, non-trivial choices (e.g. more than two contracts, multiple potential agents, multiple different terms) lead either to incentive incompatibility, or the social choice function is a dictatorship according to the Gibbard--Satterthwaite theorem.
However, in Bitcoin, we can construct games with money.

## Games in Bitcoin

In games with money, a Vickery-Clarke-Groves (VCG) mechanism maximises social welfare.
A VCG mechanism is incentive compatible. Hence an agent strives to implement a contract as such a mechanism.
To construct such games the mechanism the Clarke pivot rule can be applied \[6\].
Agents in Bitcoin are playing a game with strict incomplete information.
One could argue that an agent could potentially analyse actions of an agent as transactions are public.
However, as agents might take multiple identities (Sybil), this is a non-trivial task, and thus, we will not consider it in this case.
We further assume that agents have independent private values, i.e. resources subject to trade do not depend on the other agents.

Such a game can be defined as follows \[6\]:

- A set of players $P = \{1, .., n\}$ exists.
- Every player $i$ has a set of actions $\Sigma_i$.
- Every player $i$ has a set of types $T_i$. A value $t_i \in T_i$ is a private input to the player.
- Every player $i$ has a utility function $u_i$. The utility function depends on its private input and the actions of all players $u_i = (t_i, \sigma_1, .., \sigma_n)$.

Hence, a player must choose an action only based on his private input but without knowing the private inputs of other agents.
A strategy $s$ describes an agent's decision to execute a specific action based on a private input.
The agent will choose $s$ that is the best response to any $\sigma$ by other agents.

However, an agent needs to optimise a specific social choice.
In Bitcoin, we are not concerned with social welfare as a social choice as this is unknown to the agents and they are not naturally interested in the utility of others.
In the case that only two agents are involved and we have a simple contract concerning one resource, single-parameter domains can be applied \[6\].
In such domains, the valuation $v_i$ of an agent depends only on one parameter, say obtaining the resource.
Moreover, the price an agent is willing to pay is already included in the incentive mechanism.

Yet, this would only hold for the case where two agents compete for obtaining a single resource.
In more complex cases, for example, adding the quality of the data, we need to apply a more complex social choice function.
In these cases, variations of VCG are the only incentive compatible mechanisms \[6\].

## Assumptions

Using the resource exchange formalisation described in \[1\] the following tuple defines the exchange setting:

$$(P,\mathcal{Z}, (v_{i})_{i \in P})$$

We are assuming that two agents exist, i.e. two players $P = \{A, B\}$.
Those agents are exchanging a purely digital resource for a specific price.
The agents negotiate over a single resource $z \in \mathcal{Z}$.
Moreover, they use a valuation function $v_i : 2^{\mathcal{Z}} \to \mathbb{R}$.
Agent $A$ hence defines the value $v_A(z)$ individually as well as agent $B$ in $v_B(z)$.

This valuation expresses the price an agent is willing to exchange the resource for, whereby we assume that $v_A \leq v_B$ if $A$ is offering the resource and $B$, is willing to pay for it. Otherwise, there would be no price for them agree on.
In this simple case, we assume that the agents follow the negotiation protocol truthfully and that their utility $U$ increases when making a deal and exchanging the resource.
We further assume that the agents have a way to enter such an agreement, i.e. one of them can prepare a contract that the other one can interpret and willing to commit to.

## Contract

The contract $C$ is implemented as an Hashed Timelock Contract (HTLC) \[8\] with multiple transactions in the Lightning Network. Note that $A$ sells data $z$, and $B$ buys it for the agreed price $p$ in Satoshi. To allow agents to exchange $z$ and atomic swap is used. This protocol has been described for cross-chain transactions but is equally useful within a single chain \[9\].

1. $A$ stores $z$ on IPFS receiving $H(z)$. $A$ uses this as the secret for the HTLC and sends this to $B$. As $A$ takes the Merkle root of $z$, the data can be of (almost) any size.
2. $B$ prepares a transaction transferring $p$ to $A$ spendable with the signature of $A$. Also, $B$ includes the spending condition $H(input) == H(z)$ based on the IPFS hash of the file. $B$ is also setting a time $t$ after which the transaction must be spent, otherwise, $B$ can redeem the locked funds. Last, $B$ sends the transaction to $A$ to sign it.
3. $A$ signs the transaction to agree to the trade and commits it to the channel.
4. $A$ reveals the $H(z)$ to issue the payment, which gives $B$ $H(z)$. $B$ obtains $z$ through IPFS.

This contract allowed an atomic swap of the file without the need to upload the file to Bitcoin. It requires both agents to be online which is a reasonable assumption for autonomous agents.
The protocol does not handle the security of the file.
Any party observing $H(z)$ can access $z$ without paying any price.
Hence, the protocol could be extended using GPG or other asymmetric encryption schemes.
In that case, $A$ could take $B$'s public RSA key to encrypt $z$ and then store it on IPFS.
This would allow private trading of the file.

## Mechanism analysis

**Players:** $A$ and $B$ are the only players in the game. They have the same capabilities and pre-contract the same norms. Post-contract one agent has the obligation to pay for $z$ and the other has an obligation to provide $z$. The contract is *atomic*. Hence, payment and delivery occur at the same time. However, there is a possible weakness in the contract. If $A$ reveals $H(z)$ without having the file stored on IPFS any more, $B$ will not be able to retrieve the file.

**Types:** Both players have a valuation $v(z)$. $A$ has private access to $z$.

**Strategy:** $A$ has three actions: not reveal $H(z)$, reveal $H(z)$ and have $z$ accessible, and reveal $H(z)$ and have $z$ inaccessible. $B$ has two actions: prepare HTLC with a payment $p$ for $A$ or not. Assuming $B$'s valuation of $v_B(z) > 0$, $B$ will propose a minimum payment. Since there is no proof of $z$ being available and the desired resource, $B$ has to account for this risk. The protocol could be improved by using concepts such as proof of replication \[10\].
$A$ will only consider revealing $H(z)$ in the proposed HTLC if $p \geq v_A(z)$. Moreover, $A$ might cheat $B$ by not making $z$ available. In case $A$ expects future trades with $B$, it has a motivation to actually provide $z$. $B$ might promise a higher pay for future interactions and adjust his valuation function to the resource $z$ provided by $A$ to a higher value since $A$ is based on previous direct experience trusted.

**Utility:** Utilities depend on the combination of strategies.

- $B$ proposes HTLC with payment $p$ and $A$ reveals $H(z)$ with $z$ available: $u_A = p - v_A(z)$ and $u_B = v_B(z) - p$. Under the assumption that $A$ does not loose anything from selling $z$.
- $B$ proposes HTLC with payment $p$ and $A$ reveals $H(z)$ with $z$ unavailable: $u_A = p - v_A(z)$ and $u_B = 0 - p$.
- $B$ proposes HTLC with payment $p$ and $A$ does not reveal $H(z)$: $u_A = 0$ and $u_B = 0$.
- $B$ does not propose HTLC: $u_A = 0$ and $u_B = 0$.

**Social choice:** Since $B$ proposes the contract, $B$ can set the social choice function. In this case, a single parameter domain is useful. The utility analysis shows that $p$ has the condition $v_A(z) \leq p \leq v_B(z)$. Since $B$ is not able to be sure that $z$ is available, $p$ will be low in the first tries as $B$ tries to manage his risk exposure. However, $B$ could argue that $A$ might be interested in future trades and include this as part of his utility function as an expected value. Hence, $B$ would only propose a contract if $p << v_B(z)$ since otherwise the risk is too high.

## References

\[1\] S. Fatima, S. Kraus, and M. Wooldridge, *Principles of Automated Negotiation*. Cambridge: Cambridge University Press, 2014 \[Online\]. Available: <http://ebooks.cambridge.org/ref/id/CBO9780511751691>

\[2\] S. Nakamoto, "Bitcoin: A peer-to-peer electronic cash system," 2008.

\[3\] Bitcoin Wiki, "Script." 2018 \[Online\]. Available: [https://en.bitcoin.it/wiki/Script{\\\#}Opcodes](https://en.bitcoin.it/wiki/Script{\#}Opcodes). \[Accessed: 27-Jun-2018\]

\[4\] N. Szabo, "Formalizing and Securing Relationships on Public Networks." 1997 \[Online\]. Available: <http://ojphi.org/ojs/index.php/fm/article/view/548/469>. \[Accessed: 07-Apr-2017\]

\[5\] T. W. Sandholm and V. R. Lesser, "Leveled Commitment Contracts and Strategic Breach," *Games and Economic Behavior*, vol. 35, nos. 1-2, pp. 212--270, 2001.

\[6\] N. Nisan, T. Roughgarden, E. Tardos, and V. V. Vazirani, *Algorithmic Game Theory*, vol. 1. Cambridge: Cambridge University Press, 2007, pp. 1--754 \[Online\]. Available: [http://portal.acm.org/citation.cfm?doid=1785414.1785439 http://ebooks.cambridge.org/ref/id/CBO9780511800481](http://portal.acm.org/citation.cfm?doid=1785414.1785439 http://ebooks.cambridge.org/ref/id/CBO9780511800481)

\[7\] N. Nisan and A. Ronen, "Algorithmic Mechanism Design," *Games and Economic Behavior*, vol. 35, nos. 1-2, pp. 166--196, Apr. 2001 \[Online\]. Available: <http://linkinghub.elsevier.com/retrieve/pii/S089982569990790X>

\[8\] Bitcoin Wiki, "Hashed Timelock Contracts." 2018 \[Online\]. Available: [https://en.bitcoin.it/wiki/Hashed{\\\_}Timelock{\\\_}Contracts](https://en.bitcoin.it/wiki/Hashed{\_}Timelock{\_}Contracts). \[Accessed: 28-Jun-2018\]

\[9\] I. Bentov *et al.*, "Tesseract: Real-Time Cryptocurrency Exchange using Trusted Hardware," 2017 \[Online\]. Available: [http://www.cs.cornell.edu/{\~}iddo/RTExchSGX.pdf](http://www.cs.cornell.edu/{~}iddo/RTExchSGX.pdf)

\[10\] A. Juels and B. Kaliski Jr., "Pors: Proofs of retrievability for large files," *Proceedings of the ACM Conference on Computer and Communications Security*, pp. 584--597, 2007 \[Online\]. Available: [http://www.scopus.com/inward/record.url?eid=2-s2.0-74049101079{\\&}partnerID=40{\\&}md5=83cf075b3704d4fe5bfb2ccf38c39362](http://www.scopus.com/inward/record.url?eid=2-s2.0-74049101079{\&}partnerID=40{\&}md5=83cf075b3704d4fe5bfb2ccf38c39362)

