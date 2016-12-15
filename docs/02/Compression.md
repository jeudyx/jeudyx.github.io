---
layout: documentation
title: Compression
permalink: /docs/02_Compression/
version: v0.2
---

# Compression

Most of the API endpoints in Under Armour respond with requests using
JSON and accept JSON as payload for POST and PUT operations.  While
JSON is a very compact and readable format, the payloads can still be
dramatically compacted using gzip.

We highly suggest you support response compression in your client to
decrease network overhead between your client and our services.  If
you are uploading workouts or routes to our system, we also suggest
you use upload compression.

## Responses

All endpoints support response compression.  To enable compression, your request must provide an "Accept-Encoding" with the value set to gzip.

```
GET /{{ page.version }}/... HTTP/1.1
Host: api.underarmour.com
Accept: application/json
Accept-Encoding: gzip
```

Example usage in python:

```python
import requests
from requests_oauthlib import OAuth1

oauth = OAuth1([redacted], [redacted], [redacted], [redacted], signature_type='AUTH_HEADER')
resource_url = 'https://api.underarmour.com/{{ page.version }}/route/?user=' % user_id
r = requests.get(url=resource_url, auth=oauth, headers={"Accept-Encoding": "gzip", "Accept": "application/json"})
```

By setting that header, you should get gzipped responses when there is a sufficiently large payload.


## Requests
All endpoints support request compression.  To enable request compression, your
request must provide the "Content-Encoding" with the value set to gzip and a
compressed body.

Example:

```
POST /{{ page.version }}/... HTTP/1.1
Host: api.underarmour.com
Accept: application/json
Accept-Encoding: gzip
Content-Encoding: gzip
Content-Type: application/json
Content-Length: your-body-content-length

... gzipped JSON data ...
```

Example usage in python:

```python
import requests
import json
import StringIO
import gzip
from __future__ import unicode_literals
from requests_oauthlib import OAuth1

r = requests.get("https://developer.underarmour.com/files/example_route.json")
oauth = OAuth1([redacted], [redacted], [redacted], [redacted], signature_type='AUTH_HEADER')
resource_url = 'https://api.underarmour.com/{{ page.version }}/route/'
out = StringIO.StringIO()
gzip_file = gzip.GzipFile(fileobj=out, mode='w')
gzip_file.write(r.content)
gzip_file.close()
gzip_data = out.getvalue()
r = requests.post(url=resource_url, auth=oauth, headers={"Content-Encoding": "gzip", "Accept-Encoding": "gzip", "Accept": "application/json", "Content-Type": "application/json"}, data=gzip_data)
```


By setting that header and compressing the body, you should significantly speed up data sent into Under Armour API Endpoints.
