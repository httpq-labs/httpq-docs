(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{292:function(s,t,e){"use strict";e.r(t);var a=e(13),r=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"quick-start"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[s._v("#")]),s._v(" Quick Start")]),s._v(" "),t("p",[s._v("Estimated time to complete this tutorial: 5 minutes.")]),s._v(" "),t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[s._v("#")]),s._v(" Requirements")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("git")])]),s._v(" "),t("li",[t("code",[s._v("Docker")]),s._v(" with "),t("code",[s._v("docker-compose")])]),s._v(" "),t("li",[t("code",[s._v("curl")])])]),s._v(" "),t("h2",{attrs:{id:"clone-the-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clone-the-repository"}},[s._v("#")]),s._v(" Clone the repository")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/httpq-labs/httpq-server.git\n")])])]),t("h2",{attrs:{id:"start-the-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-the-server"}},[s._v("#")]),s._v(" Start the server")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" -f docker-compose.yaml -f docker-compose.all.yaml up\n")])])]),t("h2",{attrs:{id:"get-the-root-api-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-the-root-api-key"}},[s._v("#")]),s._v(" Get the root API key")]),s._v(" "),t("p",[s._v("Get the "),t("code",[s._v("ROOT_KEY")]),s._v(" from the DB (password: "),t("code",[s._v("postgres")]),s._v(") using the client of your choice:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("psql -h 0.0.0.0 -U postgres \n...snip...\npostgres=# SELECT security_key FROM public.security_keys;\n\n             security_key\n--------------------------------------\n f8f08618-f559-4aec-a916-36508ab7240d\n(1 row)\n")])])]),t("p",[s._v("The "),t("code",[s._v("ROOT_KEY")]),s._v(" is bootstrapped by the server and is only available via a direct SQL query. It is used to create tenants. HTTPQ's security key scopes are explained here. To put in simply, the permissions related to the configuration and production of webhooks are separate from the permissions related to the consumption of webhooks by the tenant's users.")]),s._v(" "),t("p",[s._v("Save the "),t("code",[s._v("ROOT_KEY")]),s._v(" in your shell")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ROOT_KEY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("f8f08618-f559-4aec-a916-36508ab7240d\n")])])]),t("h2",{attrs:{id:"create-a-tenant"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-tenant"}},[s._v("#")]),s._v(" Create a tenant")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -v --data "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"name": "acme corp"}\'')]),s._v(" -H"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"X-Api-Key: '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ROOT_KEY")]),s._v('"')]),s._v("  -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/json'")]),s._v(" http://0.0.0.0:8888/tenants\n")])])]),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2d723ffe-e476-45a2-9b64-333d66ce4fb6"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("Create a "),t("code",[s._v("TENANT_MASTER_KEY")]),s._v(" for this tenant using your "),t("code",[s._v("ROOT_KEY")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -v --data "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"tenantId": "4ee30df5-24fa-44f9-877c-f19734e00641"}\'')]),s._v(" -H"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"X-Api-Key: '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ROOT_KEY")]),s._v('"')]),s._v("  -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/json'")]),s._v(" http://0.0.0.0:8888/keys\n")])])]),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8079008f-b744-42a0-9a57-2fb6b0b65310"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"securityKey"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"29c316dc-6f9e-4950-ad9c-6181da7f0e4e"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scope"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"TENANT_MASTER"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"tenantId"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2d723ffe-e476-45a2-9b64-333d66ce4fb6"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("Save the "),t("code",[s._v("TENANT_MASTER_KEY")]),s._v(" key in your shell")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TENANT_MASTER_KEY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("29c316dc-6f9e-4950-ad9c-6181da7f0e4e\n")])])]),t("p",[s._v("Create a "),t("code",[s._v("TENANT_USER_KEY")]),s._v(" for this tenant using the "),t("code",[s._v("TENANT_MASTER_KEY")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -v --data "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{}"')]),s._v(" -H"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"X-Api-Key: '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TENANT_MASTER_KEY")]),s._v('"')]),s._v("  -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/json'")]),s._v(" http://0.0.0.0:8888/keys\n")])])]),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6b769747-ceab-4562-8d2a-12ce5934f6dc"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"securityKey"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"9ca33d14-32ce-4ec7-bbd1-1e0ae9b73bee"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scope"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"TENANT_USER"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"tenantId"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2d723ffe-e476-45a2-9b64-333d66ce4fb6"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("Save the "),t("code",[s._v("TENANT_USER_KEY")]),s._v(" in your shell")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TENANT_USER_KEY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("9ca33d14-32ce-4ec7-bbd1-1e0ae9b73bee\n")])])]),t("p",[s._v("Think of the "),t("code",[s._v("TENANT_MASTER_KEY")]),s._v(" as the admin key for the tenant. There's only one! On the other hand, You can issue multiple "),t("code",[s._v("TENANT_USER_KEY")]),s._v(" to each of your teams or developer for them to give their code access to HTTPQ and webhooks sending.")]),s._v(" "),t("h2",{attrs:{id:"define-an-api-version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#define-an-api-version"}},[s._v("#")]),s._v(" Define an API version")]),s._v(" "),t("p",[s._v("HTTPQ gives you the choice to opt into API versioning but does not force you to do so. You must define at least one API version for your webhooks. Version identifiers depend on your API versioning strategy, and are likely to be something like "),t("code",[s._v("v1")]),s._v(" or "),t("code",[s._v("2020-03-22")])]),s._v(" "),t("p",[s._v("It's recommended to strongly tie the schema of webhooks data to your API schema. It means a payload received by webhooks for a given resource should match what the API would return if the resource was queried directly from the API. Consistency can be helpful and reduce boilerplate deserialization code for the end user.")]),s._v(" "),t("p",[s._v("Create a version with your "),t("code",[s._v("TENANT_MASTER_KEY")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -v --data "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"version": "2020-03-22"}\'')]),s._v(" -H"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"X-Api-Key: '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TENANT_MASTER_KEY")]),s._v('"')]),s._v("  -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/json'")]),s._v(" http://0.0.0.0:8888/versions\n")])])]),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"4e753e34-feba-4e5b-8fd2-2fbd27b8446b"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("Save the "),t("code",[s._v("VERSION_ID")]),s._v(" in your shell")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VERSION_ID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("4e753e34-feba-4e5b-8fd2-2fbd27b8446b\n")])])]),t("h2",{attrs:{id:"create-a-topic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-topic"}},[s._v("#")]),s._v(" Create a topic")]),s._v(" "),t("p",[s._v("A "),t("strong",[s._v("topic")]),s._v(" is a source of asynchronous events you deem relevant to your end user. The end user can "),t("strong",[s._v("subscribe")]),s._v(" to a particular topic to receive suchs events as "),t("strong",[s._v("webhooks")]),s._v(" at the URL of their choice.")]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("Examples")]),s._v(" "),t("p",[s._v("If you operate a CI/CD project then a topic like "),t("code",[s._v("build.completed")]),s._v(" is likely interesting to build owners. They can be notified about build status in near-real time, and create notifications and workflows tailored to their need based on this information.")]),s._v(" "),t("p",[s._v("If you operate an online payments company, topics such as "),t("code",[s._v("payment.declined")]),s._v(" or "),t("code",[s._v("subscription.cancelled")]),s._v(" can help end users take appropriate action while it's time, for example contact the customer or offer a discount.")])]),s._v(" "),t("p",[s._v("Create a topic")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -v --data "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"name": "build.completed"}\'')]),s._v(" -H"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"X-Api-Key: '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TENANT_MASTER_KEY")]),s._v('"')]),s._v("  -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/json'")]),s._v(" http://0.0.0.0:8888/topics\n")])])]),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"f9e13e4b-684c-443a-9078-42e0ec5f374a"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("Save the "),t("code",[s._v("TOPIC_ID")]),s._v(" in your shell")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TOPIC_ID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("f9e13e4b-684c-443a-9078-42e0ec5f374a\n")])])]),t("h2",{attrs:{id:"create-a-consumer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-consumer"}},[s._v("#")]),s._v(" Create a consumer")]),s._v(" "),t("p",[s._v("A consumer is a recipient of webhooks. HTTPQ allows consumers to select the API version of their choice, typically the current version for new consumers. If you practice API versioning, you can let customers upgrade API versions on their own, or force them to upgrade. HTTPQ is friendly to multiple API versions that coexists and are actively used by customers.")]),s._v(" "),t("p",[s._v("You can set a unique "),t("code",[s._v("externalId")]),s._v(" identifier in the request in order to map this HTTPQ consumer to your internal user identifier, or you can store the "),t("code",[s._v("consumer_id")]),s._v(" somehwere near the user internal ID so you can connect users in both systems.")]),s._v(" "),t("p",[s._v("Create a consumer with your "),t("code",[s._v("TENANT_USER_KEY")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -v --data "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"versionId": "\'')]),s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$VERSION_ID")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\'"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' -H\"X-Api-Key: $TENANT_USER_KEY\"  -H '")]),s._v("Content-Type: application/json' http://0.0.0.0:8888/consumers\n")])])]),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abf8340b-5a75-4a4b-9b49-e29cdb084ca2"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("Save the "),t("code",[s._v("CONSUMER_ID")]),s._v(" in your shell.")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CONSUMER_ID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("abf8340b-5a75-4a4b-9b49-e29cdb084ca2\n")])])]),t("h2",{attrs:{id:"create-a-subscription"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-subscription"}},[s._v("#")]),s._v(" Create a subscription")]),s._v(" "),t("p",[s._v("A subscription connects a consumer to a topic via a URL of their choice where webhooks will be sent.")]),s._v(" "),t("p",[s._v("Create a subscription with your "),t("code",[s._v("TENANT_USER_KEY")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -v --data "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"consumerId": "\'')]),s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CONSUMER_ID")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\'"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topicId"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\'"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TOPIC_ID")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\'"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"url"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://0.0.0.0:8722/quickstart"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' -H\"X-Api-Key: $TENANT_USER_KEY\"  -H '")]),s._v("Content-Type: application/json' http://0.0.0.0:8888/subscriptions\n")])])]),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10513c59-fea2-4aa8-972f-79bfa6d272e9"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("You don't need to store the "),t("code",[s._v("SUBSCRIPTION_ID")]),s._v(" for this quick start tutorial.")]),s._v(" "),t("h2",{attrs:{id:"send-your-first-webhook"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#send-your-first-webhook"}},[s._v("#")]),s._v(" Send your first webhook")]),s._v(" "),t("p",[s._v("The "),t("code",[s._v("docker-compose")]),s._v(" command you ran at the beginning also started a container that runs "),t("code",[s._v("requestbin")]),s._v(". It's a handy service that records HTTP requests sent to it, which helps us view the webhooks HTTPQ sends. It's available at "),t("a",{attrs:{href:"http://0.0.0.0:8722",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://0.0.0.0:8722"),t("OutboundLink")],1),s._v(". That's the endpoint we used to create the webhooks subscription above, where we used the "),t("code",[s._v("quickstart")]),s._v(" bin. Open "),t("a",{attrs:{href:"http://0.0.0.0:8722/quickstart?inspect",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://0.0.0.0:8722/quickstart?inspect"),t("OutboundLink")],1),s._v(" and see that it's empty for now.")]),s._v(" "),t("p",[s._v("Let's send our first webhook. The three identifiers a webhooks sender needs are:")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("CONSUMER_ID")])]),s._v(" "),t("li",[t("code",[s._v("TOPIC_ID")])]),s._v(" "),t("li",[s._v("All active Tenant API versions (we explain why in the guide)")])]),s._v(" "),t("p",[s._v("Now Send a webhook to this consumer if they have a subscription.")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -v --data "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"consumerId": "\'')]),s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CONSUMER_ID")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\'"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topic"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build.completed"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"versionedPayloads"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2020-03-22"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"message"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' -H\"X-Api-Key: $TENANT_USER_KEY\"  -H '")]),s._v("Content-Type: application/json' http://0.0.0.0:8888/events\n")])])]),t("p",[s._v("Refresh the requestbin and you should see your first webhook!")]),s._v(" "),t("h2",{attrs:{id:"next-steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[s._v("#")]),s._v(" Next steps")]),s._v(" "),t("ul",[t("li",[s._v("Overview of HTTPQ")]),s._v(" "),t("li",[s._v("In-depth guide (API versioning, scaling, API security model)")])])])}),[],!1,null,null,null);t.default=r.exports}}]);