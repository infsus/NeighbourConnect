-- liquibase formatted sql

-- changeset C_000:00-create-table-countries
CREATE TABLE IF NOT EXISTS "countries" (
     "id" serial PRIMARY KEY,
     "name" varchar(50) UNIQUE NOT NULL,
     "code" varchar(3) UNIQUE NOT NULL,
     "metaId" integer UNIQUE NOT NULL
);
-- rollback DROP TABLE countries;
