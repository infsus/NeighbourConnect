-- liquibase formatted sql

-- changeset C_000:06-create-table-companies
CREATE TABLE IF NOT EXISTS "companies" (
    "id" serial PRIMARY KEY,
    "ownerId" integer NOT NULL,
    "streetId" integer NOT NULL,
    "name" varchar(50) NOT NULL,
    "pid" varchar(11) UNIQUE NOT NULL,
    "foundationDate" date,
    "streetNumber" integer NOT NULL,
    "metaId" integer UNIQUE NOT NULL,
    UNIQUE ("streetId", "streetNumber")
);
-- rollback DROP TABLE companies;
