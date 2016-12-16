# mapmy-api-docs

1. clone repository
2. cd into project directory
3. run docker-compose build local
4. developer workflow: docker-compose up local, open 0.0.0.0:4000 in a browser

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
