-- liquibase formatted sql

-- changeset C_000:13-create-table-contacts
CREATE TABLE IF NOT EXISTS "contacts" (
    "id" serial PRIMARY KEY,
    "personId" integer NOT NULL,
    "contactTypeId" integer NOT NULL,
    "contact" varchar(50) UNIQUE NOT NULL,
    "isPrimary" bool NOT NULL DEFAULT true,
    "metaId" integer UNIQUE NOT NULL
);
-- rollback DROP TABLE contacts;
