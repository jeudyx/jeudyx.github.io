---
layout: documentation
title: Errors
permalink: /docs/02_Errors/
---

# Errors


You should expect 40x response codes in your application while you are building your application. 40x errors are usually from invalid usage of an API endpoint which could be handled with proper client side validation of the request before calling our API. To help you debug the requirements we include error messages in the API. An example can be seen to the side:


In the future, we will be including error codes in the validation_failures so you will be able to trigger logic around the errors.

```json
{
    "_diagnostics": {
        "validation_failures": [
            {
                "field_name": [
                    "A detailed error message should be included for what was incorrect with this field."
                ]
            }
        ]
    },
    "_links": {
        "self": [
            {
                "href": "uri://destination"
            }
        ]
    }
}
```
