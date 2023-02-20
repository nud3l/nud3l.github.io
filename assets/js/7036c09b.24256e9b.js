"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4841],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=h(n),p=i,m=c["".concat(l,".").concat(p)]||c[p]||u[p]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var h=2;h<o;h++)r[h]=n[h];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var a=n(7462),i=(n(7294),n(3905));const o={slug:"quantitative-finance-zipline",title:"Quantitative finance with zipline",tags:["quant","finance","zipline","python"],authors:"dom"},r=void 0,s={permalink:"/blog/quantitative-finance-zipline",editUrl:"https://github.com/nud3l/nud3l.github.io/blog/2017-02-10-quantitative-finance-with-zipline/index.md",source:"@site/blog/2017-02-10-quantitative-finance-with-zipline/index.md",title:"Quantitative finance with zipline",description:"As stated in the dInvest post series the idea is to build a hedge fund in a blockchain. Due to computational limitations, it is not feasible to implement investment agents in the blockchain. In dInvest an investment agent should do the following: (1) Get a list of all available financial assets to trade; (2) based on the data given (i.e. financial data and fundamentals data) make a recommendation which assets to buy; (3) keep track of which assets the agent is currently holding; and (4) send the recommended assets to buy to the blockchain. In this blog post I will cover the first three tasks. But what does a hedge fund actually do and how do financial investment strategies look like? I had taken some courses in my undergrad on international finance, but as a computer scientist I had to learn some new concepts while doing this project.",date:"2017-02-10T00:00:00.000Z",formattedDate:"February 10, 2017",tags:[{label:"quant",permalink:"/blog/tags/quant"},{label:"finance",permalink:"/blog/tags/finance"},{label:"zipline",permalink:"/blog/tags/zipline"},{label:"python",permalink:"/blog/tags/python"}],readingTime:9.065,hasTruncateMarker:!1,authors:[{name:"Dominik Harz",title:"CTO Interlay",url:"https://harz.dev",imageURL:"https://github.com/nud3l.png",key:"dom"}],frontMatter:{slug:"quantitative-finance-zipline",title:"Quantitative finance with zipline",tags:["quant","finance","zipline","python"],authors:"dom"},prevItem:{title:"Integrating Python and Ethereum",permalink:"/blog/ethereum-python-integration"},nextItem:{title:"Breaking captchas: Using deep learning to automatically break CAPTCHAs",permalink:"/blog/breaking-captchas"}},l={authorsImageUrls:[void 0]},h=[{value:"Measuring success of investments",id:"measuring-success-of-investments",level:2},{value:"Quantitiative finance",id:"quantitiative-finance",level:2},{value:"Getting started with zipline",id:"getting-started-with-zipline",level:2},{value:"The first investment algorithm",id:"the-first-investment-algorithm",level:2},{value:"References",id:"references",level:2}],d={toc:h},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As stated in the ","[dInvest post series]","({% post_url 2017-01-10-dinvest %}) the idea is to build a hedge fund in a blockchain. Due to computational limitations, it is not feasible to implement investment agents in the blockchain. In dInvest an investment agent should do the following: (1) Get a list of all available financial assets to trade; (2) based on the data given (i.e. financial data and fundamentals data) make a recommendation which assets to buy; (3) keep track of which assets the agent is currently holding; and (4) send the recommended assets to buy to the blockchain. In this blog post I will cover the first three tasks. But what does a hedge fund actually do and how do financial investment strategies look like? I had taken some courses in my undergrad on international finance, but as a computer scientist I had to learn some new concepts while doing this project."),(0,i.kt)("p",null,"Financial investments can take different forms. A hedge fund offers multiple individuals to acquire a part of the pooled investment, which itself invests in publicly\ntraded financial assets. It is measured according to its absolute returns ","[1]",". A manager administrates the\ninvestment of the hedge fund and takes the decisions to buy, sell, or hold financial assets to balance absolute\nreturns and risks. A hedge fund may apply different strategies. Hedge funds can follow one specific strategy, mix\nestablished strategies, or create a fund out of hedge funds to diversify ","[2]",". The majority of hedge fund\nstrategies try to optimize the absolute return and risk based on financial indicators of the assets to be invested\nin. An overview of the different strategies that are currently applied by different hedge funds is provided by\nHFR, Inc in ","[3]",". Measuring the performance of hedge funds as well as specific influence factors is a wide\nresearch area, which is covered in more detail in our report."),(0,i.kt)("h2",{id:"measuring-success-of-investments"},"Measuring success of investments"),(0,i.kt)("p",null,"A common standard in literature and the investment practice to compare hedge funds is based on\ntheir absolute returns, Sharpe ratio, alpha and beta as well as a comparison to benchmarks ","[2]","."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Returns: The return of the fund is influenced by how well the strategy is able to determine assets that are increasing (for long buys) or decreasing (for short buys) in value over time."),(0,i.kt)("li",{parentName:"ul"},"Sharpe: With the Sharpe ratio one can determine the return in respect to the risk involved. The Sharpe ratio is calculated by dividing the sum of the asset return and a benchmark return by the standard deviation of the asset return. The higher the Sharpe ratio, the higher the return with the same risk or the lower the risk with same return."),(0,i.kt)("li",{parentName:"ul"},"Alpha: The alpha value expresses the risk-adjusted performance of the fund in comparison to a benchmark. An alpha of zero means exact performance as the benchmark. A positive value indicates outperforming the benchmark and a negative value represents falling behind the benchmark."),(0,i.kt)("li",{parentName:"ul"},"Beta: The beta value shows the volatility of the fund in comparison to a benchmark. The beta value baseline is one and represents the same volatility as the benchmark. A value below one indicates a lower volatility and consequently a value above one a higher volatility than the benchmark.")),(0,i.kt)("h2",{id:"quantitiative-finance"},"Quantitiative finance"),(0,i.kt)("p",null,"To implement an investment strategy, certain rule sets are developed and applied. Quantitative finance\n\u201dtranslates\u201d economic models into the mathematical world and allows to apply for example stochastic\nanalysis over shares or calculate the value of derivatives ","[4]",". Quantitative finance techniques express\ninvestment strategies in mathematical formulas and thus enables a translation into an algorithm ","[4]",".\nWhen starting out with dInvest, we were looking into existing quantitative frameworks, that offer us (1) a simulation environment\nto test our algorithms without using actual money, (2) realistic conditions of the trading market, such as\nfees and process delays, (3) is able to trade shares and derivatives based on historical data to test our\nalgorithm, (4) provide little delay (lower than 10 minutes) in trading current assets, and (5) is able to be\ncontrolled using a programming language (such as Python, Java, or Scala). We evaluated several solutions\ndecided to use the open source implementation of the Quantopian framework ",(0,i.kt)("a",{parentName:"p",href:"github.com/quantopian/zipline"},"zipline"),"."),(0,i.kt)("h2",{id:"getting-started-with-zipline"},"Getting started with zipline"),(0,i.kt)("p",null,"Zipline is based on python and is able to run with python 2 and 3. Quantopian has created a ",(0,i.kt)("a",{parentName:"p",href:"www.zipline.io/beginner-tutorial.html"},"beginners tutorial")," on their website. Before going into the details of zipline, let us look into how to set it up locally. Note: I will be using python3 throughout this post.\nTo install zipline you first need all the required C extensions. For Debian based distributions use the command shown below, otherwise there are some more details ",(0,i.kt)("a",{parentName:"p",href:"www.zipline.io/install.html"},"provided here"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo apt-get install libatlas-base-dev python-dev gfortran pkg-config libfreetype6-dev\n")),(0,i.kt)("p",null,"I then created a virtual environment for Zipline. If you have never setup a virtualenv follow ",(0,i.kt)("a",{parentName:"p",href:"http://docs.python-guide.org/en/latest/dev/virtualenvs/"},"this tutorial"),". In case you want to use pyhton3 like me, make sure to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"python3")," executable. Also, when trying python2 I ran into a couple of issues as Linux Mint uses older versions of python2, which seem to be incompatible with the required version of numpy. When you setup your virtualenv, run ",(0,i.kt)("inlineCode",{parentName:"p"},"pip install zipline")," from the terminal with your virtualenv . This will install all the required packages including numpy and most likely take some time."),(0,i.kt)("h2",{id:"the-first-investment-algorithm"},"The first investment algorithm"),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"/zipline/examples")," folder you will find some example algorithms to try out. In their beginners tutorial the zipline authors describe some of the algorithms, how they are generally structured and how to execute them. I will go into more detail about having a value investment algorithm and not take one of the example algorithms."),(0,i.kt)("p",null,"The algorithm to be implemented is inspired by Benjamin Graham ","[6]"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select shares and derivatives of companies with a market capitalization of minimum 100 million dollars"),(0,i.kt)("li",{parentName:"ol"},"Determine the SIC code of each asset ","[5]"," and exclude the ones contained in the blacklist from the hedge fund"),(0,i.kt)("li",{parentName:"ol"},"Based on the sectors of the companies find the two sectors with the price of assets per earning ratio (PE ratio)"),(0,i.kt)("li",{parentName:"ol"},"Invest every month in all the companies listed in the two sectors")),(0,i.kt)("p",null,"Let's take a look at our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nud3l/dInvest/blob/master/trading/recommender/InvestHandlerSimple.py"},"algorithm"),".\nIt is basically taken from the web-based version of zipline called Quantopian and can be found ",(0,i.kt)("a",{parentName:"p",href:"https://www.quantopian.com/posts/grahamfundmantals-algo-simple-screening-on-benjamin-graham-number-fundamentals"},"here"),". I have tried to include quite some comments, so if you are familiar with python then the code should be quite readable. Zipline does not include the full functionality and data to realize the investment algorithm. The market capitalization data, sector codes, and PE ratio are not accessible from zipline. For a quick overview of the current code and the changes I made, I will go through the main functions. Also, please note that I only used free sources of financial data. There seem to be a lot of other sources available, but they have their price tag."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"initialize(context)")," Defines the number of sectors we are interested in and also schedules to execution of our algorithm for back-testing."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"rebalance(context, data)")," This essentially takes to selected assets and distributes them evenly into our portfolio."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"get_fundamentals(context, data)")," In Quantopian this is fairly easy, since the Morningstar fundamentals dataset is included. However, in zipline I had to find a workaround. Quandl offers the SF0 fundamentals for free: ",(0,i.kt)("a",{parentName:"p",href:"www.quandl.com/data/SF0-Free-US-Fundamentals-Data"},"www.quandl.com/data/SF0-Free-US-Fundamentals-Data"),". To get a full view of the data, I choose to download the whole data as a CSV file and automated the process. An example of how to do this can be found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"TradeHandler.getData(self)")," function ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nud3l/dInvest/blob/master/trading/trader/TradeHandler.py"},"here"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"get_sectors(key)")," Again, this is included in Quantopian, but needs a manual workaround. To get the sector codes it is quite simple. You need to download a txt file, which includes the sector codes and the function will read them into a dict."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"get_sector_code()")," Also, this part is included in Quantopian. Here we download a JSON file to get a mapping of sector codes to the financial assets we are trading."),(0,i.kt)("p",null,"To analyse the performance of the investment algorithm the absolute returns, Sharpe, alpha, and beta for the\nperiod of January 1, 2009 to November 15, 2016 is compared. The investment algorithm uses the Quandl\nfinancial data i.e. opening and closing prices of specific assets during that period ","[8]",". The algorithm is executed\nmultiple times. First, no sectors are excluded and second, an\nexclusion list based on sectors is used. Defense, beer and alcohol, tobacco, and coal industry are excluded based\non ESG criteria and common practices ","[9]",".\nThe first graph in the figure below presents the returns achieved by the unrestricted\nalgorithm, the algorithm with single excluded sectors, and the benchmark return. These returns show that\nunrestricted and single excluded algorithms have overall a higher profit than the benchmark. The second graph in the figure\ndisplays a combination of two excluded sectors and the benchmark return, while the third graph elaborates on the\ncombinations of three and all four sectors excluded.\nA single or combination of exclusions constantly perform better than the benchmark until\nbeginning of 2012. Then the unrestricted algorithm as well as the single exclusion of defense and alcohol\nexclusion and also the combination of tobacco and coal, defense and alcohol, defense and coal exclusions\ndrop until they recover in 2014. The other single and combination algorithms do not show this drop, but also\nhave a strong increase in returns in 2014. Then all variations show high volatility. The drop in 2012 in the\nunrestricted algorithm is caused by three of the sectors it is investing in. When tobacco is restricted, there is\nno strong drop in 2012. However, if not also in combination defense and/or coal is restricted the algorithm\nselects either of the two industries instead and another drop occurs. In the third graph of the figure these exclusions are\ncombined and no significant drop occurs, however the volatility remains."),(0,i.kt)("img",{src:"{{ site.url }}/images/blog/dinvest/investment_return_single.png",alt:"",width:"550"}),(0,i.kt)("img",{src:"{{ site.url }}/images/blog/dinvest/investment_return_double.png",alt:"",width:"550"}),(0,i.kt)("img",{src:"{{ site.url }}/images/blog/dinvest/investment_return_triple.png",alt:"",width:"550"}),(0,i.kt)("p",null,"There is further analysis and discussion of the results in our ",(0,i.kt)("a",{parentName:"p",href:"https://goo.gl/T74EGE"},"report"),"."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"D. Harper. (2016) Hedge funds hunt for upside, regardless of the market. ","[Online]",". Available: ",(0,i.kt)("a",{parentName:"li",href:"http://www.investopedia.com/articles/03/112603.asp"},"http://www.investopedia.com/articles/03/112603.asp")),(0,i.kt)("li",{parentName:"ol"},"M. Agarwal, Hedge Fund Strategies. John Wiley & Sons, Inc., 2009, pp. 45\u201355. ISBN 9781118258187. ","[Online]",". Available: ",(0,i.kt)("a",{parentName:"li",href:"http://dx.doi.org/10.1002/9781118258187.ch4"},"http://dx.doi.org/10.1002/9781118258187.ch4")),(0,i.kt)("li",{parentName:"ol"},"Hedge Fund Research. (2016) HFR hedge fund strategy classification system. ","[Online]",". Available: ",(0,i.kt)("a",{parentName:"li",href:"https://www.hedgefundresearch.com/hfr-hedge-fund-strategy-classification-system"},"https://www.hedgefundresearch.com/hfr-hedge-fund-strategy-classification-system")),(0,i.kt)("li",{parentName:"ol"},"P. Wilmott, Paul Wilmott on quantitative finance. John Wiley & Sons, 2013."),(0,i.kt)("li",{parentName:"ol"},"U.S.D. of Labor. (2016) SIC division structure. ","[Online]",". Available: ",(0,i.kt)("a",{parentName:"li",href:"https://www.osha.gov/pls/imis/sic_manual.html"},"https://www.osha.gov/pls/imis/sic_manual.html")),(0,i.kt)("li",{parentName:"ol"},"B. Graham and D. Dodd, Security Analysis: Sixth Edition, ser. Security Analysis Prior Editions. McGraw-Hill Education, 2008."),(0,i.kt)("li",{parentName:"ol"},"Quantopian. (2016) zipline: Pythonic algorithmic trading library. ","[Online]",". Available: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/quantopian/zipline/"},"https://github.com/quantopian/zipline/")),(0,i.kt)("li",{parentName:"ol"},"Quandl. (2016) Quandl: financial database. ","[Online]",". Available: ",(0,i.kt)("a",{parentName:"li",href:"https://www.quandl.com/browse?idx=database-browser"},"https://www.quandl.com/browse?idx=database-browser")),(0,i.kt)("li",{parentName:"ol"},"J. R. Evans and D. Peiris, \u201cThe relationship between environmental social governance factors and stock returns,\u201d UNSW Australian School of Business Research Paper No. 2010ACTL02, 2010.")))}u.isMDXComponent=!0}}]);