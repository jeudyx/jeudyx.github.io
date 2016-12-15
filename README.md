# mapmy-api-docs

1. clone repository
2. cd into project directory
3. run docker-compose build local
4. developer workflow: docker-compose up local, open 0.0.0.0:4000 in a browser

## Manage Blog Posts

See Jekyll's [blog docs](https://jekyllrb.com/docs/posts/). Each post has it's own document in `_posts`. Filename convention is YYYY-MM-DD-<title>.md.

The blog list page is in `pages/blog.html` and will render blog posts in reverse chronological order from `_posts`.

## Manage non-API doc Pages

Documents are located in `pages`. Links are specified in the `permalink` property in the meta information at the top of each document.

