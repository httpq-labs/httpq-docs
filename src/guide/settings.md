# Server Settings

Default settings are in [`src/main/resources/application.conf`](https://github.com/httpq-labs/httpq-server/blob/main/src/main/resources/application.conf).

Settings can be overriden via JVM arguments, such as `java -jar -Dhttp.port=9000 ...`. 

Note that `DATABASE_URL` is also available to override as an environment variable using the standard connection string template.