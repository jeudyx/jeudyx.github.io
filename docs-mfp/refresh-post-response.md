---
layout: mfp_documentation
title: MyFitnessPal Developer - Response
permalink: /docs-mpf/refresh-post-response/
---

# Refresh Access Token Response

A successful response will have a status code of **​200 OK**,​ and the response body will contain a structure with the following properties:

**Name** | **Description** 
 :--- | --- 
access_token | The access token the client may include on future requests in order to be considered authenticated.
token_type | The type of token returned. Will have the value **​Bearer​**.
expires_in | In seconds, indicates how far in the future the token will expire. This is calculated when the request is processed, so it should be considered an approximate value.
refresh_token | A refresh token, if the flow and client configuration allow issuing refresh tokens.
user_id | The unique identifier of the user associated with the access token.