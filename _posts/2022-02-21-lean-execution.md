---
layout: post
title: "Lean Execution"
subtitle: "Lean Execution: How to Stay Focused"
date: 2022-02-21
categories: agile, work
authors: Dom
---

When building a company and shipping a product, it's both critical and extremely hard to stay focused.
Much has been written about this subject before.
I'm sharing here which three questions I'm trying to ask myself to help to stay lean.

# Why do we need this feature?

Most of the time, you or a colleague got a great idea to improve the product or the company.
Especially, when you have not found product-market fit yet or the company is growing, you might feel the urge to add things, change things, and generally make sure you are set up for success.
However, I find myself often in discussions bout how to implement said change/feature instead of why?
Before going into the actual implementation, I try to understand two critical aspects:

- What benefit does this change bring to our users? This can be the users of our product, users of internal or external processes, or anyone that stands to benefit from this change. It's helpful to classify the using T-shirt sizes from S to XL and later go into a more concrete assessment (what % of our user base profits from this, are these the critical users, ...).
- Does this support our company goals in the mid/long-term? Sometimes a new feature can be beneficial to a user, but might not be in the long-term strategical interest of the company. I like to also use the T-shirt sizes here to gauge this question and later analyze this in more detail.


# When do we need this feature?

Before talking about how to implement a feature, it's critical to understand where it fits in the roadmap.
If you anyway decided that the feature does not add any benefit (see question 1), it's likely not worthwhile to specify a concrete timeline but rather give it some sort of medium or low priority on the backlog.
However, if it's an important feature, the next step is to understand the dependencies of where it fits in the roadmap.

Some key questions I like to think about:

- Does the feature require another feature to be launched first to make it useful? Understand if there is a required sequence of steps.
- Can we launch without the feature? Is the feature critical and we cannot ship to the user without it. Or would it be great to have at launch but not critical.

# How should we launch the feature?

After understanding the added value of the feature and its order in the timeline, the next step is to understand how the feature should be launched.
Sometimes this process is overlooked but I find it helpful to acknowlegdge that you can and often should simplify features to their core value proposition.
In crypto, the first iteration of Uniswap was simple but it worked.
MakerDAO launched with a single collateral asset and it worked as well.
Identifying the critical feature set is a hard exercise and requires an excellent understanding of user demand and competitor position.

I'm an engineer and researcher at heart and we tend to often strive for a perfect, over-engineered solution that covers every edge case.
It's even worse coming from a security-focused background where your first step is to ask: How do we break this protocol?

In the product world, I found it often acceptable to tolerate limited sub-optimal edge cases in the product, acknowledge them, and fix them later.
The point here is that you want to get a product out at the right time.
And more often than not, getting the feature out with its essential benefit and have it "good enough" saves significant effort.

This last point I find often overlooked. Additional complexity in the feature costs us often 3x more time investment down the line since it's not just the design that is more complicated. It's also the implementation, the documentation, and the testing that are proportionally more involved.
