import React from "react"
import { Helmet } from "react-helmet"

const Head = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <meta property="og:title" content="Jointify" />
    <meta
      property="og:image"
      content="https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    />
    <meta
      property="og:description"
      content="Find the perfect mentor to kickstart your business"
    />
    <meta property="og:url" content="https://www.jointify.africa" />

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, viewport-fit=cover"
    />
    <meta name="theme-color" content="#00eece" />
    <meta name="description" content="Jointify, On-Demand Mentorship Online" />
    <meta name="googlebot" content="index,follow" />
    <meta
      name="google-site-verification"
      content="knQjJa_CVtlvp93SuAoN781hMGpuYARwz2Kc8ZATZpo"
    />
    <link rel="author" href="artisoft.ma" />
    <link rel="me" href="https://www.artisoft.ma" type="text/html" />
    <title>Jointify | Home</title>
    <link
      href="https://fonts.googleapis.com/css?family=Lato:400,400i|PT+Serif:700"
      rel="stylesheet"
    />
    <html lang="en" dir="ltr" />
  </Helmet>
)

export default Head
