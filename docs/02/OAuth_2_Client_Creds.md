---
layout: documentation
title: OAuth 2 Client Credentials
permalink: /docs/02_OAuth_2_Client_Creds/
version: v0.2
---

# <a name="client_credentials"></a> Client Credentials

The Client Credentials grant type is ideal for access to public data and self-management
of your Under Armour API key. This grant type allows consumers to make requests on their own behalf,
not that of a user; it therefore does not require user authorization.
Some use cases include:

  * Finding public routes
  * Exploring public workouts
  * Retrieving `ActivityTypes`

## <a name="tech_desc"></a> Technical Description

For this grant type the `POST` request to the **access token endpoint** (https://api.ua.com/{{ page.version }}/oauth2/access_token/)
should have the following parameters:

| Param           | Value
|-----------------|-------
| `grant_type`    | `client_credentials`
| `client_id`     | Client Application's client ID
| `client_secret` | Client Application's client secret


### Notes

* Unlike most of our API, requests to the **access token endpoint** are required by the specifications to have a content
  type of `application/x-www-form-urlencoded`.
* The legacy endpoint URL `https://oauth2-api.mapmyapi.com/{{ page.version }}/oauth2/access_token/` is interchangeable.
