<!--
title: 'Serverless Framework Node Express API on AWS'
description: 'This template demonstrates how to develop and deploy a simple Node Express API running on AWS Lambda using the traditional Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
priority: 1
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# AWS Lambda function for Weather API

This repository holds the snippet to demonstrate how to deploy and test a lambda function with OpenWeatherMap API 

## Prerequisite
- Install Serverless by running `npm install -g serverless`
- An OpenWeatherMap API key from [here](https://openweathermap.org/appid)
- A NodeJs environment

## Running this project
- Create a new `.env` file from the `.env.example` file and enter your OPENWEATHER_KEY
- Add OPENWEATHER_KEY value in your `serverless.yml`
- Run `npm install` to install your dependencies 

## Local development

It is also possible to emulate API Gateway and Lambda locally by using `serverless-offline` plugin. In order to do that, execute the following command:

```
serverless offline
```
