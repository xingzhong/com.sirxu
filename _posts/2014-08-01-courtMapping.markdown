---
layout: post
title: Understanding Sports Tactics based on Grammatical Video Recognition
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

# court mapping
A typical basketball tactic involves the player identification and their trajectory estimation on court.
But before that, we have to know exactly where is the court, and all the relative positions with the court.

The commercial broadcast sports videos are typically presented through several cameras in fixed positions.
Those cameras are pre-positioned as close-us, court views, and commercials etc. 
Among all those positions, court views are most frequent and informative position in the video.  
It is captured by a single pan-tilt-zoom camera. 
Therefore, unlike the surveillance application scenario, the background of the court views video are moving. 
Thus the absolute player position and trajectory require prior court rectification. 

Fortunately, the sports courts appears in the video are rigorously defined. 
Therefore, the court can be rectified by estimating the homograph transformation between the court template and its appearances on the video. 
Once we have the perspective transformations, all the relative positions on the video frame can be transformed to absolute positions on the court.

![pre-process]({{site.url}}/assets/preprocess.png)

# Player Tracking
Detecting the human in images and videos are classical topics in research and commercial applications. 
Although athletes tends to have more variations compares to normal pedestrians, the fundamental methodology are quite similar.

Generally, the modern object tracking method contains at least two individual steps. 
Firstly, we should have a probabilistic detector to estimate the likelihood that an object of interest (ROI) appears at given positions in a frame. 
Typically,  instead of dealing raw image data, the ROI is detected based on feature spaces which commonly includes color histograms, histogram of gradient, and even more advanced deformable part model.

Secondly, because of the consecutive video data, each frame detection consequence should not be independent. 
Thus such dependents can also be modeled through mean-shift, Kalman filter, particle filter or even more advanced temporal states space solutions.

To keep it simple and intuitive, especially consider the processing speed for high-definition video,  we use color histograms and mean-shift algorithm to detect and track the players in video. 
Fig. The figure below demonstrate the principle methodology of the mean-shift tracking in our scenarios. 
The rectified image which came from the prior rectification step are used to back-project the pre-defined two color histograms from jersey for both teams.

![player tracking]({{site.url}}/assets/tracking.png)

TBD