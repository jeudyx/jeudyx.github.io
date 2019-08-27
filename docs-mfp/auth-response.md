---
layout: mfp_documentation
title: MyFitnessPal Developer - Response
permalink: /docs-mpf/auth-response/
---

# Response

A successful response will be a redirect to the path contained in the ​redirect_uri​ query parameter, with the following query parameters added:

**Names** | **Description** 
 :---: | --- 
 code | The authorization code. Clients may expect this code to be approximately forty (40) characters long.
 state | If the request included a **​state**​ parameter, this will contain that same value. (If no **state**​ value was included, this parameter will not be appended to the redirect.)
 
 The authorization code will expire after ten (10) minutes. The OAuth 2.0 specification stipulates that it may be used no more than once, and that if a subsequent attempt is made to use the code, then the request should be denied and all access tokens associated with it should be revoked.