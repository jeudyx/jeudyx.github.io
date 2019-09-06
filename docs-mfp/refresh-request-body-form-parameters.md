---
layout: mfp_documentation
title: MyFitnessPal Developer - Request body form parameters
permalink: /docs-mpf/refresh-request-body-form-parameters/
---

# Refreshing Access Tokens 

Access tokens may be refreshed using a refresh token, if the flow and client configuration allow it.

Generally, it is a good practice for a client to check the expiration of its current access token prior to using it, and if it is close to expiration, refresh it first. In most cases, “close” can be defined as “less than 25% of the period remains.”

For example, if an access token was granted with an **expires_in**​ value of 3600 (60 minutes), it is considered close to expiration after 45 minutes. After this point, it is good practice to refresh the access token prior to making another request.

    POST ​/oauth2/token

The contents of this request are submitted as standard form parameters. The Content-Type header must be:

    Content-Type: x-www-form-urlencoded


## Request Body Form Parameters

**Name** | **Description** | **Required**
 :--- | --- | :---:
 grant_type | The type of authorization grant being requested. Must be set to ​**refresh_token**​. | Y
 refresh_token | The refresh token included in the response when the original access token was created. | Y
 client_id | Your app's client id | Y
 client_secret | Your app's client secret | Y
 user_id | The unique identifier of the user associated with the token being refreshed | Y