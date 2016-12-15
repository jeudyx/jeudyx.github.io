---
name: OAuth 2 Revoke
title: OAuth 2 Revoke
doc_uri: OAuth2ConnectionRevokeResource
versions: v7.1
released: 2015-04-07
tags: user
layout: documentation
path_version: v7.1
docs_version: v71
permalink: /docs/v71_OAuth2ConnectionRevokeResource/
---

# {{ page.title }}

Exposes an interface to revoke previous authorizations to applications, i.e. forcefully expire access tokens and their corresponding refresh tokens.

## Resource URIs

**Collection URI:** `/{{ page.path_version }}/oauth2/connection/`

## Collection

### Collection methods

 * `DELETE` Revoke access tokens corresponding to the user and client in the query.

### Collection query parameters

| Name         | Description               | Type       | Required |
|--------------|---------------------------|------------|----------|
| `user_id` | The user ID who owns the token. | int | Yes   |
| `client_id` | the client ID to whom authorization was given. | string | Yes   |

## Usage

### DELETE or Revoke all access tokens associated with a user ID and client ID

###### Request `DELETE: /{{ page.path_version }}/oauth2/connection/?user_id=1&client_id=t1w3of5o6u7r8`

###### Response 204
