---
slug: ai-agents-onchain
title: "Personal Finance Agents: Guardrails Onchain, Not in the Prompt"
tags: [ai, bitcoin, defi, agents, onchain]
authors: dom
---

Managing money is a tricky business. Most people know this, and it's no different for me. But I do like to tinker with software, AI, and blockchains. So why not solve this problem with technology? After all, who hasn't dreamed about magically multiplying their money without any effort.

Surely, nothing can go wrong with that.

Anyone that has worked with AI knows that keeping it in check is a challenge. After all, nobody wants to wake up to a "Sorry, your money is gone. I really shouldn't have gone 20x leverage with your entire portfolio on this memecoin". Our preferences, risk-appetite, and intentions need to be clearly defined and then enforced in a robust way, not by pleading in our agents.md, in the AI memory layer, or prompts.

In this post I'm exploring my current exploration of this vision. I have three hypotheses how AI-native finance will play out and along those I'm exploring the space:

1. **AI agents learn to manage money better and faster than (most) humans will**. But they will eventually break any boundaries you set them to finish their task (make you more money). And in the process they will catastrophically fail.
2. **Enforcing strict rules requires cryptography and onchain programs that are impossible for the agent to change.** We need to define our intentions into a set of rules that agents cannot circumvent. Blockchains are useful for this since changing Bitcoin or Ethereum is very hard.
3. **Finance agents will be personal to you**. Instead of generic apps where users need to actively make decisions, finance agents will have autonomy over decisions. They will also be way more tightly integrated into our current communication layers (read: chat apps).

<!-- truncate -->

## Agents Managing Money

Agents will manage money better than the majority of humans. Not because humans are not capable, but because investing is hard and agents improve at a rate (most) humans can't match. The pace at which my personal software engineering workflow changed in the last 12 months, from mostly writing code myself, to AI-assisted coding and AI reviews, to 95% of my code being AI generated with custom workflows, is stunning.

When Karpathy published [autoresearch](https://github.com/karpathy/autoresearch) it dawned on me how easy it is going to be to develop trading algorithms. In a nutshell, the idea of autoresearch is that an agent tries to optimize some sort of function (building an LLM, investing, ...) by coming up with hypotheses and testing them. The agent records each experiment with as little oversight as possible. Spoiler alert: getting the backtesting right is where most of this falls apart. Point an optimization loop at historical data and it gets very good at finding strategies that look great on the backtest and lose money live. That's the hard part, and it's why I wouldn't trust an agent's edge just because it did well on past data.

Nevertheless, autoresearch sparked a big push for people to use the core principle of agent-owned hypothesis and experimentation research loops. The continuation of this principle will find its way to custom functions (what are the risk profiles are person is willing to take, what should the AI optimize for, ...).

We can take this even further with nested agents. A meta-investment agent delegating to specialized agents, e.g., the meta agent has $10k that it wants to invest in a diversified position and decides to delegate 50% of its portfolio to an all-world ETF agent, 40% to the stock market and 10% to a high-risk leveraged crypto trading agent.

Each agent can optimize its own function continuously with the meta-agent keeping the big picture in mind. The meta-agent or specific "audit" agents can also keep an eye on the function being optimized and how it's tested. For example, just increasing leverage on a high-risk strategy might increase risk outside of the bounds that the user is comfortable with.

If you've been around for a longer time, then this isn't necessarily new. Multi-agent systems were very popular back in the day. It is only that LLMs allow us to put a lot of the theory in practice now with reasonably little effort as anyone can write an agent. Generating code is now accessible to anyone with an LLM subscription or a local computer with enough compute power.

I'm sure that self-learning finance agents available to anyone is just a matter of time. To get there, we need to solve two hard problems:

1. Agents need to interact with finance directly, with their own funds and accounts.
2. Agents need to be constrained to whatever the user is comfortable with, in a way they can't talk their way around.

Adoption is often listed as a third challenge, but I don't think it's a peer to these two. People don't adopt infrastructure, they adopt products that work. If autonomous finance is safe and genuinely useful, the distribution problem mostly takes care of itself. And as I'll argue later, the distribution channel already exists in the chat apps we use every day.

## Agent-Based Finance

### Going Onchain

While agents could use existing banking APIs, they have the downside that it's not truly autonomous. Banks (still) require humans to complete KYC/KYB procedures.

Clearly, agents managing their own wallets onchain is the near future for agent-owned finance. They can freely create new wallets, trade assets, borrow funds, and interact with other humans and agents. While most onchain interactions are around blue-chip assets like BTC, ETH, SOL and stablecoins, the push for real-world assets including stocks, ETFs and others is only accelerating. From my perspective, onchain unlocks much higher efficiency to transfer assets and thus financial institutions will eventually push for assets to be onchain.

### Constraining Agents

Anyone who has ever used LLMs knows this: You ask the AI to not do something but throughout the conversation it just forgets. Your API keys get sent to Anthropic or OpenAI. Your OpenClaw instance is open to the internet. Containing AIs is tricky since it will find creative ways to achieve what you ask for it while failing you in unintended ways. Your app will be built and published. But it might use a compromised dependency as you did not explicitly ask it to check to not deploy vulnerable code.

Potentially catastrophic side-effects are a massive problem. They are rooted in the conflict between (1) letting the AI run as autonomously as possible (clicking approve all the time is annoying) and (2) the high effort of verifying the AI's output (who really has time to read all that code and actually understand it?).

When it comes to money, we need a mechanism to clearly define our boundaries and enforce rules that AI cannot circumvent. Luckily, we know that with cryptography and smart contracts enforced by consensus, we can add a layer of enforcement the agent will have a difficult time working around. Bonus points if we can do this in a privacy-preserving way!

## Controlling Your Agents

On the trade-off of handing over autonomy to the agent vs verifiying, we will likely see various degrees of agent-based finance ranging from AI-assisted finance to fully autonomous with various shades in between. 

**AI-assisted finance** means that an agent suggests certain strategies and transactions but the execution of financial transactions is left to the human. For example, Claude can analyze assets and develop trading strategies. But the human in the loop would not give their API keys or private keys to the Claude instance to actually execute the trades. They have to do it themselves as a last step to verify that they really want to do this.

**Autonomous finance** means that the agent has full control. In a naive way, the human funding the agent would only give a profit goal and declare their overall risk appetite. The agent would act autonomously to invest the money, interpret what this "risk appetite" exactly means, and make any financial transactions.

This isn't black-and-white and likely there will be many in-between solutions. For example, you might set up an autonomous trading agent that trades perps on Hyperliquid without any human oversight. But you might never give your agent access to your ETF portfolio. It's also possible to combine autonomous systems with human-controlled ones. For example, you can set up your autonomous agent to cash out profits to Bitcoin into a wallet that the agent cannot control. So essentially, you are making sure to take profits and that the agent cannot gamble those profits away.

The big open question is of course: How are we going to safeguard the autonomous agents?

## Smart Accounts with Hard Rails

Giving an agent access to your bank accounts and private keys is where things get interesting and dangerous. Prompt-based guardrails don't work, and I mean it. Anyone who has worked with AI knows the pattern: you give clear instructions, and the model does exactly the thing you told it not to do. Prompts are suggestions. The agent can reinterpret them, find edge cases, or just ignore them when its reasoning leads somewhere else. You can't tell an agent "don't spend more than 1 BTC" and trust that it will listen.

So the guardrails can't live in the prompt. They have to live in the wallet.

But "in the wallet" only works if the agent can't quietly rewrite the wallet's rules. That means a separation of keys. The agent holds an operating key that can only act within the limits. You hold a separate key, one the agent never has access to, that is the only key able to change the limits, upgrade the account, or move funds out of bounds. The agent can spend up to 0.1 BTC a day, but it cannot raise that number to 1, because the key that sets it isn't on the machine the agent runs on. If the agent's key leaks, the blast radius is one day's limit, not the whole account. The boundary is only real because the agent can't reach the thing that defines the boundary. This is also why onchain matters here and bank APIs don't: the chain enforces the split between the two keys without trusting either the agent or an intermediary to honor it.

This is where smart accounts come in. A programmable layer on your assets where the rules are enforced by code. The agent can request transactions, but the account only executes them if they pass the rules. If the rules say "max 0.1 BTC per day", the agent literally cannot spend more. 

What those rules could look like:

- **Spending limits**: max X BTC per day, enforced by the account itself. This is typically a good last resort check to make sure the agent cannot move everything at once. Also, if keys get compromised, limits can reduce potential impact.
- **Protocol whitelists**: transactions only execute if they target approved contracts. Think of this like the App Store model. Apple doesn't trust every developer. It reviews apps and enforces rules before anything reaches users. Similarly, the smart account checks transactions against a curated list of audited, reputation-scored protocols.
- **Mandatory cash-out**: if the portfolio hits a profit target, funds return to a cold wallet automatically. This is similar to the spending limits, where the funds agents have access to is limited especially when the agent made a (significant) profit.
- **Loss limits**: if positions drop below a threshold, everything unwinds. Think about this like an enforced stop-loss but with the addition to potentially moving the funds also to a cold wallet.
- **Time locks**: the agent must return funds after N days. For temporary runs or test-runs, this can be very helpful.

The key point is that these rules exist between the agent and the money. The agent can be as creative as it wants within the boundaries. It just can't move the boundaries.

The mechanism is straightforward in principle: the rules live in the smart account and are checked on-chain before any transaction executes. The agent prepares a transaction, the account verifies it against the rules, and only then does it settle. How those rules get expressed and enforced efficiently, especially across both EVM chains and Bitcoin, is its own rabbit hole and warrants a dedicated post.

## Finance Moves Into Conversation

Your most trusted financial advisor will be a personal AI. Finance is boring in a way. At least my personal finances. I love to tinker with the technology and build products. I do use financial apps I find useful. But if there was a mature and safety-checked AI that handles my finances, why should it need a dedicated app? It can just reach out to me on my existing chat apps when it needs something from me. It should proactively generate tax reports for me. I should be able to ask it questions around financial decisions like taking a loan to buy a house or apartment when I need to and it should act with my best interest at its core. Finance would become part of the communication layer much as other parts of my life.

This isn't a new idea. Payments already work this way in parts of Asia through WeChat Pay and AliPay. The financial layer disappeared into the messaging layer. But we need to build it in a way that it isn't controlled by a single company. Instead, we should have open protocols and interoperable systems. Let agents invest onchain. Allow anyone to build UX layers (better chat, apps with nice tables, diagrams, etc.) with ownership of the data retained by the user.

In my opinion, the dedicated financial app becomes unnecessary because the conversation is the better interface. Not for power users who want dashboards and candles. For the majority of people who just want to know their money is growing and be able to make changes when they need to.

## What's Next

A large part of the infrastructure to build an agent-first bank is being built at BOB with the goal of making Bitcoin the ultimate enforcement layer. The first piece is making BOB Gateway work as agent infrastructure for on-ramping and off-ramping between Bitcoin and EVM chains. I've been building a [CLI](https://github.com/bob-collective/bob) that can then be consumed by an [OpenClaw](https://openclaw.dev) skill and other agent integrations.

My personal research project is around the enforcement layer. How can we ensure that we limit agents given a fuzzy set of human intentions? More on this in future posts!

If this vision is right, the future of personal finance won't look like an app. It'll look like a conversation, backed by hard rules that even the smartest agent can't break.
