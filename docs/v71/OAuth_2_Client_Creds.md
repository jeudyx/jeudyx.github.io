---
layout: documentation
title: OAuth 2 Client Credentials
permalink: /docs/v71_OAuth_2_Client_Creds
version: v7.1
---

# <a name="client_credentials"></a> Client Credentials

The Client Credentials grant type is ideal for access to public data and self-management
of your Under Armour API key. This grant type allows consumers to make requests on their own behalf,
not that of a user; it therefore does not require user authorization.
Some use cases include:

  * Finding public routes
  * Exploring public workouts
  * Retrieving `ActivityTypes`

## <a name="tech_desc"></a> Technical Description

For this grant type the `POST` request to the **access token endpoint** (https://api.ua.com/{{ page.version }}/oauth2/access_token/)
should have the following parameters:

| Param           | Value
|-----------------|-------
| `grant_type`    | `client_credentials`
| `client_id`     | Client Application's client ID
| `client_secret` | Client Application's client secret


### Notes

* Unlike most of our API, requests to the **access token endpoint** are required by the specifications to have a content
  type of `application/x-www-form-urlencoded`.
* The legacy endpoint URL `https://oauth2-api.mapmyapi.com/{{ page.version }}/oauth2/access_token/` is interchangeable.

### Example

This is a Python example of how to make a valid client credentials request.

```
import requests

url = 'https://oauth2-api.mapmyapi.com/v7.1/oauth2/access_token/'

CLIENT_KEY = '<Your client key>'
CLIENT_SECRET = '<Your client secret>'

headers = {'Api-Key': CLIENT_KEY, 'Content-Type': 'application/x-www-form-urlencoded'}

data = {'grant_type': 'client_credentials', 'client_id': CLIENT_KEY, 'client_secret': CLIENT_SECRET}

response = requests.post(url, data=data, headers=headers)
```

`response` should return 200 and `response.content` should contain the new access token.

Notice you need to include your API_KEY in both the headers and in the data.

Use your own api key and secret pair when you try it.