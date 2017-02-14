---
layout: post
title:  "Quantitative Finance with Zipline"
date:   2017-02-10
categories: quant
authors: Dominik
---
# Quantitative Finance with Zipline
As stated in the [dInvest post series](http://dominikharz.me/blockchain/2017/01/10/dinvest.html) the idea is to build a hedge fund in a blockchain. Due to computational limitations, it is not feasible to implement investment agents in the blockchain. In dInvest an investment agent should do the following: (1) Get a list of all available financial assets to trade; (2) based on the data given (i.e. financial data and fundamentals data) make a recommendation which assets to buy; (3) keep track of which assets the agent is currently holding; and (4) send the recommended assets to buy to the blockchain. In this blog post I will cover the first three tasks. But what does a hedge fund actually do and how do financial investment strategies look like? I had taken some courses in my undergrad on international finance, but as a computer scientist I had to learn some new concepts while doing this project.


Financial investments can take different forms. A hedge fund offers multiple individuals to acquire a part of the pooled investment, which itself invests in publicly
traded financial assets. It is measured according to its absolute returns [1]. A manager administrates the
investment of the hedge fund and takes the decisions to buy, sell, or hold financial assets to balance absolute
returns and risks. A hedge fund may apply different strategies. Hedge funds can follow one specific strategy, mix
established strategies, or create a fund out of hedge funds to diversify [2]. The majority of hedge fund
strategies try to optimize the absolute return and risk based on financial indicators of the assets to be invested
in. An overview of the different strategies that are currently applied by different hedge funds is provided by
HFR, Inc in [3]. Measuring the performance of hedge funds as well as specific influence factors is a wide
research area, which is covered in more detail in our report.

## Measuring success of investments
A common standard in literature and the investment practice to compare hedge funds is based on
their absolute returns, Sharpe ratio, alpha and beta as well as a comparison to benchmarks [2].

- Returns: The return of the fund is influenced by how well the strategy is able to determine assets that are increasing (for long buys) or decreasing (for short buys) in value over time.
- Sharpe: With the Sharpe ratio one can determine the return in respect to the risk involved. The Sharpe ratio is calculated by dividing the sum of the asset return and a benchmark return by the standard deviation of the asset return. The higher the Sharpe ratio, the higher the return with the same risk or the lower the risk with same return.
- Alpha: The alpha value expresses the risk-adjusted performance of the fund in comparison to a benchmark. An alpha of zero means exact performance as the benchmark. A positive value indicates outperforming the benchmark and a negative value represents falling behind the benchmark.
- Beta: The beta value shows the volatility of the fund in comparison to a benchmark. The beta value baseline is one and represents the same volatility as the benchmark. A value below one indicates a lower volatility and consequently a value above one a higher volatility than the benchmark.


## Quantitiative finance
To implement an investment strategy, certain rule sets are developed and applied. Quantitative finance
”translates” economic models into the mathematical world and allows to apply for example stochastic
analysis over shares or calculate the value of derivatives [4]. Quantitative finance techniques express
investment strategies in mathematical formulas and thus enables a translation into an algorithm [4].
When starting out with dInvest, we were looking into existing quantitative frameworks, that offer us (1) a simulation environment
to test our algorithms without using actual money, (2) realistic conditions of the trading market, such as
fees and process delays, (3) is able to trade shares and derivatives based on historical data to test our
algorithm, (4) provide little delay (lower than 10 minutes) in trading current assets, and (5) is able to be
controlled using a programming language (such as Python, Java, or Scala). We evaluated several solutions
decided to use the open source implementation of the Quantopian framework [zipline](github.com/quantopian/zipline).

## Getting started with zipline
Zipline is based on python and is able to run with python 2 and 3. Quantopian has created a [beginners tutorial](www.zipline.io/beginner-tutorial.html) on their website. Before going into the details of zipline, let us look into how to set it up locally. Note: I will be using python3 throughout this post.
To install zipline you first need all the required C extensions. For Debian based distributions use the command shown below, otherwise there are some more details [provided here](www.zipline.io/install.html){:target="_blank"}.

```
sudo apt-get install libatlas-base-dev python-dev gfortran pkg-config libfreetype6-dev
```

I then created a virtual environment for Zipline. If you have never setup a virtualenv follow [this tutorial](http://docs.python-guide.org/en/latest/dev/virtualenvs/){:target="_blank"}. In case you want to use pyhton3 like me, make sure to use the ```python3``` executable. Also, when trying python2 I ran into a couple of issues as Linux Mint uses older versions of python2, which seem to be incompatible with the required version of numpy. When you setup your virtualenv, run ```pip install zipline``` from the terminal with your virtualenv . This will install all the required packages including numpy and most likely take some time.

## The first investment algorithm
In the ```/zipline/examples``` folder you will find some example algorithms to try out. In their beginners tutorial the zipline authors describe some of the algorithms, how they are generally structured and how to execute them. I will go into more detail about having a value investment algorithm and not take one of the example algorithms.

The algorithm to be implemented is inspired by Benjamin Graham [6]
1. Select shares and derivatives of companies with a market capitalization of minimum 100 million dollars
2. Determine the SIC code of each asset [5] and exclude the ones contained in the blacklist from the hedge fund
3. Based on the sectors of the companies find the two sectors with the price of assets per earning ratio (PE ratio)
4. Invest every month in all the companies listed in the two sectors

Let's take a look at our [algorithm](https://github.com/nud3l/dInvest/blob/master/trading/recommender/InvestHandlerSimple.py){:target="_blank"}.
It is basically taken from the web-based version of zipline called Quantopian and can be found [here](https://www.quantopian.com/posts/grahamfundmantals-algo-simple-screening-on-benjamin-graham-number-fundamentals){:target="_blank"}. I have tried to include quite some comments, so if you are familiar with python then the code should be quite readable. Zipline does not include the full functionality and data to realize the investment algorithm. The market capitalization data, sector codes, and PE ratio are not accessible from zipline. For a quick overview of the current code and the changes I made, I will go through the main functions. Also, please note that I only used free sources of financial data. There seem to be a lot of other sources available, but they have their price tag.

```initialize(context)``` Defines the number of sectors we are interested in and also schedules to execution of our algorithm for back-testing.

```rebalance(context, data)``` This essentially takes to selected assets and distributes them evenly into our portfolio.

```get_fundamentals(context, data)``` In Quantopian this is fairly easy, since the Morningstar fundamentals dataset is included. However, in zipline I had to find a workaround. Quandl offers the SF0 fundamentals for free: [www.quandl.com/data/SF0-Free-US-Fundamentals-Data](www.quandl.com/data/SF0-Free-US-Fundamentals-Data). To get a full view of the data, I choose to download the whole data as a CSV file and automated the process. An example of how to do this can be found in the ```TradeHandler.getData(self)``` function [here](https://github.com/nud3l/dInvest/blob/master/trading/trader/TradeHandler.py){:target="_blank"}.

```get_sectors(key)``` Again, this is included in Quantopian, but needs a manual workaround. To get the sector codes it is quite simple. You need to download a txt file, which includes the sector codes and the function will read them into a dict.


```get_sector_code()``` Also, this part is included in Quantopian. Here we download a JSON file to get a mapping of sector codes to the financial assets we are trading.

To analyse the performance of the investment algorithm the absolute returns, Sharpe, alpha, and beta for the
period of January 1, 2009 to November 15, 2016 is compared. The investment algorithm uses the Quandl
financial data i.e. opening and closing prices of specific assets during that period [8]. The algorithm is executed
multiple times. First, no sectors are excluded and second, an
exclusion list based on sectors is used. Defense, beer and alcohol, tobacco, and coal industry are excluded based
on ESG criteria and common practices [9].
The first graph in the figure below presents the returns achieved by the unrestricted
algorithm, the algorithm with single excluded sectors, and the benchmark return. These returns show that
unrestricted and single excluded algorithms have overall a higher profit than the benchmark. The second graph in the figure
displays a combination of two excluded sectors and the benchmark return, while the third graph elaborates on the
combinations of three and all four sectors excluded.
A single or combination of exclusions constantly perform better than the benchmark until
beginning of 2012. Then the unrestricted algorithm as well as the single exclusion of defense and alcohol
exclusion and also the combination of tobacco and coal, defense and alcohol, defense and coal exclusions
drop until they recover in 2014. The other single and combination algorithms do not show this drop, but also
have a strong increase in returns in 2014. Then all variations show high volatility. The drop in 2012 in the
unrestricted algorithm is caused by three of the sectors it is investing in. When tobacco is restricted, there is
no strong drop in 2012. However, if not also in combination defense and/or coal is restricted the algorithm
selects either of the two industries instead and another drop occurs. In the third graph of the figure these exclusions are
combined and no significant drop occurs, however the volatility remains.


<img src="{{ site.url }}/images/blog/dinvest/investment_return_single.png" alt="" width="550"/>

<img src="{{ site.url }}/images/blog/dinvest/investment_return_double.png" alt="" width="550"/>

<img src="{{ site.url }}/images/blog/dinvest/investment_return_triple.png" alt="" width="550"/>



There is further analysis and discussion of the results in our [report](https://goo.gl/T74EGE){:target="_blank"}.





# References
1. D. Harper. (2016) Hedge funds hunt for upside, regardless of the market. [Online]. Available: http://www.investopedia.com/articles/03/112603.asp
2. M. Agarwal, Hedge Fund Strategies. John Wiley & Sons, Inc., 2009, pp. 45–55. ISBN 9781118258187. [Online]. Available: http://dx.doi.org/10.1002/9781118258187.ch4
3. Hedge Fund Research. (2016) HFR hedge fund strategy classification system. [Online]. Available: https://www.hedgefundresearch.com/hfr-hedge-fund-strategy-classification-system
4. P. Wilmott, Paul Wilmott on quantitative finance. John Wiley & Sons, 2013.
5. U.S.D. of Labor. (2016) SIC division structure. [Online]. Available: https://www.osha.gov/pls/imis/sic_manual.html
6. B. Graham and D. Dodd, Security Analysis: Sixth Edition, ser. Security Analysis Prior Editions. McGraw-Hill Education, 2008.
7. Quantopian. (2016) zipline: Pythonic algorithmic trading library. [Online]. Available: https://github.com/quantopian/zipline/
8. Quandl. (2016) Quandl: financial database. [Online]. Available: https://www.quandl.com/browse?idx=database-browser
9. J. R. Evans and D. Peiris, “The relationship between environmental social governance factors and stock returns,” UNSW Australian School of Business Research Paper No. 2010ACTL02, 2010.
