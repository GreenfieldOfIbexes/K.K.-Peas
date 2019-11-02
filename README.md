<!-- prettier-ignore-start -->

# Customer-Facing E-Com Product Page

![alt text](./dist/assets/page_overview.gif)

#### What:

A greenfield redesign of the front end of product pages on a clothing brand's website.

#### Why:

Optimize for a modern, sleek, and high-performing user experience.

#### Technologies:

- Front end: React and Redux.
- Performance optimization: GZip compression, the Webpack Mini CSS Extract plugin
- Deployment: Docker Container running on an AWS EC2 server.
- Project management: Agile workflow, Trello

#### Division of labor:

- Harry Shapiro: Overview module, Redux architecture, CSS guidance, performance optimization, interaction tracking
- Luke Barr: Ratings & Reviews module, continuous integration testing
- John Otwell: Recommended & Outfit module, testing framework, deployment, Redux optimization
- Nick Moyseos: Questions & Answers module

#### Performance:

- 0.6s to first contentful paint
- 0.6s to first meaningful paint
- 1s to interactive

## Table of contents:

- [Overview](#Overview)
- [Ratings and Reviews](#R_R)
- [Questions and Answers](#QnA)
- [Recommended and Outfit](#Recommended_Outfit)
- [Filesystem](#Filesystem)
- [Deployment](#Deployment)

## Overview:

![alt text](./dist/assets/overview_module.gif)

The overview module's main concern is providing an attractive UX that inspires interest, and an intuitive UI to make conversion seamless. All of its code was written in-house, with the exception of the social share buttons, which utilize the package React-Share. All of its internal code can be found in src/components/Overview and src/containers/Overview.
