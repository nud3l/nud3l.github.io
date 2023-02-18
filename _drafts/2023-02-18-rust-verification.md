---
layout: post
title: "Verifying Rust: Exploring Verification Options for Substrate"
subtitle: ""
date: 2023-02-18
categories: blockchain, security, software-engineering
authors: Dom
---

Security is hard to get right in blockchains. It's even harder to make sure that code is correct while still actively developing the product: code changes are frequent, requirements are changing, and the codebase is growing. In this post, we'll explore some of the options we have for verifying the code we write in Rust, specifically for the Substrate blockchain framework to try to verify the code of the [Interlay blockchain](https://www.github.com/interlay/interbtc).

# Substrate Runtimes as Verification Targets

We are building the [Interlay](https://interlay.io) and Kintsugi blockchains based on the Rust [Substrate](https://substrate.dev) framework.
For verifying that the "code is correct", we are looking for two targets:

1. **Runtime**: The WASM runtime encodes the rules of the blockchain subject to consensus verification. This is where we can potentially introduce logical errors in how the protocols are working or in their implementation such that we either impact the *safety* or *liveness* of the system.
2. **Node Implementation**: The node implementation wraps around the runtime. Bugs introduced here can impact the *liveness* of the system.

# Diving into Verification

Software verification is most often quite an academic exercise. With the adverse environment of blockchain development, there's a clear benefit of increased security assurance in the software development process.
This goes hand in hand with the [desire of the verification community to integrate verification into the development process](https://alastairreid.github.io/papers/HATRA_20/).

I'll not cover the usual testing and fuzzing tools but rather explore three tools I found most accessible for verification in Rust.

My criteria for selecting tools were:

1. **Actively maintained**: The tool should be actively maintained and have a community around it. I checked the GitHub repositories for current contributions and when the last commit was made.
2. **Clear documentation**: The tool should have clear documentation on how to use it and get started. If after 10 minutes of parsing the available documentation, I could not get a good understanding of how to install or use the tool, I would not use it.
3. **Rust integration**: Since the idea is to integrate the tool into the normal development workflow, I was looking for a tool that integrates well with `cargo` and also does not require writing verification code in a language other than Rust.

# Selected Tools

From the tools I found, I selected the following three tools for further exploration:

- [Prusti](https://viperproject.github.io/prusti-dev/)
- [kani](https://github.com/model-checking/kani)
- [MIRAI](https://github.com/facebookexperimental/MIRAI)

More tools are available on the [Rust Formal Methods Interest Group](https://rust-formal-methods.github.io/tools.html) website and on [Alastair Reid's blog](https://alastairreid.github.io/automatic-rust-verification-tools-2021/).

