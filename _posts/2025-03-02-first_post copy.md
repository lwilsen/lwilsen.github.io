---
layout: post
title: CMS Synthetic Data Project
date: 2025-03-28 12:37:16
description: Man this is tough
categories: School Projects
---

If you've managed to find your way to this post somehow, then thank you, because you actually took the time to look through my website!

One of the projects I'm working on right now is an analysis of the synthetic datasets that are released by the Center for Medicare and Medicaid services [linked here](https://data.cms.gov/collection/synthetic-medicare-enrollment-fee-for-service-claims-and-prescription-drug-event). My main goal is to try to predict the length of stay based on demographic features (age, race, sex, state), total prescription drug payments, number of diagnoses within a given year, presence of end stage renal disease, admission facility type (ER, inpatient, ... etc.) and the most interesting in my opinion, the principal diagnosis code. I've been experimenting with different sets of variables and different methods of variable transformation, and so far I've only run one simple linear regression model that with these results: 
## Model Performance Results

### Test Set Results
| Metric  | Value |
|---------|--------|
| **RMSLE** | 0.4615 |
| **R²**    | 0.3084 |
| **MAE**   | 0.8965 |
| **MSE**   | 5.2422 |

### Train Set Results
| Metric  | Value |
|---------|--------|
| **RMSLE** | 0.4200 |
| **R²**    | 0.3800 |
| **MAE**   | 0.8326 |
| **MSE**   | 4.6377 |

*Model: Linear Regression - NoneType - 2016train-2017test*

These don't seem too bad to me, but this is synthetic data, and I've only run one model (thus violating the "no free lunch theorem") so I've got a lot more work to do. 

If you read all of this, thank you, I really appreciate your time. Any feedback, suggestions or criticisms are always welcome. Please feel free to email me at lukewilsen45@gmail.com!