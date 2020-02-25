---
layout: default
title: Projects
---

<div class="docs-section">
    <h1 class="docs-header">
        Current Projects
    </h1>
    <h2>
        <a href="https://crossclaim.github.io/" target="_blank">XCLAIM: Research on Blockchain Interoperability</a> 
    </h2>
    <p>
        XCLAIM is a protocol that enables cross-chain interoperability of cryptocurrencies. The idea is to issue tokens from one blockchain on another chain without any trusted intermediaries. Instead, the intermediaries are incentivized to behave honestly through collateral. Proofs of honest and malicious behaviour is achieved through transaction inclusion proofs. This is the first trustless cross-chain interoperability protocol with such strong guarantees and without the need to either trust a third-party or bootstrap a permissioned blockchain as intermediary.
    </p>
    <h2>
        <a href="https://github.com/nud3l/trusty" target="_blank">trusty: Reputation for DeFi</a> 
    </h2>
    <p>
        Collateral is the core security mechanism for DeFi protocols. Dai, Compound, Synthetix and others rely on agents to lock their coins, which in turn back newly created assets. Locking collateral, however, represents an opportunity cost for agents: they could use these coins to e.g. become a staking node in Ethereum or trade their coins for a profit on exchanges. We propose trusty, a system that allows agents to lower their collateral in a wide range of protocols implemented on Ethereum. Notably, the decrease of collateral provides the same level of protection against economically rational adversaries as before. To achieve this security property, the decrease of collateral has a lower boundary at the expected opportunity cost of having the collateral locked in a given protocol. Further, agents need to continuously perform "desired actions" in a protocol to enjoy the lower collateral bounds.
    </p>
</div>

<div class="docs-section">
    <h1 class="docs-header">
        Past Projects
    </h1>
    <h2>
        <a href="https://github.com/nud3l/smart-contract-specification" target="_blank">A specification language for smart contract verification</a> 
    </h2>
    <p>
        Smart contracts are still prone to security vulnerabilities. Apart from using automated tools to verify for known bugs, it can be beneficial to verify that a smart contract is correct with respect to some specification. However, using formal verification tools is mostly combined with a steep learning curve and requires a deep understanding of the tools. This projects aims to develop a domain-specific language for writing specifications to verify smart contracts. The idea is to abstract away some of the complexities so that formal verification can become a standard tool for smart contract developers.
    </p>
    <h2>
        <a href="{{ site.url }}/blockchain/2017/01/10/dinvest.html">dInvest: a social hedge fund in Ethereum</a> 
    </h2>
    <p>
        Selecting a suitable financial investment, ethical and social criteria are becoming critical success factors. The core issue is finding a suitable framework for sustainable and profitable investment in combination with full transparency over the decision process and transactions. We are working on a proof-of-concept to realize profitable, transparent and socially responsible investment. 
    </p>
    <h2>
        <a href="{{ site.url }}/ai/2017/01/12/breakingcaptcha.html">Breaking CAPTCHAs using deep learning</a> 
    </h2>
    <p>
        The aim of the project is to break CAPTCHAs using deep learning technologies. Initially the focus lies on simple CAPTCHAs to evaluate the performance and move into more complex CAPTCHAs. The training dataset is generated from an open source CAPTCHA generation software. Tensorflow is used to create, train and test the network.
    </p>
</div>