---
layout: mfp_documentation
title: MyFitnessPal Developer - Appendix Data Error Codes
permalink: /docs-mpf/appendix-error-codes/
---

# Appendix Data Structures - User Profile

Error codes that may be returned in response bodies are listed below, along with explanations.

**Name** | **Description** 
 --- | --- 
 duplicate-id | The client attempted to assign to a new object a unique identifier that is already used.
 failed-validation | Validation error on the request.
 internal | Internal server error.
 invalid-id | The client attempted to assign to a new object a unique identifier that the server has deemed unacceptable.
 malformed-body | Failed to parse request body.
 malformed-header | Failed to interpret the value of a required HTTP header.
 measurement/101 | Failed to retrieve measurement because the measurement type is not supported.
 method-not-allowed | HTTP method is not allowed.
 missing-body | Request body expected.
 missing-header | Missing a required HTTP header.
 not-found | The requested resource couldn't be found in the server.
 uniqueness-violation | Error returned when trying to create a resource and uniqueness constraint is violated.
 unsupported-content-type | Unsupported content type.
 unsupported-diary-type | The requested diary entry type is unsupported.
 
 
