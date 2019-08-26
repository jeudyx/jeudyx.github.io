---
layout: mfp_documentation
title: MyFitnessPal Developer - Identifiers
permalink: /docs-mpf/identifiers/
---

# Identifiers

When an object is documented as having a unique identifier, the identifier is expected to be a uniquely­identifying 
string. When requesting the creation of an object, a client ​may​ assign a unique identifier string to the object. The 
chosen identifier is subject to approval by the API backend, however; if the server is dissatisfied with the chosen 
identifier, the creation request will fail with an HTTP status of ​422 Unprocessable Entity​ and will include an error 
message describing the reason.

If a client does not assign a unique identifier to the object being created, the server will assign one.