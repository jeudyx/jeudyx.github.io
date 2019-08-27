---
layout: mfp_documentation
title: MyFitnessPal Developer - User Authorization
permalink: /docs-mpf/user-authentication/
---

# User Authorization

MyFitnessPal API user authorization is based on the OAuth 2.0 protocol. (See: http://oauth.net/2/​) In order to use the API to interact with a user's MyFitnessPal account, these steps must be followed:

1. Obtain permission from the user to link their account to your application. To do this, create a link on your website to the Authorization Code Grant URL hosted by MyFitnessPal. When the user follows this link, they will be presented with the option to grant access to your application. (If they do not already have a session in MyFitnessPal, they will first be presented with a login form.)

2. If the user grants access to your application, the MyFitnessPal servers will redirect the user back to your site. Along with this redirect you will be passed an ​authorization code which represents the link between your application and the user.

3. Immediately exchange the authorization code for an access token and a refresh token from MyFitnessPal. As part of this request, you will pass along your ​client id​ and ​client secret​, which serve to authenticate your application to the MyFitnessPal API. MyFitnessPal will provide you with the c​lient id​ and ​client secret​ when you set up your API account.

4. The provided access token represents a fully authenticated token that must be used to make API requests on behalf of the linked user account. Every API request must contain a valid access token. The access token will expire after a certain period. A client app may request a new access token at any time using the refresh token. The refresh token remains valid until revoked by either your application or the user.

5. Once a user has authorized your app to make requests to the MyFitnessPal API on their behalf, you may use the API methods documented below, including the access token with each request.

Each step in this process is described in more detail in the following sections.
