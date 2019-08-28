---
layout: mfp_documentation
title: MyFitnessPal Developer - Collection Requests
permalink: /docs-mpf/collection-requests/
---

# Collection Requests

Initial requests may include this parameter in addition to resource-specific request parameters:

    ● max_items​ – the maximum number of resources to return in the response. If 
    not provided, the default value of 100 is assumed, unless otherwise specified 
    by an API endpoint.

When a response is a paginated collection of resources,it will include an HTTP **L​ink​** header with "next" and/or "previous" URLs, which clients may use to request the respective page of resources. The URLs will contain:

    ● the original request URI
    ● a pagination token, which is a string that encapsulates the original 
      request parameters, the page size, and the pagination offset/cursor
    ● a parameter called ​max_items​, which contains the originally requested 
      m​ax_items value (or the default value if none was specified), but 
      which may be altered by the client

An example header value (line breaks added for readability):

    Link: <https://domain.com/resources?page_token=Zm9vPWJhciZiYXo9Ym9v&max_items=20>;
       rel=next, <https://domain.com/resources?page_token=bSZjb3c9bWlsayZwa&max_items=20>;
       rel=previous
       
These links will be present only when available; if the response contains all available resources, it will not include a header. If a "next" page is available but no "previous" page is available, only the "next" link will be present in the header, and vice versa.


## Collection Request Parameters

The following parameters will be available for every request made to an API endpoint that returns a collection of objects:

**Name** | **Description** | **Type** | **Sample Value** | **Default Value**
 --- | --- | --- | --- | --- 
 max_items | The maximum number of items to return in the response. The server may refuse to fulfill a request when it deems the value of **max_items​** to be too high. Such an error would include a response status code of ​**400 Bad Request**​. | Integer | 10, 20 | 100, unless otherwise specified
 page_token | A token encapsulating all request parameters except **​max_items**​, used for requesting next or previous pages of paginated results. | String | | N/A
 
 
 ## Example: Collection with page size of 2. first page
 
 Request:
 
    GET /diary?type=diary_meal&date=2014-07-15&max_items=2&fields[]=nutritional_contents
 
 Response header:
 
    Link: <https://api.myfitnesspal.com/v2/diary?page_token=47878fevs3jjfh&max_items=2>;
    rel=next
    
 Response body:
 
     {
         "items": [ {
             "type": "diary_meal",
             "date": "2014-07-15",
             "diary_meal": "Breakfast",
             "nutritional_contents": {
               "energy": { "unit": "calories", "value": 350 },
               "fat": 6.8,
               "protein": 19,
               "sugar": 8
             } 
           },
           {
             "type": "diary_meal",
             "date": "2014-07-15",
             "diary_meal": "Lunch",
             "nutritional_contents": {
               "energy": { "unit": "calories", "value": 531 },
               "fat": 12,
               "protein": 25,
               "sugar": 9,
               "cholesterol": 125,
               "fiber": 6,
               "vitamin_a": 35,
               "vitamin_c": 40
             } 
           }
         ] 
     }
 