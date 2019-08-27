---
layout: mfp_documentation
title: MyFitnessPal Developer - Request body form parameters 
permalink: /docs-mpf/request-body-form-parameters/
---

# Access Token Request 

This is the second step in the process, using the newly-granted authorization code to request an access token.

    POST ​/oauth2/token
    
The contents of this request are submitted as standard form parameters. The Content-Type header must be:

    Content­Type: x-www-form-urlencoded

## Request Body Form Parameters

**Name** | **Description** | **Required**
 :--- | --- | :---:
 grant_type | The type of authorization grant being requested. Must be set to **authorization_code**​. | Y
 code | The authorization code received in the previous step | Y
 redirect_uri | The same value as the ​**redirect_uri**​ from the authorization code request | Y
 client_id | Your app's client id | Y
 client_secret | Your app's client secret | Y