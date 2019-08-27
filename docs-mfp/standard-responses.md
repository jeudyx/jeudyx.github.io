---
layout: mfp_documentation
title: MyFitnessPal Developer - Standard Responses
permalink: /docs-mpf/standard-responses/
---

# Standard Responses

Unless otherwise documented, successful responses to each HTTP method will be as follows:

    ● GET – A response will include:
        ○ a status code of ​200 OK
        ○ representation(s) of the requested resource(s)
    ● POST – A response will include:
        ○ a status code of ​201 Created
        ○ a ​Location​ header with the URI of the newly­created resource, e.g.,
                /v2/diary/0av9r4kgj23fdw
        ○ a representation of the new resource in the body, as it would be returned by a GET request, including all possible properties that may be specified via the f​ ields query parameter.
    ● PATCH – A response will include:
        ○ a status code of ​204 No Content
        ○ an empty body
    ● DELETE – A response will include:
        ○ a status code of ​204 No Content
        ○ an empty body
        
 
Unless otherwise documented, the response to a failed request will include:

    ● a status code indicating the nature of the failure
    ● an error message explaining why the request failed