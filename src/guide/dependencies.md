# Dependencies

HTTPQ uses PostgreSQL. HTTPQ takes care of schema migration thanks to liquibase. You only need to make sure the user/password/schema from `DATABASE_URL` exist as HTTPQ cannot create these. HTTPQ will fail early at startup if it cannot migrate the schema and create table.