---
title: Next.js vs Gatsby.js.
description: In this article we are going to examine two of the most famous React frameworks - Gatsby and Next.js.
cover: /covers/nextVsGatsby.png
date: 03-12-2021
tags:
  - react
  - webdev
  - next
  - gatsby
---

## Introduction

Next.js vs. GatsbyJS is a showdown for the ages … at least as far as React web frameworks are concerned.

Since its inception, React has grown to such a point that it’s no longer used for just frontend web development anymore. It’s now used to develop:

- Desktop applications along with Electron
- Simple browser-based games
- VR apps using React 360
- Mobile applications using React Native

React’s breadth has grown outside the web, and its depth within it has grown as well. There are innumerable frameworks/libraries created on top of React to enhance the developer experience and speed of development.

Now the whole community and projects around React are fondly known as the React ecosystem. Today, we are going to examine two of the most famous React frameworks: Gatsby and Next.js.

## What is GatsbyJS?

**Gatsby** is a modern web framework **built on top of React and GraphQL**. The main focus of the framework is built-in performance: it creates blazing-fast websites by default. It creates a static build to make the website faster. That’s one of the reasons why Gatsby is often overlooked as yet another static site generator.

Even though Gatsby is built on top of React, it has an ecosystem of its own that includes plugins, themes, and starters. It is extendable by default. It is built as a static site in build time and hosted as simple HTML pages.

Gatsby’s **[quick–start tutorials](https://www.gatsbyjs.com/docs/tutorial/)** are an excellent place to get started.

## What is Next.js?

**Next.js** is another popular React framework. The idea of Next.js is to create server-rendered React applications with little to no configuration. Performance isn’t the main draw for Next.js; rather, it is **improved developer experience** and reduced hassle to create full-fledged, SSR-friendly web applications.

Next.js also supports static builds, but it’s not the primary focus. We will discuss the limitations when we go through the use cases. The **[Next.js Getting Started guide](https://nextjs.org/learn/basics/create-nextjs-app)** is an excellent place to start learning about Next.js.

## Understanding SSR and static sites

Applications rendered on the server side are SEO-friendly by default. Server-side rendering (SSR) is faster because it doesn’t wait for the browser to load the JS to show content. SSR requires proper servers to send the response every time. In our case, Next.js is served using Node-based servers.

On the other hand, static sites are faster because they serve the static HTML and CSS from the server without any processing in runtime. Static sites will be cached through a CDN and served faster than dynamic websites. Static sites are SEO-friendly, too, if the site has only static content.

## Next.js vs. GatsbyJS: similarities

Even though they solve different problems, Gatsby and Next.js have a lot of similarities.

The learning curve for both frameworks isn’t very steep if you already know how to build React-based sites, and the developer experience comes first for both frameworks. We can set up and get things running very quickly, and adding more features on top of simple apps is also easy because both frameworks offer comprehensive docs. Both support hot reloading for a faster development experience as well.

Caching and performance are built in. We don’t need to worry about code splitting and optimizing the code; it works and by default they code-split based on each page route. Both frameworks have built-in routing to create new pages.

They perform smart page loading by prefetching the links for next pages asynchronously when you scroll through the page. The Lighthouse score for well-built Gatsby and Next.js sites will be outstanding.

Whether Gatsby or Next.js creates the faster web application depends on the use case. Instead of going through theoretical pros and cons, which you can find easily around the web, we’ll take a different approach and determine which framework will be the better choice based on the problem at hand.

## Use cases

I believe in horses for the courses. So we will choose the best option between Gatsby and Next.js for these use cases:

- Simple static website
- Large multi-user sites like **[dev.to](https://dev.to/)** (published in real time)
- Client-side rendered applications (SPA/MPA)
- Hybrid web apps (SPA and SSR in a single application)

## Next.js vs. GatsbyJS for simple static websites

**Requirements:**

- A static site with tens of static webpages
- Some pages are updated often; most of them are not updated regularly
- It should support SEO
- Anyone visiting the website sees the same content
- Updates doesn’t need to reflect real time since its updated by internal team, not by the visiting user.

**Examples:**

- Any static websites (companies, service websites, Information sites)
- Public pages for any product websites
- Individuals’ blog websites
- Small blog websites handled by predictable number of private users (ex., company members)

Here, the number of pages are predictable and don’t need to be rendered through the server all the time since the content will be static and the same for all users. Gatsby is tailor-made for such websites. You can create such static websites through Next.js as well using its newly introduced static export feature.

Even so, Gatsby will win here by a large margin because it offers support for plugins to get content from almost all CMSs, databases, REST APIs, and GraphQL. It also has plugins that support different data formats like JSON, Markdown, and MDX (Markdown with JSX). It has easy options to build and host the website anywhere.

It isolates the data and website so that even non-programmers can edit the content elsewhere, and it will still be compiled as the site in build time.

Next.js won’t handle anything related to your data. You’ll need to build your own way to fetch the data and show it as a website. You can build as a static site, but non-programmers on your team will require help from you to change or update content. It’s the big pain point any CMS solves, and Gatsby takes full advantage of that to connect to any CMS easily via plugin.

**Verdict: Gatsby**

Gatsby is our winner to build faster, performant static websites. The developer experience is the key for making this conclusion:

- Developers can focus on website layout and styling
- Gatsby separates the data and allows non-developers to edit content
- Gatsby also shortens the development lifecycle with a wide range of Gatsby plugins, starters, and themes

## Next.js vs. GatsbyJS for large, multi-user websites

**Requirements:**

- A large website with content added by authenticated users
- The website content are public, only certain features are private
- Content will be shown based on logged-in user and their interests

**Examples:**

- dev.to, a multi-user blog site for developers, by developers
- Any online forums

Next.js is the ideal choice for such needs here because you need to show dynamic content to unique, logged-in users. We can’t compile static HTML for each user with Gatsby (although there is a workaround, as we will see later in the use case for hybrid websites). SSR will help to render the site based on authentication.

Since the content is created by a large number of users and gets incremented when new users join, it will be practically impossible to compile to a static site in build time. It’s much easier to show the relevant content in runtime.

For Gatsby, the major disadvantage for creating such websites is its building process and the time taken for the building process. Users often want to see their content in real time, not after a few minutes through a build process. And if the number of users is high, it might not be a few minutes; it could take up to a few hours.

Gatsby is working on optimizing this and **[already released initial support for faster builds](https://www.gatsbyjs.com/blog/2019-11-14-announcing-gatsby-cloud/)** in their commercial solution called Gatsby Cloud. But still — it may take a while until we get the complete, real-time incremental build feature, and we also don’t know whether Gatsby will choose to release that feature as part of their open-source offering anytime soon.

**Verdict: Next.js**

For websites with multiple users accessing and editing the content, it’s better to build using Next.js.

- SSR is needed for public content
- Content needs to be dynamic based on user
- Even the static blog content needs to be published in real time and accessible for editing by the user

In such cases, build time-based frameworks won’t work well.

## Next.js vs. GatsbyJS for client-side rendered applications (SPA/MPA)

**Requirements:**

- Building a web application for your product, whether it’s an SPA or a multi-page client-side application
- The application will be visible only after authentication
- SEO is not necessary; the whole application is dynamic

**Examples:**

- Trello
- Asana
- Gmail
- And many other web products

Here, SEO isn’t the key, but speed and fast response times for the user are key. For such websites, there is no clear winner between Gatsby and Next Js. We will see in the details below how both play out for developing such web applications.

## Gatsby for dynamic web applications

So far, we’ve said Gatsby builds at build time and serves the static site. This is really only half-true. Why?

Even though Gatsby serves the static site, it also re-hydrates the React on the page on the client side. So you can create any client-side application using Gatsby, same as create-react-app (CRA). So why choose Gatsby instead of CRA?

Gatsby supports code splitting by default. With CRA, you’d need to do it yourself. CRA also doesn’t have a built-in mechanism to support multi-page web apps. It is possible ,but we need to do it manually. On the other hand, Gatsby supports multi-page applications.

Now, consider an example in which you have three different sets of users with three different UX designs for those users.

Gatsby’s multi-page nature easily helps you isolate and send those users to relevant pages after auth. In CRA, you need to handle it through your router. Gatsby has built-in routing support for client-side routes. CRA doesn’t come with its router implementation, but it’s not difficult to add one.

Prefetching of next links and assets is easy in Gatsby and makes the page load faster. Such a high level optimization is quite difficult to achieve in CRA on your own.

So, all in all, building a client-side rendered application is completely possible using Gatsby. So don’t ever think of Gatsby just as a static site generator — it does more than that. It’s a complete framework for building modern web applications.

## Next.js for dynamic web applications

Now let’s see how Next.js helps to build modern, dynamic web applications. Up to now, we know Next.js is capable of SSR, which is true, but that’s not all it does. It also re-hydrates React on the client side, so you can build a complete client-side React app on top of Next.js.

Most of the benefits are the same as Gatsby, but it has a few more advantages using its SSR. For example, you can render a static site and do all your logic on the client side, same as Gatsby apps or CRA. So technically, you don’t need to use the SSR capabilities of Next.js; you can build a complete, client-rendered SPA or multi-page application using Next.js.

The biggest advantage of Next.js is that it offers the best of both worlds. It has SSR capabilities along with client-side app capabilities. It supports code splitting based on pages and also allows dynamic importing to split code into chunks based on need.

The first paint of the UI with client-side apps is usually slow, and then the routing will be handled faster by browser. But with SSR, we can load to paint the UI faster than any client-side framework and then subsequent pages will be loaded through client-side routes.

This way, we can get the benefit of both the worlds in Next.js (i.e., both SSR and CSR).

**Verdict: Tie**

So for dynamic web applications, both Gatsby and Next.js are equally capable. Next.js edges a bit in the first painting of UI.

<span class="md-detail">My firsthand experience with Gatsby was awesome. In my day job, we have used Gatsby for our product, which is quite complex and which has three different sets of users. So far, we are very happy, and the developer experience for building the platform with an eight-member dev team was absolutely awesome. Their documentation is one excellent source to gain web development knowledge.

We have also used Next.js for simple dynamic websites (not the same scale as the Gatsby application). It was equally good but has its own learning curve for doing advanced stuff in its configuration. Luckily, their contributors and docs are pretty friendly.</span>

## Next.js vs. GatsbyJS for hybrid web apps

**Examples:**

- Twitter
- Reddit
- Stack Overflow

Hybrid web apps are the last type in our example. We already covered briefly that Next.js offers the best of both worlds in that it renders the page UI using SSR and then hands off the data responsibility to the client-side React application. But when would we need both functionalities?

If you check your Twitter page without logging in, it loads the initial tweets through SSR. If you scroll down, it loads the next set of tweets via the client side. But if you log in, it just loads the app shell and then client-side JavaScript loads the tweet content.

So inside a single application, it supports both SSR for visitors and CSR for logged-in users. The same is true for most large social networks and community-based websites.

**Verdict: Next.js**

For hybrid web apps that doesn’t require SEO, both Gatsby and Next.js are capable. But for applications that require SEO for publicly accessible dynamic content, then Next.js is the best option.

Now let’s check out a different use case for a hybrid web app and website in a single codebase.

You have a company website and a web app product. You want to build it with single codebase, not as two independent sites. In such situations, it’s much easier to handle both with Next.js and Gatsby, too. We can render the static pages for the company website and CSR for the web app product. The same way, we can utilize SSR for the website and a combination of SSR plus CSR for the web app.

## Conclusion

Both Gatsby and Next.js are awesome frameworks. I would say both are winners, but it depends on your project requirements; choose the one that best suits the need. The biggest winners here are the developers. Their experience using both frameworks is absolute bliss.

I’d encourage you to check their docs for more information .Hope you enjoying reading the article, let me know what you think of both frameworks and your firsthand experience with them in the comment box. 🤗

Article part copied from **[here](https://blog.logrocket.com/next-js-vs-gatsbyjs-a-developers-perspective/)**.
