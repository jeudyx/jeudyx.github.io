---
layout: mfp_documentation
title: MyFitnessPal Developer - Partner Authentication
permalink: /docs-mpf/partner-authentication/
---

# Partner Authentication

MyFitnessPal API partners are provided with two pieces of information used for authorizing and authenticating API requests: a "client id" and a "client secret". The client id serves to uniquely identify a partner application. The client secret is used during the authentication process to ensure that the partner application is issuing API calls and not a third party that happens to guess the partner client id.

In terms of security, the client id should be considered public, and the client secret private. Make sure that the client secret is securely protected. Never pass it in plaintext over the Internet. Do not be concerned about keeping the client id private.

