---
layout: mfp_documentation
title: MyFitnessPal Developer - Access Token Errors 
permalink: /docs-mpf/access-token-errors/
---

# Access Token Errors

If an access token cannot be created due to client errors, the response will include a status code of ​**400 Bad Request**​, and the body will be a structure with the following properties, as applicable:

**Names** | **Description** 
 :--- | --- 
 error | Identifier or name of the error
 error_description | A longer description of the error, with information on how to address it
 error_uri | The URL of a web page with more information about the error
 
 Examples of error names are **invalid_grant**​ and **​invalid_scope**​.
