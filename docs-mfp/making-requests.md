---
layout: mfp_documentation
title: MyFitnessPal Developer - Making Requests
permalink: /docs-mpf/making-requests/
---

# Making Requests

Once your app has obtained a valid access token, include the following HTTP header with each request, replacing [**access token**]​ with the value of the access token:

**Name** | **Value** 
 :--- | --- 
 Authorization | Bearer [access token]
 
 For example:
   
    Authorization: Bearer a249eb20451e683e3c293baf0lbe8836e034d652