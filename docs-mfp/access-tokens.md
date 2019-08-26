---
layout: mfp_documentation
title: MyFitnessPal Developer - Access Tokens and related information
permalink: /docs-mpf/access-tokens/
---

# Access Token and Related Information

All requests made against the API (except for Authentication and Authorization) require an access token. The access token must be passed as part of the HTTP Authorization Header (per ​http://tools.ietf.org/html/rfc6749#page­49​ Section 7.1). In addition to the access token, the following non­standard HTTP headers1 related to the access token must be included:

**Name** | **Description** | **Type** | **Required** | **Default Value**
 --- | --- | --- | --- | ---
 mfp-client-id | Client id associated with the token. | String | Y | N/A
 mfp-user-id | Unique user id associated with the token. | String | N | none
 
 The values of these headers must match those associated with the access token. (If any of the values associated with the access token is nil, the corresponding header may be omitted.)