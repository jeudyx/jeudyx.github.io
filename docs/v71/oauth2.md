---
name: OAuth 2 Grants
doc_uri: OAuth_2
versions: v7.0, v7.1
released: 2015-06-10
tags: user
layout: documentation
path_version: v7.1
docs_version: v71
permalink: /docs/v71_OAuth_2/
---

# OAuth 2 Endpoints

## Authorization

The `Authorization` endpoint is used during the `authorization_code` `grant_type` workflow. A properly executed call to this endpoint will prompt a Under Armour user to authorize your application to operate on their behalf.

### Params

| Name            | Description                                                                                       | Type   | Required |
|-----------------|---------------------------------------------------------------------------------------------------|--------|----------|
| `client_id`     | The `client_id` of the application requesting an access token                                     | string | Yes      |
| `response_type` | The `code` response type is used for authorization code tokens                                    | string | Yes      |
| `redirect_uri`  | This redirect will be used to respond with the code and **must** match your application settings. | string | Yes      |

### Example

###### Request `GET https://www.mapmyfitness.com/{{ page.path_version }}/oauth2/authorize/?client_id=CLIENT_ID&response_type=code&redirect_uri=REDIRECT_URI`

> Note: This is the only endpoint that utilizes the `www.mapmyfitness.com` domain. All other calls should use
> `api.ua.com` as usual.

> Data **must** be sent form-encoded in the querystring

###### Response

The "response" portion of the request is actually a call from the Under Armour server to the `redirect_uri` provided with a `code` in the querystring. For this example, assume the `redirect_uri` used was `http://localhost.mapmyapi.com/callback`

```
http://localhost.mapmyapi.com/callback?code=some_long_authorization_code
```

The code provided to this callback (and handled by your application) can be used with the Access Token endpoint to get a valid access token.

Access Token
------------

The params necessary vary depending on the `grant_type`. Available `grant_type`s include authorization code and client credentials.

### Authorization Code Grant Type

This grant type results in a user access token. With this token you can add new routes and workouts, manage social interactions, and update privacy settings on behalf of the user that authorized your application.

| Name            | Description                                                       | Type           | Required |
|-----------------|-------------------------------------------------------------------|----------------|----------|
| `grant_type`    | Set value to `authorization_code` for the Access Token workflow   | string         | Yes      |
| `client_id`     | The `client_id` of the application requesting an access token     | string         | Yes      |
| `client_secret` | The `client_secret` of the application requesting an access token | string         | Yes      |
| `code`          | The `code` received from the `Authorization` endpoint             | string         | Yes      |

###### Request `POST /{{ page.path_version }}/oauth2/access_token/`

```
grant_type=authorization_code&client_id=<client_id>&client_secret=<client_secret>&code=<code_from_authorization_endpoint>
```

> Data **must** be sent with a `Content-Type` of `application/x-www-form-urlencoded`

###### Response

```json
{
    "access_token": "some_token_here",
    "expires_in": 5183999,
    "token_type": "Bearer",
    "scope": "read",
    "user_id": "<user_id>",
    "user_href": "/{{ page.path_version }}/user/<user_id>/",
    "refresh_token": "valid_refresh_token_here"
}
```

### Client Credentials Grant Type

This grant type results in an access token that operates on behalf of your application. It is *not* associated with a user. With an access token obtained through client credentials you can perform non-user-specific operations like searching public routes and workouts.

| Name            | Description                                                             | Type           | Required |
|-----------------|-------------------------------------------------------------------------|----------------|----------|
| `grant_type`    | Set value to `client_credentials` for the Client Credentials workflow   | string         | Yes      |
| `client_id`     | The `client_id` of the application requesting an access token           | string         | Yes      |
| `client_secret` | The `client_secret` of the application requesting an access token       | string         | Yes      |

###### Request `POST /{{ page.path_version }}/oauth2/access_token/`

```
grant_type=client_credentials&client_id=<client_id>&client_secret=<client_secret>
```

> Data **must** be sent with a `Content-Type` of `application/x-www-form-urlencoded`

###### Response

```json
{
    "access_token": "some_token_here",
    "expires_in": 5183999,
    "token_type": "Bearer",
    "scope": "read",
    "user_id": "<user_id>",
    "user_href": "/{{ page.path_version }}/user/<user_id>/",
    "refresh_token": "valid_refresh_token_here"
}
```

### Refresh Token Grant Type

Per the OAuth2 specification, access tokens expire after 60 days. Use the `grant_type` of `refresh_token` to request a new access token.

| Name            | Description                                                             | Type           | Required |
|-----------------|-------------------------------------------------------------------------|----------------|----------|
| `grant_type`    | Set value to `refresh_token` for the Refresh Token workflow             | string         | Yes      |
| `client_id`     | The `client_id` of the application requesting an access token           | string         | Yes      |
| `client_secret` | The `client_secret` of the application requesting an access token       | string         | Yes      |
| `refresh_token` | The `refresh_token` from a previous request for an access token         | string         | Yes      |

###### Request `POST /{{ page.path_version }}/oauth2/access_token/`

```
grant_type=refresh_token&client_id=<client_id>&client_secret=<client_secret>&refresh_token=<refresh_token>
```

> Data **must** be sent with a `Content-Type` of `application/x-www-form-urlencoded`

###### Response

```json
{
    "access_token": "some_token_here",
    "expires_in": 5183999,
    "token_type": "Bearer",
    "scope": "read",
    "user_id": "<user_id>",
    "user_href": "/{{ page.path_version }}/user/<user_id>/",
    "refresh_token": "valid_refresh_token_here"
}
```
