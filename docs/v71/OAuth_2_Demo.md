---
layout: documentation
title: OAuth 2 Tutorial
permalink: /docs/v71_OAuth_2_Demo/
---

# Under Armour API OAuth 2 Demo

The following is a complete end-to-end tutorial that describes how to use OAuth
with the Under Armour API. The API uses OAuth 2, as specified in [RFC
6749]<sup>1</sup>.

This tutorial assumes you've read or are familiar with the material available in
the [OAuth 2 Introduction].

In this tutorial, you will:

1. Register a new client application.

2. Write and execute a simple client application.

Your client application will:

1. Prompt a user to authorize the client application.

2. Receive the user's Authorization Code.

3. Use the user's Authorization Code to obtain an Access Token and Refresh
Token.

4. Use the Access Token to request an API resource.

5. Use the Refresh Token to obtain a new Access Token.

**Note:** We will create our demo application in Python, but you can use any
language to work with the Under Armour API. All we recommend is that you use a
good library for OAuth interactions (as we do below).

The completed script for this tutorial can be found here: [OAuth 2 Demo].

If you have example code in other languages you'd like us to share, submit a pull request to our [examples repository]


[RFC 6749]: http://tools.ietf.org/html/rfc6749
[examples repository]: https://github.com/mapmyfitness/api-examples
[Oauth 2 Introduction]: /docs/v71_OAuth_2_Intro/
[OAuth 2 Demo]: https://github.com/mapmyfitness/api-examples/blob/master/python/oauth2_authorization_demo.py

## Tutorial

### Step 1: Client developer: Register a Client Application

Visit <https://developer.underarmour.com>.

Click "Request a Key".

Complete the form with information about your client application. (If you aren't
logged in, you'll need to fill out the form's first portion about yourself.)

Set the "Register Callback URL" field to
`http://localhost.mapmyapi.com:12345/callback`. Responses from this URL will
redirect to `http://localhost:12345/callback`. In Step 4 we'll show how to set
up a simple server that will handle redirects. If port 12345 is already in use
on your machine, you can use a different one. Just be sure to replace "12345"
with the port number you choose in the steps that follow.

Submit the form.

You should land on a confirmation page, and if this is your first time signing
up, you should receive an email with a link to confirm your email address.

Click the confirmation link.

You should land on a registration success page containing your client
application tokens and secrets.

Make a note of your new application's Key (client ID) and Secret (client
secret). You should keep your Secret private in a secure location.

### Step 2: Client developer: Get the software to implement the tutorial Client Application

The tutorial assumes you have:

* Python >= 2.6
* pip
* virtualenv

If not, download Python from the [Python website] and install it.

[Python website]: http://python.org/download/

Install [setuptools](http://pypi.python.org/pypi/setuptools).

Install [pip](http://www.pip-installer.org).

```bash
    sudo easy_install pip
```

Install [virtualenv](http://www.virtualenv.org).

```bash
    sudo pip install virtualenv
```

Create a virtualenv and activate it.

```bash
    mkdir ua-api-oauth-2-tutorial
    cd ua-api-oauth-2-tutorial
    virtualenv env

    New python executable in env/bin/python
    Installing setuptools............done.
    Installing pip...............done.
```

```bash
    . env/bin/activate
```

Install [IPython], [Requests], [requests-oauthlib], and [oauthlib].

```bash
    pip install ipython
```

```
Downloading/unpacking ipython
      Downloading ipython-0.13.1.tar.gz (5.9MB): 5.9MB downloaded
      Running setup.py egg_info for package ipython
        running egg_info

    Installing collected packages: ipython
      Running setup.py install for ipython
        running install

        Installing ipcontroller script to /Users/username/ua-api-oauth-2-tutorial/env/bin
        Installing iptest script to /Users/username/ua-api-oauth-2-tutorial/env/bin
        Installing ipcluster script to /Users/username/ua-api-oauth-2-tutorial/env/bin
        Installing ipython script to /Users/username/ua-api-oauth-2-tutorial/env/bin
        Installing pycolor script to /Users/username/ua-api-oauth-2-tutorial/env/bin
        Installing iplogger script to /Users/username/ua-api-oauth-2-tutorial/env/bin
        Installing irunner script to /Users/username/ua-api-oauth-2-tutorial/env/bin
        Installing ipengine script to /Users/username/ua-api-oauth-2-tutorial/env/bin
    Successfully installed ipython
    Cleaning up...
```

```bash
    pip install requests requests-oauthlib
```

```
Downloading/unpacking requests
      Downloading requests-1.2.3.tar.gz (348kB): 348kB downloaded
      Storing download in cache at /Users/mlm/.pip/download-cache/https%3A%2F%2Fpypi.python.org%2Fpackages%2Fsource%2Fr%2Frequests%2Frequests-1.2.3.tar.gz
      Running setup.py egg_info for package requests

    Downloading/unpacking requests-oauthlib
      Downloading requests-oauthlib-0.3.3.tar.gz
      Storing download in cache at /Users/mlm/.pip/download-cache/https%3A%2F%2Fpypi.python.org%2Fpackages%2Fsource%2Fr%2Frequests-oauthlib%2Frequests-oauthlib-0.3.3.tar.gz
      Running setup.py egg_info for package requests-oauthlib

    Downloading/unpacking oauthlib>=0.4.2 (from requests-oauthlib)
      Downloading oauthlib-0.5.1.tar.gz (84kB): 84kB downloaded
      Storing download in cache at /Users/mlm/.pip/download-cache/https%3A%2F%2Fpypi.python.org%2Fpackages%2Fsource%2Fo%2Foauthlib%2Foauthlib-0.5.1.tar.gz
      Running setup.py egg_info for package oauthlib

    Installing collected packages: requests, requests-oauthlib, oauthlib
      Running setup.py install for requests

      Running setup.py install for requests-oauthlib

      Running setup.py install for oauthlib

    Successfully installed requests requests-oauthlib oauthlib
    Cleaning up...
```

[IPython]: http://ipython.org/
[Requests]: http://docs.python-requests.org
[requests-oauthlib]: https://crate.io/packages/requests-oauthlib/
[oauthlib]: https://readthedocs.org/projects/oauthlib/

### Step 3: Prompt a user to authorize the Client Application

We'll implement a client application in an interactive Python shell to
demonstrate exactly what's going on. In a real application, this is the kind of
process that your web application server would implement so that your server can
make Under Armour API requests.

Start the IPython interactive shell.

```bash
    ipython
```

```
    Python 2.7.3 (default, Sep 15 2012, 19:45:36)
    Type "copyright", "credits" or "license" for more information.

    IPython 0.13.1 -- An enhanced Interactive Python.
    ?         -> Introduction and overview of IPython's features.
    %quickref -> Quick reference.
    help      -> Python's own help system.
        object?   -> Details about 'object', use 'object??' for extra details.
```

Import the packages we need.

<script src="https://gist-it.appspot.com/https://github.com/mapmyfitness/api-examples/blob/master/python/oauth2_authorization_demo.py?slice=0:7">
</script>


Copy and paste your application's client id and client secret from the
application details on the website in Step 1.


<script src="https://gist-it.appspot.com/https://github.com/mapmyfitness/api-examples/blob/master/python/oauth2_authorization_demo.py?slice=11:19">
</script>

Next, your application needs an Authorization Code. It will direct the user to
Under Armour's authorize page. If the user chooses to authorize your application
the Under Armour website will redirect the user's browser to the URI you specify
in a `redirect_uri` query parameter. The redirection will include a `code`
parameter containing the Authorization Code needed by your application. Your
client application will receive the request from the user's browser in Step 6.


<script src="https://gist-it.appspot.com/https://github.com/mapmyfitness/api-examples/blob/master/python/oauth2_authorization_demo.py?slice=20:23">
</script>


### Step 4: Prepare to handle the User's authorization of your Client Application

Start an HTTP server to receive the user redirect and collect the Authorization
Code. Obviously, if this were a real client application, the client's web server
would already be running.

<script src="https://gist-it.appspot.com/https://github.com/mapmyfitness/api-examples/blob/master/python/oauth2_authorization_demo.py?slice=30:40">
</script>

Direct the user's browser to the authorization URL. (Note: this will open a
browser on your machine, but don't click the "Authorize" button yet. We'll do
that in Step 5.)

<script src="https://gist-it.appspot.com/https://github.com/mapmyfitness/api-examples/blob/master/python/oauth2_authorization_demo.py?slice=41:43">
</script>

### Step 5: User: Authorize the Client Application to access the Under Armour API on your behalf

In this step, you'll act as a user of the tutorial client application. In the
web page that the client application opened when it called `webbrowser.open()`
earlier, enter your username and password, and click "Log In".

> Note: To simplify, log in using your client developer account. But remember, in this step, you're acting as a user of your client application, not as its developer.

<script src="https://gist-it.appspot.com/https://github.com/mapmyfitness/api-examples/blob/master/python/oauth2_authorization_demo.py?slice=45:48">
</script>

The `httpd.handle_request()` statement will block until the user's browser makes
the authorization verification callback request to your client application
server.

Click the "Authorize" button.

The tutorial' client application web server returns an empty page when
`httpd.handle_request()` returns. In a real client application,
`httpd.handle_request()` would do the work in the subsequent tutorial steps, and
*then* return a response page with actions that the user could take next.

### Step 6: Client Application: Receive the user's Authorization Code

When the user clicks the "Authorize" button, his browser makes a `POST` request
to the Under Armour website server. The website server confirms the user's
authorization and responds to the user's browser with a redirect to your client
application's callback URL (as specified by the "Register Callback URL" we
filled out earlier). The user's browser follows the redirect and makes a request
to your client application server's callback URL including the Authorization
Code.

The `httpd.handle_request()` statement that blocked in Step 4 returns when it
handles the request from the user's browser. It also prints the redirect it sent
back to the browser, where you can see the Authorization Code in the `code`
parameter.

Parse the Authorization Code from the request query string, and verify you have an Authorization Code.

<script src="https://gist-it.appspot.com/https://github.com/mapmyfitness/api-examples/blob/master/python/oauth2_authorization_demo.py?slice=50:55">
</script>

### Step 7: Client Application: Exchange the Authorization Code for an Access Token

To get an Access Token, call the Under Armour access token endpoint with the
Authorization Code and your application's client ID and secret. Our API partner,
Mashery, requires an `Api-Key` header with your client ID, so we'll include
that.

> **Note:** Unlike most of our API, requests to the **access token endpoint** are required
> by the specifications to have a content type of `application/x-www-form-urlencoded`

<script src="https://gist-it.appspot.com/https://github.com/mapmyfitness/api-examples/blob/master/python/oauth2_authorization_demo.py?slice=56:65">
</script>

You can inspect the actual details of the request.

<script src="https://gist-it.appspot.com/https://github.com/mapmyfitness/api-examples/blob/master/python/oauth2_authorization_demo.py?slice=66:69">
</script>

```
Content-Type: application/x-www-form-urlencoded
Request body: code=e6e3d79fb6abf972c0aad5851e1a81ac5fff6e58&client_secret=<redacted>&grant_type=authorization_code&client_id=<redacted>
```

Verify you have an Access Token.

<script src="https://gist-it.appspot.com/https://github.com/mapmyfitness/api-examples/blob/master/python/oauth2_authorization_demo.py?slice=71:78">
</script>


```

```

### Step 8: Client Application: Request a resource on behalf of the user with his Access Token

It's helpful to think of OAuth 2 as describing two separate specifications. At
this point, you've completed a demonstration of the first: the web redirection
flow for obtaining a user's authorization and corresponding API token
credentials.

Once your application gets this far, it can use the token credentials to make
resource requests on behalf of the user, and continue to reuse the token
credentials for as long as the user leaves his previous authorization in place
and the token has not expired.

Sign a resource request with the user's token credentials to access resources.

<script src="https://gist-it.appspot.com/https://github.com/mapmyfitness/api-examples/blob/master/python/oauth2_authorization_demo.py?slice=79:83">
</script>

Verify the response.

```
    response.status_code
    Out: 200
```

You can inspect the response by looking at `response.json()`.

### Step 9: Client Application: Refresh a user's credentials to prevent expiration

OAuth 2 tokens granted through the grant_type "authorization_code" will expire
after 60 days. When a user needs continues access to our api, you should refresh
the tokens to prevent a loss of access.

<script src="https://gist-it.appspot.com/https://github.com/mapmyfitness/api-examples/blob/master/python/oauth2_authorization_demo.py?slice=84:94">
</script>

Verify the response.

<script src="https://gist-it.appspot.com/https://github.com/mapmyfitness/api-examples/blob/master/python/oauth2_authorization_demo.py?slice=95:110">
</script>

## What's Next?

Congratulations! You're ready to start using OAuth 2 to access the Under Armour
API in your own client applications. As you're developing, you can return to
this tutorial and use the interactive client application in IPython to explore
API requests and responses.

If you save the Access Token, you can even reuse them to make resource requests
without going through the web redirection flow again.

The tutorial client application can be a particularly useful tool as a point of
comparison if you have any trouble getting API requests to work in your own real
client application.

Check out the [API documentation] and try a few more requests on your own.

[API documentation]: http://developer.underarmour.com/docs

If you still have questions, check our [support page], or feel free to send a [request].

[support page]: https://support.mapmyfitness.com/
[request]: https://support.mapmyfitness.com/hc/en-us/requests/new?request_type=question&platform=other_platform&service=api_support

***
<sup>1</sup>Note:

> [OAuth 1.0] and [OAuth 2] are substantially different protocols. The Under Armour
> API aims to conform to RFC 6749, the most recent OAuth 2 specification as of
> 2014-01-31.

[OAuth 1.0]: http://oauth.net/core/1.0/
[OAuth 1.0a]: http://oauth.net/core/1.0a/
[OAuth 2]: http://tools.ietf.org/html/rfc6749
