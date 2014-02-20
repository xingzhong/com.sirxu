---
layout: post
title:  "Recursive Bayes Filter"
date:   2014-02-01 12:40:26
categories: MachineLearning  
---

# Recursive filter

Recursive Bayesian filter can be used to probabilistically estimate the unknown quantity recursively over time. 
We use Bayes filter in state space model.
Typically, by following the time, two essential steps will be applied based on the observations.
The first one is *predict* which is looking for future state based on the historical observations.
The second one is *update* which is correct the current state based on the current incoming observation.

From common sense, the above two steps are quite self-explained. 
For a incoming time series, when the current sample is not available, we usually will made couple of decision to predict the anticipated state. However once the current sample came in, we will update the previous decision to correct the model.
Hopefully, by iteratively apply the two steps, one could eventually get familiarized with the data.


# Markov Chain
The simplest state model is Markov chain where each observation is just a Markov state. 

1. *Predict* is just the transition probability between two observations.
`\( \mathbf{P}(O_t|O_{t-1})  \)`
2. *Update* is not necessary, since the state can be observed deterministically.


# Hidden Markov Model
When the states in system start hidden inside, the filter will be interesting.
Suppose `\( x \)` denotes the hidden state and `\( O \)` is still our observation. 

Then from Markov property, we have `\( \mathbf{P}(x_t|x_{0:t-1}) =  \mathbf{P}(x_t|x_{t-1}) \)`.

We assume the observation is only conditionally depends on the current state. 
`\( \mathbf{P}(O_t|x_{0:t}) =  \mathbf{P}(O_t|x_{t}) \)`

1. *Predict*
We aim to predict the next hidden state `\( x_{t+1} \)` based on to-date observations `\( O_{0:t} \)`.
From the previous model, we already knew given previous state `\( x_{t} \)` the probability of the next state `\( \mathbf{P}(x_{t+1} | x_{t}) \)`. But now, the current state `\( x_{t} \)` is not determinate. Therefore, we have to marginalize it.
`\[
\mathbf{P}( x_{t+1} | O_{0:t}) = \sum_{x_t} \mathbf{P}( x_{t+1} | x_t ) \mathbf{P}( x_{t} | O_{0:t}) 
\]`

2. *Update*
Once the current observation `\( O_{0:t+1} \)` become available, we should update the state estimation 
`\[
\mathbf{P}( x_{t+1} | O_{t+1}, O_{0:t}) = \frac{
\mathbf{P}( O_{t+1} | x_{t+1}) \mathbf{P}( x_{t+1} | O_{0:t} ) }{ \mathbf{P}( O_{t+1} | O_{0:t}) }
\]`
,where,
`\[
\mathbf{P}( O_{t+1} | O_{0:t}) = \sum_{x_{t+1}} \mathbf{P}( O_{t+1} | x_{t+1}) \mathbf{P}( x_{t+1} | O_{0:t} )
\]`

Notice that `\( \mathbf{P}( O_{t+1} | O_{0:t}) \)` is constant relative to `\( x \)`. 
Also, the posterior probability is essentially the scaled forward variable in forward-backward algorithm. For each iteration in the algorithm, in order to prevent the dynamic overflow, the joint probability `\( \mathbf{P}( x_{t+1}, O_{0:t+1}) \)` will be scaled to conditional probability `\( \mathbf{P}( x_{t+1} | O_{0:t+1}) \)`.

Go back to our problem, we define two quantities `\( \alpha^k(t) \)` and  `\( \beta^k(t) \)` as the `\( t \)` indexed predict and update the kth state probability.
`\[
\alpha^k(t) = \sum_{x_{t-1}} \mathbf{P}( x_{t} | x_{t-1} ) \beta(t-1) 
\]`
`\[
\beta^k(t) = \frac{
\mathbf{P}( O_{t} | x_{t}) \alpha^k(t)  }{ \sum_j \mathbf{P}( O_{t} | x_{t}) \alpha^j(t)  }
\]`

We assume the initial prediction is known as the HMM's start probability. 
`\[
\alpha^k(0) = \Pi_k
\]`
