---
layout: mfp_documentation
title: MyFitnessPal Developer - Error Responses
permalink: /docs-mpf/error-responses/
---

# Error Responses

In the event of client error, the response to which will include an HTTP status code in the 400­499 range, the body of the response will be a structure detailing the error.

**Name** | **Description** | **Type** | **Required** | **Default Value**
 --- | --- | --- | --- | --- 
 error | a code representing the type of application error that was encountered | string | Y | subscribe/3
 error_description | a message that describes the error to the user (localized for the locale associated with the request) | string | Y |
 error_uri | a URI with more information about this type of error | uri | N |
 error_details | key/value pairs providing additional details related to the errors | map | N |
 
 In the event of server error (status codes 5​00-599)​ , the server will attempt to include a similar structure describing the error. However, depending on the nature of the error, such a response may not be possible.