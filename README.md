# mapmy-api-docs

## Introduction

This project contains the API documentation and other pages on developer.underarmour.com.

It's a Jekyll-based codebase and follows Jekyll convention. See more about Jekyll [here](https://jekyllrb.com/docs/home/).

The site is hosted on GitHub pages. See GitHub Pages settings [here](https://github.com/underarmour/mapmy-api-docs/settings).

## Getting Started

Clone repository and `cd` into the project directory
```
$ git clone git@github.com:underarmour/mapmy-api-docs.git
$ cd mapmy-api-docs
```

Run the local dev server:
```
$ docker-compose up --build local
```

Open `localhost:4000` in a browser. Changes to project files are processed automatically and should be viewable with a page refresh.

## Manage Blog Posts

See Jekyll's [blog docs](https://jekyllrb.com/docs/posts/). Each post has it's own document in `_posts`. Filename convention is YYYY-MM-DD-<title>.md.

The blog list page is in `pages/blog.html` and will render blog posts in reverse chronological order from `_posts`.

## Manage Non-API Doc Pages

Documents are located in `pages`. Links are specified in the `permalink` property in the meta information at the top of each document.

## Manage API Doc Pages (Public)

See `docs`.

## Manage API Doc Pages (Private)

See `docs-private`. Configuration to ignore this dir from the build is in `_config.yml`.

## Styling

Jekyll uses SCSS for styling. Our main file is `assets/css/main.scss'; any Sass files you want included in the project must be included here. Please note: you must include variables and mixins _before_ the file where they are used.

## Layouts and includes

All pages, blog posts, and documentation pages are rendered using a layout. Layouts live in `_layouts`.
Most of the layouts include common html components which live in `_includes`.

Use root relative urls when referring to assets.

Example: assuming an image lives in the filesystem at `assets/images/logo.png`, you would reference like:

```
  <img src="/assets/images/uacf_logo.png" />
```
