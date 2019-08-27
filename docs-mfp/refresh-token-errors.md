---
layout: mfp_documentation
title: MyFitnessPal Developer - Refresh Token Errors
permalink: /docs-mpf/refresh-token-errors/
---

# Refresh Token Errors

If the access token cannot be refreshed due to client errors, the response will include a status code of **​400 Bad Request​**, and the body will be a structure with the following properties, as applicable:

**Name** | **Description** 
 :--- | --- 
error | Identifier or name of the error
error_description | A longer description of the error, with information on how to address it
error_uri | The URL of a web page with more information about the error

Examples of error names are ​**invalid_request**​ and ​**unauthorized_client**​.