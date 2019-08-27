---
layout: mfp_documentation
title: MyFitnessPal Developer - Response Codes
permalink: /docs-mpf/response-codes/
---

# Response Codes

Each response includes a standard HTTP status code to indicate the status of the request. Some API endpoints document the status codes they expect to return, but clients can reasonably expect each API endpoint to include any of the following status codes:

**Success Codes** | **Description** 
 :---: | --- 
 200 OK | Typically in response to GET requests, indicates a successful request.
 201 Created | Typically in response to POST requests, indicates the successful creation of a new resource. The response includes the URI of the newly-created resource in a **Location**​ header, and may include a representation of the resource in the body. The resource may be requested via GET at the URI included in the **​Location** header, though if the response body includes a representation of the resource, such a retrieval should be unnecessary.
 202 Accepted | The request succeeded, but processing has not been completed. Provided when a client does not require information about any resources created by the request, such as the submission of analytics data. Responses with this status will not contain a ​**Location**​ header for any created resources.
 204 No Content | Typically in response to PATCH and DELETE requests, indicates that the request completed, but the response body need not contain any information about the resource. This is because the client's and server's views of the resource are identical after the request completes, or because (in the case of DELETE) the resource no longer exists.
 
 **Redirection** | **Description** 
  :---: | --- 
  302 Found | The requested resource temporarily lives under a different URL or URI. A response with this code includes a **​Location**​ header, which indicates where the desired resource may be found.
  
   **Client Error Codes** | **Description** 
  :---: | --- 
  400 Bad Request | The request has malformed syntax. The client should not repeat the request without changing something.
  401 Unauthorized |  The request requires user authentication. Response will include a **WWW-Authenticate**​ header; if the request already included an **​Authorization** header, then this response code indicates a refusal, and the client should not repeat the request without changing something. This will happen if the access token in the header is invalid, mismatched, or expired.
  404 Not Found | The requested resource was not found.
  405 Method Not Allowed | The HTTP method used in the request is not permitted on the resource. Responses must include an ​**Allow**​ header containing a list of HTTP methods allowed on the resource.
  422 Unprocessable Entity | Occurs when the content of a POST, PATCH, or PUT request fails validation.
  429 Too Many Requests | The client has sent too many requests in a given amount of time. The response will include a ​**Retry-After**​ header indicating how long the client should wait before making a new request, the value of which is a number of seconds. Example: Retry-After: 120
  
  **Client Error Codes** | **Description** 
  :---: | ---
  500 Internal Server Error |  The server encountered an unexpected error.
  503 Service Unavailable | The server is temporarily unavailable. When a response contains this status code, clients should wait for some time (at least two minutes) before attempting the request again.