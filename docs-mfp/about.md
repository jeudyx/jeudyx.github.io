---
layout: mfp_documentation
title: MyFitnessPal Developer - About
permalink: /docs-mpf/about/
---

# About this API

This application programming interface (API) is designed to be RESTful, meaning that various items such as exercises, users, and diary entries—collectively known as resources—can be created, retrieved, updated, and deleted using HTTP methods. Efforts have been made to use and adhere to web standards and best practices, to ensure a consistent API experience across clients and platforms.

Using a RESTful approach means several things:

    ● a clean separation of client from server: clients are not concerned with 
      the mechanisms used by the server to store, fetch and maintain data, and 
      servers are not concerned with the mechanisms used by clients to interact 
      with their users.
    ● stateless context: no client context is stored on the server between 
      requests, and any session state is the client's responsibility.
    ● a uniform interface: resources are identified with universal resource 
      identifiers (URIs).
    ● representation of resources: resources are conceptually distinct from 
      the representations contained in requests and responses. (A server does 
      not send a database row to a client, but a representation of that database 
      row, perhaps in JSON or XML.)
    ● idempotence: submitting a request multiple times does not change the result 
      beyond the first one.
    ● atomic batch requests: where batch operations are supported, such as the 
      creation of multiple objects with a single request, the request must either 
      fully complete or have no net effect. This includes validation, such that 
      if one object in the request fails validation, the request fails for all 
      objects in the request.

Requests to this API use the following HTTP methods:

    ● GET: retrieval of resources
    ● POST: creation of a resource
    ● DELETE: deleting a resource
    ● PATCH: updating a resource. The specification for the PATCH method (see: ​RFC 5789)​ states:
        
        The PATCH method requests that a set of changes described in the request 
        entity be applied to the resource identified by the Request­URI.

    This API defines "a set of changes" as t​he properties present in the request 
    body of a resource representation.​ This means that performing a PATCH on a 
    resource updates only​ the properties contained in the body of the request. The 
    absence of a property from the body of a PATCH request means that property 
    ​must not​ be changed by the request, with the exception of automatic properties, 
    such as last­updated­time.

