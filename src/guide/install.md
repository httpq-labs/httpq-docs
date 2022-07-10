# Install HTTPQ

Here are a couple of available options to install and run HTTPQ.

## Option 1: HTTPQ Cloud

The easiest way to start sending webhooks now is using our hosted version, which is in private beta. Contact us at <cloud@httpq.org> to join the waitlist. Secure access via AWS PrivateLink is also available.


## Option 2: Local Machine / Self-Hosting

You can also run HTTPQ on your local machine or self-host it.

You can find our source code licensed under GPLv3 at https://github.com/httpq-labs/httpq-server.

### Install and run

#### Docker

A Dockerfile is available at the root of the git repository.

#### Source Code

HTTPQ is a Java 17 project and builds with Maven.

```bash
./mvnw package -DskipTests 
java -jar target/httpq-server-fat.jar
```

### Health Check

You can use the `/` end-point to verify that the server is ready to accept requests.


```bash
curl http://localhost:8888
pong
```

