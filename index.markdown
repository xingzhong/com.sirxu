---
layout: index
title: Xingzhong
---

# About Me
I am Xingzhong Xu. I work as a software engineer in the surge price and supply positioning team at [Uber Technology](http://uber.com).

Meanwhile, I am a Ph.D candidate in the Department of Electrical & Computer Engineering at [Stevens Institute of Technology](http://www.stevens.edu). My research fields include pattern recognition in digital image and its applications in video.


# Recent Projects

## [Sports Tactics](/machinelearning/2014/08/01/courtMapping.html)
### June 2014 -- PRESENT
Recognizing the sports tactics and formations from videos have great business and academic potential on professional sports coaching, training and broadcasting field.
In this project, low level computer vision techniques and high lower grammatic data models are cascaded to recognize the common sports tactics.

## [Max Pain](/cp.html)
### MARCH 2014
In small cap equity market, big player who possess large portion of the bets tends to have strong control of the spot price.
Besides the profit taken from regular bid and ask, they will also write large number of near term options to collect additional premiums.
Except the market maker, due to the margin requirements, only those player who take stock as collateral can write large number options.

In such case, when expiration data come, the most straightforward profitable method is  manipulate (or control) the spot price to maximize the total volumes of the out-of-money options transfered from the in-the-money one.
In another word, for the big player there exist a most profitable sweet price.
As a zero sum game, for us - ordinary option buyers, this spot price can be also called **max pain**.

Without fancy math model, intuitively this price should close to the strike price of the big volume options. I created this tool to visualize the histogram of the volumes of the
near-term options chain.
The visualization is based on [d3.js](http://d3js.org/) and [c3.js](http://c3js.org/).
And the raw data came from [Yahoo Finance](http://finance.yahoo.com/).

## [LEAPS Checker](http://options.sirxu.com)
### NOVEMBER 2013
**LEAPS** aka Long-term Equity AnticiPation Securities (LEAPS) allows investors to benefit from long term stock growth, but keep a certain leverage.
Most LEAPS are written by large institutions for different purposes.
By analyzing the options' **open interests** and its change, one can have some prior anticipation about future options and underlying stock.

I create this tool to capture the LEAPS opportunity by analyzing the **abnormal open interest volume**, which is normalized based on the average volume of its underlying stock. The analysis is updated daily.

Python's [Pandas](http://pandas.pydata.org/) library is used to fetch and analyze the structured data. Every day, the selected options will be automatically published on amazon-s3 for investors' references.

The raw data came from [OCC](http://www.optionsclearing.com/) and [Yahoo](http://finance.yahoo.com/).

## [Recursive Bayesian estimation based on stochastic context-free grammar](https://github.com/xingzhong/scikit-learn)
### JANUARY 2013 -- PRESENT

Recursive Bayesian estimation is a general probabilistic approach to estimate the unknown probability density function recursively overtime using incoming measurements and a stochastic process. Notable examples include Kalman filter in linear Gaussian dynamical model and particle filter in nonlinear case.

Though particle filter allows the nonlinearity states system, it still live in Markov world. Hence the existing recursive Bayesian estimation methods will suffer when the desired patterns have long distance relationship. In language model, when simple n-gram model suffers, people start to use a grammatic model. One classical example will be context-free grammar which can describing the structure of the sentences and words.

My research topic focus on how to bring the stochastic context-free grammar to existing recursive Bayesian estimation framework. My proposed model will overcome the long distance relationship drawback, hence have the capabilities to model complex patterns, even grammatic patterns. Typical applications include but are not limited to time series prediction and image/video recognition etc.

## [yesgoody reward](http://demo.yesgoody.com)
### MARCH 2012 – NOVEMBER 2013
Developed a Minimum Viable Product (MVP) which provides rewards management services to local merchants.

## [Apply Kalman filter in financial time series](/assets/ee616final.pdf)
### APRIL 2012
In this project, I use dynamic state-space system to model the financial time series, and then use Kalman filter to efficiently make prediction.


