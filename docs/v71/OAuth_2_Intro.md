---
layout: documentation
title: OAuth2 Intro
permalink: /docs/v71_OAuth_2_Intro/
version: v7.1
---

# Under Armour API OAuth 2 Introduction

This document is an introduction to the [OAuth 2 protocol], which the
Under Armour API uses for authentication and authorization. It's targeted at
developers who are familiar with the basics of web applications.

If you're familiar with OAuth 2 (e.g., if you've worked with the Facebook API or
other popular APIs), you can probably skip the introductory material and go
straight to the [technical description](#tech_desc).

[OAuth 2 protocol]: http://tools.ietf.org/html/rfc6749


## Background: Motivation for OAuth

You can safely ignore this section if you're familiar with any version of OAuth.

If you have a web application and you want to access the Under Armour (UA) data
for some of your users (e.g., their profiles or latest workouts), you may use
the UA API to get it. However, before it can be provided to your application,
the user must give you permission to see their data first.

The main question OAuth tries to solve is, in this case, "How does UA know the
user doesn't mind us sending their data to your app?" It was once common for
consumer apps to solve this kind of problem by having users hand over their
credentials and then impersonating the user to the hosting application. But this
approach is actually fairly insecure and inconvenient for everyone involved.
Instead, UA *asks* the user if they **authorize** your application to see their
data. OAuth is simply a protocol for how that authorization gets handled and
communicated between the user, Under Armour, and your application.

The [OAuth 2 specification](http://tools.ietf.org/html/rfc6749) describes four types of
*authorization grant* (i.e., ways for the user to authorize your app) designed
for a variety of scenarios:

  * **authorization code**: ideal for server-to-server communication
  * **implicit**: optimized for in-browser JavaScript applications
  * **resource owner password credentials**: built for desktop applications or
    trusted clients
  * **client credentials**: used when the app is trying to access its *own*
    data, not data owned by its users

In this discussion we'll focus on the **authorization code** grant.


## Background: The actors and how they communicate

You can safely ignore this section if you're familiar with any version of OAuth.

The complete OAuth 2 process involves six different participants collaborating
to facilitate access by your client application to a user's data stored at
Under Armour.

  * **Client Developer (you!)**: a third-party developer who has an application
    that could use Under Armour users' data.
  * **Client Application**: the application you design and implement
  * **User**: a Under Armour user who uses your Client Application
  * **User's Browser**: the web browser that the User uses to interact with the
    Under Armour website and your Client Application.
  * **Under Armour website**: User interfaces for you, the Client Developer, to 
    register your Client Application and manage info about it; and user 
    interfaces for the end User to manage the access granted to Client
    Applications like yours.
  * **Under Armour API server**: the programming platform that your Client
    Application uses to negotiate access to Under Armour resources and
    manipulate those resources on behalf of a User.


## <a name="tech_desc"></a>Getting an access token: the technical details
Here we'll describe the OAuth 2 protocol with enough technical detail for you to
implement it in the language of your choice. In our [demonstration app] we'll
implement these details in Python.

We assume that a User has signed up for the Client Application and that you have
already gotten a client ID and secret for the app.

1. The Client Application will have the User's Browser issue an HTTP `GET`
request to `https://www.mapmyfitness.com/{{ page.version }}/oauth2/uacf/authorize/` with the
following parameters:
    * `client_id`: the Client Application's client ID
    * `response_type`: set to "code" (because this is the authorization code
       grant flow)
    * `redirect_uri`: the value of the URL *on your server* that the User's
       Browser should be redirected to. As with many other applications, this
       value should be UTF-8 encoded and percent-escaped. For example, here is
       what the constructed URL would be if the client ID is `abcd` and the URL
       for redirection is `http://www.example.com/callback/?param1=val1`
       (newlines are for formatting in this document only):

       `https://www.mapmyfitness.com/{{ page.version }}/oauth2/uacf/authorize/?client_id=abcd&response_type=code&redirect_uri=http%3A%2F%2Fwww.example.com%2Fcallback%2F%3Fparam1%3Dval1`

1. After the User has chosen to authorize the Client Application, the
Under Armour API server will respond with a redirect (i.e., its status code will
be `302`) to the URI specified in the `redirect_uri` parameter in Step 1. The
URI will be appended with a `code` parameter, the value of which will be used in
the next step. The User's Browser should follow the redirect by issuing a `GET`
request to the redirect URI.

1. The Client Application should issue a `POST` request to Under Armour API
server's **access token endpoint** at
`https://api.ua.com/{{ page.version }}/oauth2/uacf/access_token/`. The request's body
should have a content type of `application/x-www-form-urlencoded` and include
the following parameters:
    * `grant_type`: set to "authorization_code"
    * `client_id`: the Client Application's client ID
    * `client_secret`: the Client Application's client secret
    * `code`: the value from the `code` parameter received from the User
       Browser's request in the previous step

    Additionally, it should include a header `Api-Key` with a value of the
    Client Application's client ID. This isn't required by the OAuth 2
    specification but rather by the Under Armour API infrastructure. **This
    header should be included in every communication with the Under Armour API
    server from this point forward.**
    
> The legacy endpoint `https://oauth2-api.mapmyapi.com/{{ page.version }}/oauth2/uacf/access_token/` is interchangeable
> Additional grant types can be found through the navigation on the left. Supported
> types include `authorization_code` and `client_credentials`.

1. The Under Armour API server will authenticate the Client Application by
checking the client ID and secret, and (assuming authentication passes) respond
with `200 OK` with `Content-Type` `application/json` and a JSON body with the
following data:
    * `access_token`: a string the Client Application must include on future
      requests for the User's data
    * `expires_in`: the TTL, in seconds, for the access token
    * `refresh_token`: a string the Client Application may trade to get a new
      access token
    * `scope`: the scope of operations allowed to the access token

1. When the Client Application needs to perform an authenticated action such as
changing a User's data or even requesting non-user specific data that still
requires authentication, it must issue all related requests with an
`Authorization` header that has the value `Bearer <access token>` (excluding `<`
and `>`). (And of course it must also have the `Api-Key` header.)

1. Finally, if the access token has expired or been compromised, the Client
Application may use the refresh token -- which should never be transmitted over
the wire except in this case -- to request a new access token. To do so, it must
issue a `POST` request to the **access token endpoint** and encode the following
parameters into the body:
    * `grant_type`: set to "refresh_token"
    * `client_id`: the Client Application's client ID
    * `client_secret`: the Client Application's client secret
    * `refresh_token`: the previously received refresh token

    The response will take the same format as previously, so the Client
    Application will receive a new access token and refresh token.

[demonstration app]: /docs/v71_OAuth_2_Demo


## Conclusion

You should be ready to get started with Under Armour Users and your Client
Application. For ease of use, however, we recommend that you use an OAuth 2
client library to handle OAuth-authenticated actions. We demonstrate how to do
this next in the [demonstration app].
