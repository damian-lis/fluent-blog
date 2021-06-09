---
title: Server side rendering in React
description: In this article, we will talk about server-side rendering in React, and the benefits versus traditional client-side rendering.
cover: /images/covers/serverSideRenderingInReact.png
date: 03-11-2021
tags:
  - react
  - SSR
  - webdev
---

## 1. Introduction

Many of you probably use React CLI, better known as **create-react-app (CRA)**, to get your apps up and running; there are many advantages to this approach. However, building with CRA also has a few disadvantages; for example, when you view source of a webpage from a web app initialized with CRA, you will notice that it’s an almost empty page with just the <span class="md-snippet">`<head>`</span> section but hardly anything within <span class="md-snippet">`<body>`</span>.

For example:

![](/images/articles/serverSideRenderingInReact/createReactApp.png)

<span class="md-detail">React app initialized using create-react-app.</span>

This is because CRA renders your app on the client side, meaning the built .js file is first downloaded to the user’s browser before the rest of the page starts loading. This increases the initial load time, and some web crawlers are unable to index the site.

Is there a better way to render your app? Yes!

This is where server-side rendering for React comes in.

In this article, I want to introduce you to SSR React, reasons to use it, and some popular frameworks for rendering React on the server side. I would also like to address when SSR React does not make sense. This article is aimed at developers already working with React on the client side.

<br/>

## 2. What is server-side rendering (SSR)?

Server-side rendering (SSR) is when content on your webpage is rendered on the server and not on your browser using JavaScript. For example, when you have a typical PHP or WordPress site, the page is loaded from content that is coming via HTTP, which was rendered on the server and comes as fully rendered HTML. This is in contrast to a React app built with CRA, which just sends a .js file to the client, and the clients’ browser JavaScript engine creates the markup after the .js file is loaded.

Examples of traditional SSR languages/frameworks are PHP, Java, ASP.NET, and Node.js.

To be clear, this is how content was rendered on early websites until the influx of client-side libraries. However, now, server-side rendered React apps use Node for the server, which is a key difference from traditional server-rendered apps (we’ll see how later on in this post).

<br/>

## 3. Why move to React server-side rendering?

As I said before, server-side rendering initially means every page is rendered and loaded from the server. With the introduction of server-side (universal) React, however, things are slightly different.

The initial page is rendered from the server, meaning the subsequent pages load directly from the client. So you have the best of both worlds — the power of the initial server-side content plus the speedy subsequent loads, which requests just the content that is needed for future requests.

In addition to the above benefit, here are some other advantages you get when you move to SSR:

### Performance

Arunoda Susiripala, an engineer from Vercel, talks about performance being the main reason for moving to server-side rendering. SSR means there is no need for loaders or spinners for the initial load. This means that, generally speaking, SSR will outperform CSR.

Faster load times lead to a better experience for the end user. This is one of the reasons many large companies are taking the SSR approach for their sites.

### SEO

By now, you have probably heard that Google now crawls web apps built with JavaScript, you are better off having server-side rendered content ready for Google and other search engines to crawl your site.

<span class="d-detail ">Note that as of now, Google and Bing can index synchronous JavaScript applications — synchronous being the key word. If your app starts with a loading spinner, then fetches content via Ajax, the crawler will only wait a few seconds for loading to complete. This means if you have content fetched asynchronously on pages where SEO is important, SSR might be necessary.</span>

The advantage with SSR is that you get the benefits of a traditional website’s SEO since the entire page can now be crawled by bots.

### Social sharing

The other benefit with SSR is that you get an elaborate snippet and featured image when sharing your webpage’s content via social media. This will not be possible when you have just client-side rendered apps.

<br/>

## 4. Get started with server-side rendering in React

Getting started without frameworks is possible, but I wouldn’t recommend this approach since there are many considerations and moving parts in a React SSR app. For example, you have to handle bundling, minification, and hot reload (and more) all on your own.

### React SSR frameworks

I would recommend picking up a framework if you want to render React on the server side. Here are some frameworks you can consider:

#### Next.js

Next.js is a great framework with a great community around it. With Next.js, you don’t have to worry about bundling, minification, or hot reloading; you get a lot of features out of the box. You are able to create pages as React components within files.

You may be used to this if you worked with PHP. In addition to the community and support, there are many large companies using Next.js in production including npm, Netflix, and Auth0.

#### Razzle

Razzle, a project by Jared Palmer, has been gaining a lot of traction lately.

<span class="md-detail">“Razzle is a tool that abstracts all complex configuration needed for SSR into a single dependency — giving you the awesome developer experience of create-react-app, but then leaving the rest of your app’s architectural decisions about frameworks, routing, and data fetching up to you.”</span>

It’s easy to get started with Razzle, and it uses React Router 4 by default (unlike Next.js, which does not have a router out of the box).

### Alternatives

React is not a silver bullet. Perhaps your team is more familiar with Vue or another JavaScript framework. Maybe a static site will best suit your use case. If you don’t want to use React or if you would like to use a Static Site Generator, here are some alternatives:

#### Nuxt.js

Nuxt.js is a server-side rendering framework for Vue.js and is popular in the Vue.js community. If you are looking for alternatives Next.js or Razzle in the Vue.js world, do give this a try.

#### Gatsby

You would have seen almost all popular JavaScript developers talk about Gatsby. It is a React-based Static Site Generator that has won the hearts of many with its exceptional UX (user experience) and DX (developer experience).

To be precise, it doesn’t do SSR at runtime. Rather, Gatsby does server-side rendering with Node.js at build time, where it creates static HTML, CSS, and JS when deploying the site. This leads to blazing-fast load times and has further optimizations such as route-based code splitting and prefetching.

<br/>

## 5. Example: server-side rendering in React

I explored server rendered React apps a few months back and created an app with Next.js and hosted it on Now — a serverless platform. Both Next and Now are from a company called Vercel, which is doing a great job at educating developers about React and serverless technologies, along with offering other fantastic products.

<br/>

## 6. Do you always need SSR?

The short answer would be no. Not all apps need server-side rendering, especially apps with a dashboard and authentication that will not need SEO or sharing via social media. Plus, the expertise for building a server-rendered React app is higher than an app initialized using create-react-app.

Most importantly, SSR React apps cost a lot more in terms of resources since you need to keep a Node server up and running. There are times you may be better off going the serverless route when you want to choose server-side rendering for your React applications.

<br/>

## 7. Conclusion

Client-side rendered React apps are great but having apps rendered on the server have noticeable benefits.

As we covered in this post, the benefits include:

- Performance
- Search engine visibility
- Social sharing

I would highly encourage you to explore server-side rendering for your React apps and use it for your next product to see these benefits in action.

Full article is <a href="https://blog.logrocket.com/why-you-should-render-react-on-the-server-side-a50507163b79/" target="\_blank" rel="noopener noreferrer">here</a>.
