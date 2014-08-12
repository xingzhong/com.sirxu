---
layout: post
title: Automatic court mapping for sports video 
date:   2014-08-01 12:40:26
categories: MachineLearning 
---

During this summer, I am working on a research project aims to recognize the sports tactics through commercial broadcasting videos. 
Currently I am using NBA basketball games broadcast by ESPN network.
But the principle methodology and idea can be extend to several team-work sports like football, soccer, and baseball etc.

Computer vision typically belongs to data intensive project especially for high definition scenario. 
In order to recognize the high level basketball tactics from raw video data,
I have to establish some low level detectors and related rules to make it possible.

<iframe width="640" height="360" align='right' src="//www.youtube.com/embed/videoseries?list=PLHnBpIAqjETlKTLmxaVFVo6kSIsBt9kEQ" frameborder="0" allowfullscreen></iframe>

A typical basketball tactic involves the player identification and their trajectory estimation on court.
But before that, we have to know exactly where is the court, and all the relative positions with the court.

Commercial broadcasting cameras are not static, it regularly move and scale under different freedoms.
Therefore, finding perspective transformations towards to the court is not a trivial problem. 

In this post, I will present my recent progress on automatic court mapping. 
During these videos, court mapping results are augmented into the raw video. 
