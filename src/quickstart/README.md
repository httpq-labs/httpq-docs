---
sidebar: auto
---

# Quick Start
Estimated time to complete this tutorial: 5 minutes.

## Requirements

- `git`
- `Docker` with `docker-compose`
- `curl`

## Clone the repository

```bash
git clone https://github.com/httpq-labs/httpq-server.git
```

## Start the server


```bash
docker-compose -f docker-compose.yaml -f docker-compose.all.yaml up
```

## Get the root API key

Get the `ROOT_KEY` from the DB (password: `postgres`) using the client of your choice:

```
psql -h 0.0.0.0 -U postgres 
...snip...
postgres=# SELECT security_key FROM public.security_keys;

             security_key
--------------------------------------
 f8f08618-f559-4aec-a916-36508ab7240d
(1 row)
```

The `ROOT_KEY` is bootstrapped by the server and is only available via a direct SQL query. It is used to create tenants. HTTPQ's security key scopes are explained here. To put in simply, the permissions related to the configuration and production of webhooks are separate from the permissions related to the consumption of webhooks by the tenant's users.

Save the `ROOT_KEY` in your shell
```bash
ROOT_KEY=f8f08618-f559-4aec-a916-36508ab7240d
```

## Create a tenant

```bash
curl -v --data '{"name": "acme corp"}' -H"X-Api-Key: $ROOT_KEY"  -H 'Content-Type: application/json' http://0.0.0.0:8888/tenants
```
```json
{
  "id" : "2d723ffe-e476-45a2-9b64-333d66ce4fb6"
}
```

Create a `TENANT_MASTER_KEY` for this tenant using your `ROOT_KEY`
```bash
curl -v --data '{"tenantId": "4ee30df5-24fa-44f9-877c-f19734e00641"}' -H"X-Api-Key: $ROOT_KEY"  -H 'Content-Type: application/json' http://0.0.0.0:8888/keys
```
```json
{
  "id" : "8079008f-b744-42a0-9a57-2fb6b0b65310",
  "securityKey" : "29c316dc-6f9e-4950-ad9c-6181da7f0e4e",
  "scope" : "TENANT_MASTER",
  "tenantId" : "2d723ffe-e476-45a2-9b64-333d66ce4fb6"
}
```

Save the `TENANT_MASTER_KEY` key in your shell
```bash
TENANT_MASTER_KEY=29c316dc-6f9e-4950-ad9c-6181da7f0e4e
```

Create a `TENANT_USER_KEY` for this tenant using the `TENANT_MASTER_KEY`
```bash
curl -v --data "{}" -H"X-Api-Key: $TENANT_MASTER_KEY"  -H 'Content-Type: application/json' http://0.0.0.0:8888/keys
```

```json
{
  "id" : "6b769747-ceab-4562-8d2a-12ce5934f6dc",
  "securityKey" : "9ca33d14-32ce-4ec7-bbd1-1e0ae9b73bee",
  "scope" : "TENANT_USER",
  "tenantId" : "2d723ffe-e476-45a2-9b64-333d66ce4fb6"
}
```
Save the `TENANT_USER_KEY` in your shell
```bash
TENANT_USER_KEY=9ca33d14-32ce-4ec7-bbd1-1e0ae9b73bee
```

Think of the `TENANT_MASTER_KEY` as the admin key for the tenant. There's only one! On the other hand, You can issue multiple `TENANT_USER_KEY` to each of your teams or developer for them to give their code access to HTTPQ and webhooks sending.


## Define an API version

HTTPQ gives you the choice to opt into API versioning but does not force you to do so. You must define at least one API version for your webhooks. Version identifiers depend on your API versioning strategy, and are likely to be something like `v1` or `2020-03-22`

It's recommended to strongly tie the schema of webhooks data to your API schema. It means a payload received by webhooks for a given resource should match what the API would return if the resource was queried directly from the API. Consistency can be helpful and reduce boilerplate deserialization code for the end user.

Create a version with your `TENANT_MASTER_KEY`

```bash
curl -v --data '{"version": "2020-03-22"}' -H"X-Api-Key: $TENANT_MASTER_KEY"  -H 'Content-Type: application/json' http://0.0.0.0:8888/versions
```

```json
{
  "id" : "4e753e34-feba-4e5b-8fd2-2fbd27b8446b"
}
```

Save the `VERSION_ID` in your shell
```bash
VERSION_ID=4e753e34-feba-4e5b-8fd2-2fbd27b8446b
```

## Create a topic
A __topic__ is a source of asynchronous events you deem relevant to your end user. The end user can __subscribe__ to a particular topic to receive suchs events as __webhooks__ at the URL of their choice.

::: details Examples
If you operate a CI/CD project then a topic like `build.completed` is likely interesting to build owners. They can be notified about build status in near-real time, and create notifications and workflows tailored to their need based on this information.

If you operate an online payments company, topics such as `payment.declined` or `subscription.cancelled` can help end users take appropriate action while it's time, for example contact the customer or offer a discount.
:::


Create a topic
```bash
curl -v --data '{"name": "build.completed"}' -H"X-Api-Key: $TENANT_MASTER_KEY"  -H 'Content-Type: application/json' http://0.0.0.0:8888/topics
```

```json
{
  "id" : "f9e13e4b-684c-443a-9078-42e0ec5f374a"
}
```

Save the `TOPIC_ID` in your shell
```bash
TOPIC_ID=f9e13e4b-684c-443a-9078-42e0ec5f374a
```


## Create a consumer

A consumer is a recipient of webhooks. HTTPQ allows consumers to select the API version of their choice, typically the current version for new consumers. If you practice API versioning, you can let customers upgrade API versions on their own, or force them to upgrade. HTTPQ is friendly to multiple API versions that coexists and are actively used by customers.

You can set a unique `externalId` identifier in the request in order to map this HTTPQ consumer to your internal user identifier, or you can store the `consumer_id` somehwere near the user internal ID so you can connect users in both systems.

Create a consumer with your `TENANT_USER_KEY`
```bash
curl -v --data '{"versionId": "'"$VERSION_ID"'"}' -H"X-Api-Key: $TENANT_USER_KEY"  -H 'Content-Type: application/json' http://0.0.0.0:8888/consumers
```
```json
{
  "id" : "abf8340b-5a75-4a4b-9b49-e29cdb084ca2"
}
```

Save the `CONSUMER_ID` in your shell.
```bash
CONSUMER_ID=abf8340b-5a75-4a4b-9b49-e29cdb084ca2
```


## Create a subscription
A subscription connects a consumer to a topic via a URL of their choice where webhooks will be sent.

Create a subscription with your `TENANT_USER_KEY`
```bash
curl -v --data '{"consumerId": "'"$CONSUMER_ID"'", "topicId": "'"$TOPIC_ID"'", "url": "http://0.0.0.0:8722/quickstart"}' -H"X-Api-Key: $TENANT_USER_KEY"  -H 'Content-Type: application/json' http://0.0.0.0:8888/subscriptions
```

```json
{
  "id" : "10513c59-fea2-4aa8-972f-79bfa6d272e9"
}
```

You don't need to store the `SUBSCRIPTION_ID` for this quick start tutorial.

## Send your first webhook

The `docker-compose` command you ran at the beginning also started a container that runs `requestbin`. It's a handy service that records HTTP requests sent to it, which helps us view the webhooks HTTPQ sends. It's available at [http://0.0.0.0:8722](http://0.0.0.0:8722). That's the endpoint we used to create the webhooks subscription above, where we used the `quickstart` bin. Open [http://0.0.0.0:8722/quickstart?inspect](http://0.0.0.0:8722/quickstart?inspect) and see that it's empty for now.


Let's send our first webhook. The three identifiers a webhooks sender needs are:
- `CONSUMER_ID`
- `TOPIC_ID`
- All active Tenant API versions (we explain why in the guide)

Now Send a webhook to this consumer if they have a subscription.
```bash
curl -v --data '{"consumerId": "'"$CONSUMER_ID"'", "topic": "build.completed", "versionedPayloads": {"2020-03-22": {"message":"hello"}}}' -H"X-Api-Key: $TENANT_USER_KEY"  -H 'Content-Type: application/json' http://0.0.0.0:8888/events
```

Refresh the requestbin and you should see your first webhook!


## Next steps

- Overview of HTTPQ
- In-depth guide (API versioning, scaling, API security model)
