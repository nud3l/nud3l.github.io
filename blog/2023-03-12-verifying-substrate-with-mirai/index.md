---
slug: "mirai-substrate-verification"
title: "Verifying Substrate with MIRAI"
tags: [blockchain, security, software-engineering, rust, substrate, polkadot, interlay]
authors: dom
---

## Verifying the interbtc fee pallet

### Setup

Clone the interbtc repository and enter the fee crate:

```bash
git clone git@github.com:interlay/interbtc.git
cd interbtc/crates/fee
```

Make sure MIRAI is installed as described in the [installation guide](https://github.com/facebookexperimental/MIRAI/blob/main/documentation/InstallationGuide.md).

Run MIRAI on the fee crate:

```bash
export MIRAI_FLAG = "--diag=paranoid --print_function_names"
export MIRAI_LOGS = "warn"
cargo mirai
```

This should complete successfully with an output:

```bash
    Finished dev [unoptimized + debuginfo] target(s) in 37.45s
```

Running MIRAI plainly gives us the confidence that there are no panics in the code. So far, so good.

### Writing custom verification rules

Let's add 