# FluentBlog

Desktop version:

![](images/readme/intro.gif)

<br/>

Mobile version:

![](images/readme/introMobile.gif)

<br/>

## Table of Contents

1. General info
2. Technologies
3. Setup
4. Features

   <br/>

## 1. General info

The site is dedicated to blogging about the IT industry. It contains various articles, author's description and completed projects for the portfolio.

Live version is available [here](https://fluent-blog.vercel.app/).

<br/>

## 2. Technologies

The following technologies were used in the project:

- Next
- TailwindCSS

  <br/>

## 3. Setup

To get started, use the following command:

```
npx create-next-app
# or
yarn create next-app
```

After that, run the development server:

```
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<br/>

## 4. Features

The entire project was created using Next and TailwindCSS technologies.

Why such a solution?

Such a solution due to the speed and ease of development, efficiency and the ability to render the code on the server side, which contributes to better SEO.

Below are the most interesting solutions implemented in the application:

&nbsp; &nbsp; &nbsp; &nbsp; 4.1. Articles written in a file with the md extension <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 4.2. Dynamic article creation using the getStaticPaths and getStaticProps methods <br/>

<br/>

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

<br/>

### 4.1. Articles written in a file with the md extension

All articles and project descriptions displayed on the website were written in a file with the md extension.

This solution was introduced due to the ease and clarity of writing and the ease of use of it by the Next technology.

<br/>

Below is an examples of short article and project description written in the md extension:

Article (\_articles/immer-vs-ramda.md):

```
---
title: Immer vs Ramda -
description: Two approaches towards writing Redux reducers
cover: /covers/immerVsRamda.png
date: 02-20-2021
tags:
  - immer
  - javascript
  - webdev
  - redux
---

Reducers - a core element of Redux's philosophy that tightly grabs mutations of a given state in one place. In theory, the pure nature of reducers should lead to great scalability, readability, and make us all fortunate children of Redux god. But even the brightest idea can be dimmed if thrown on the one most pediculous soil...

Yes. I speak about JavaScript. Writing complex pure functions in vanilla JavaScript is harsh. Avoiding mutations is extraordinarily hard. Matching against actions? There are no Variants/Enums in JS, you have to use strings instead. And you land with a poor switch statement taken straight from the hell. Regardless, Redux is the most popular state manager for React applications

## The path to purity

Consider the two ways to make your life easier, the first one will be the Immer - Immer is a package that lets you deliver the next state by "mutating" the draft of the previous state:

Article copied from **[here](www.dev.to/fkrasnowski/immer-vs-ramda-two-approaches-towards-writing-redux-reducers-3fe0)**
```

<br/>

Project description (\_projects/talk-togisapia-and-the-others.md):

```
---
title: Talk to Gisapia and the Others - game
description: This app will let you chat with amazing characters who will remember and understand your answers and send them to your e-mail.
date: 05-01-2021
link: https://github.com/damian-lis/Talk-to-Gisapia-and-the-Others
tags:
  - HTML
  - CSS
  - Javascript (OOP)
  - GSAP
---
```

<br/>

As we can see in the examples above, certain information is stored in variables, eg title, description, cover etc .. This entry allows you to refer to these variables when dynamically creating a page with a given article or project description (explained in the next section).

<br/>

### 4.2. Dynamic article creation using the getStaticPaths and getStaticProps methods.

### 4.3. TailwindCSS

Due to the desire to learn a new way of creating styles, a utility-first CSS framework called TailwindCSS was used.

It consists in adding appropriate classes to html tags (thanks to this we have no problem with class naming and we have quick access to the styles).

Additionally, our style size is smaller because we use reusable classes.

<br/>

Below is a brief example of how styles are used (components/Navbar.js):

```
<div className="flex-shrink-0 flex items-center">
<Link href="/">
  <a>
    <img
      className="block hidden sm:block h-11 w-auto"
      src="/icons/fluentblog.svg"
      alt="FluentBlog"
    />
    <img
      className="block sm:hidden h-11 w-auto"
      src="/icons/fluentblogmobile.svg"
      alt="FluentBlog"
    />
  </a>
</Link>
</div>
```
