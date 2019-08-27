---
layout: mfp_documentation
title: MyFitnessPal Developer - Request body form parameters
permalink: /docs-mpf/revoke-request-body-form-parameters/
---

# Revoking Tokens

Partners may revoke access and refresh tokens at any time. This process follows the standard described in ​[RFC 7009](https://tools.ietf.org/html/rfc7009)​. Revoked tokens may continue to be accepted for a brief period, as the revocation propagates to all server­side caches and data stores.

    POST ​/oauth2/revoke
    
If the included token is a refresh token, the associated access token will automatically be revoked. If it is an access token, any associated refresh tokens will also be revoked.

This request must be accompanied by an Authorization header, which is assembled using HTTP Basic Authentication. The ​**username​** field must be the partner's client identifier, and the **password​** field must be the partner's client secret. An example of this header:

    Authorization: Basic Tmluy1aGVcnk6NmxMmQwOW4MTA2NzE4ZDg2nU=

The contents of this request are submitted as standard form parameters. The Content-Type header must be:

    Content-Type: x-www-form-urlencoded

## Request body form parameters

**Name** | **Description** | **Required**
 :--- | --- | :---:
 token | The access or refresh token being revoked | Y
 token_type_hint | The type of token being revoked. Must be either **​access_token**​ or **refresh_token**
 
