---
layout: index
title: Xingzhong
---

# About Me
I am Xingzhong Xu, a Ph.D candidate in Department of Electrical & Computer Engineering at [Stevens Institute of Technology](http://www.stevens.edu). My research topics include Machine learning and Signal Processing.

I am currently seeking a quantitative internship opportunity. 
I am interested in big data analysis, statistical modeling, quantitative trading strategy & research and other quantitative related fields.
Please feel free to contact me if you have an opening in related fields. 

# Recent Projects

## [LEAPS Checker](http://options.sirxu.com)
**LEAPS** aka Long-term Equity AnticiPation Securities (LEAPS) allows investors to benefit from long term stock growth, but keep a certain leverage.
Most LEAPS are written by large institutions for different purposes. 
By analyzing the options' **open interests** and its change, one can have some prior anticipation about future options and underlying stock.

I create this tool to capture the LEAPS opportunity by analyzing the **abnormal open interest volume**, which is normalized based on the average volume of its underlying stock. The analysis is updated daily. 
                            
Python's Pandas library is used to fetch and analyze the structured data. Every day, the selected options will be automatically published on amazon-s3 for investors' references.

The raw data came from OCC and Yahoo.

## [Recursive Bayesian estimation based on stochastic context-free grammar](https://github.com/xingzhong/scikit-learn)

Recursive Bayesian estimation is a general probabilistic approach to estimate the unknown probability density function recursively overtime using incoming measurements and a stochastic process. Notable examples include Kalman filter in linear Gaussian dynamical model and particle filter in nonlinear case.

Though particle filter allows the nonlinearity states system, it still live in Markov world. Hence the existing recursive Bayesian estimation methods will suffer when the desired patterns have long distance relationship. In language model, when simple n-gram model suffers, people start to use a grammatic model. One classical example will be context-free grammar which can describing the structure of the sentences and words.

My research topic focus on how to bring the stochastic context-free grammar to existing recursive Bayesian estimation framework. My proposed model will overcome the long distance relationship drawback, hence have the capabilities to model complex patterns, even grammatic patterns. Typical applications include but are not limited to time series prediction and image/video recognition etc.

## [yesgoody reward](http://demo.yesgoody.com)
Developed a Minimum Viable Product (MVP) which provides rewards management services to local merchants.

## [Apply Kalman filter in financial time series](/assets/ee616final.pdf)
In this project, I use dynamic state-space system to model the financial time series, and then use Kalman filter to efficiently make prediction.

