---
layout: documentation
title: Paging
permalink: /docs/v71_Paging/
---

# Paging

All of the collections returned from the Under Armour API allow for paging the records.
This will allow us to respond as quickly as possible to large data requests and allow
clients to page through the results to find records of value.

To page through a result set, you can follow the next link provided in the results. The
default page size is 20 records, but you can adjust the page size by passing in a different
limit value.  The cap for most end-points is 40 records, but it will be mentioned in an end-point's
documentation if this cap has been overridden.  Adjusting the offset parameter will allow
you to jump to the next/another section of data in the result set. We also provide a total_count
in resources where that can be done to facilitate paging.

## Query Parameters

| Name         | Description               | Type       | Required |
|--------------|---------------------------|------------|----------|
| `limit`      | The number of entries to return                                              | int | No   |
| `offset`     | The number of entries to skip over before returning the next `limit` entries | int | No   |


## Links

`next` A link to the next page of results for the query just run (if applicable)
`prev` A link to the previous page of results for the query just run (if applicable)

### Example

```json
{
  "_embedded": {
    "collection_items": [
      { "sample_item": "here" }
    ]
  },
  "_links": {
    "next": [
      {
        "href": "uri://example?limit=20&offset=20"
      }
    ],
    "self": [
      {
        "href": "uri://example?limit=20&offset=0"
      }
    ]
  },
  "total_count": 100
}
```

