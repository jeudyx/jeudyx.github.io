---
layout: mfp_documentation
title: MyFitnessPal Developer - Request query parameters 
permalink: /docs-mpf/request-query-parameters/
---

# Authorization Code Grant

This is the first step in the process, the granting of a single-use authorization code.

    GET ​/oauth2/auth



## Request Query Parameters

**Name** | **Description** | **Required**
 :--- | --- | :---:
 response_type | Indicates the desired response type. Must be set to **​code**​. | Y
 client_id | Your app's client id | Y
 redirect_uri | The URL to redirect to when the user completes the authorization flow. This URL will receive the results of the authorization request as query parameters. | Y
 scope | A space­delimited list of permission scopes requested by your app. Must be limited to scopes that have not previously been authorized. (See below for a list of scope.) | Y
 state | An opaque string used to maintain state between requests. MyFitnessPal will include this string unchanged as a query parameter appended to ​**redirect_uri**​. Useful for protecting against Cross-site Request Forgery (CSRF) attacks. If used, it should be an arbitrary string unique to each authentication request. | N
 
 Available permission scopes:

     ● measurements
     ● diary
     ● private­exercises 
     ● subscriptions
