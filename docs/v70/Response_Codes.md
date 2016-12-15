---
layout: documentation
title: Response Codes
permalink: /docs/v70_Response_Codes/
---

# Response Codes

The Under Armour API uses standard [HTTP response codes] to indicate the status of requests. Common response codes that client apps should expect include:

| Status Code              | Meaning                                                                                                                                              |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| 200 - OK                 | The request has succeeded.                                                                                                                           |
| 201 - Created            | The request successfully added a resource. This response code should be expected for POST operations which create a resource.                        |
| 202 - Accepted           | The request was accepted, but processing is not complete. This response code is most common for POSTs or PUTs which cannot be handled synchronously. |
| 400 - Bad Request        | The request was invalid. This response code is common when required fields are unspecified, formatted incorrectly, or invalid filters are requested. |
| 401 - Unauthorized       | The request authentication failed. The OAuth credentials that the client supplied were missing or invalid.                                           |
| 403 - Forbidden          | The request credentials authenticated, but the requesting user or client app is not authorized to access the given resource.                         |
| 404 - Not Found          | The requested resource does not exist.                                                                                                               |
| 405 - Method Not Allowed | The requested HTTP method is invalid for the given resource. Review the resource documentation for supported methods.                                |
| 500 - Server Error       | The server failed to fulfill the request. Please notify support with details of the request and response so that we can fix the problem.             |

[HTTP response codes]: http://tools.ietf.org/html/rfc2616#section-10
