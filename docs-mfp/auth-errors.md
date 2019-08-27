---
layout: mfp_documentation
title: MyFitnessPal Developer - Error Responses
permalink: /docs-mpf/auth-errors/
---

# Authorization Errors

If a redirect cannot happen due to a missing, invalid, or mismatched **​redirect_uri**​ value, the response will include a status code of **​400 Bad Request**.​

If an authorization code cannot be created due to other client errors, the request will be redirected, with the following error values appended as query parameters, as applicable:

**Names** | **Description** 
 :--- | --- 
 error | Identifier or name of the error
 error_description | A longer description of the error, with information on how to address it
 error_uri | The URL of a web page with more information about the error