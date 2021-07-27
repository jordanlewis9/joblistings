# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

![Screenshot of finished project](./screenshot.png)

### Links

- Solution URL: [https://github.com/jordanlewis9/joblistings](https://github.com/jordanlewis9/joblistings)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Webpack](https://webpack.js.org) - Module bundler
- [React](https://reactjs.org/) - JS library

### What I learned

This was my first deployed project with React without using create-react-app. I learned how to properly bundle everything and how different assets can work in tandem with Webpack. I also utilized React Context for the first time in a deployed app.

As I explained below, Context worked great for this particular project. While not a large state to manage, I needed to drill down quite a few levels to get the setter functions to the proper components. Context helped to mitigate that drilling.

### Continued development

I may come back to this project in the near future to work on testing with React. I really want to optimize my folder layout as well. Having images stored in components seems unoptimal, and I'd like a more traditional folder layout.

### Useful resources

- (https://www.taniarascia.com/react-context-api-hooks/) - This jogged my memory on use of React Context. Honestly, this was the perfect app to practice use of context, and this article explains how to use it fairly well. Saved me quite a bit of prop drilling!
- (https://webpack.js.org/guides/asset-management/#loading-images) - Although frustrating at times, reading through this page, and a lot of webpack's documentation in general, pointed me in the correct direction to properly load and bundle the images without manually placing them in a dist or build folder.

## Author

- Website - [Jordan Lewis](https://www.jordannlewis.com)
- Frontend Mentor - [@jordanlewis9](https://www.frontendmentor.io/profile/jordanlewis9)
- Twitter - [@ohsnapzbrah](https://www.twitter.com/ohsnapzbrah)
