-- liquibase formatted sql

-- changeset C_000:14-create-table-contact-types
CREATE TABLE IF NOT EXISTS "contact_types" (
    "id" integer PRIMARY KEY,
    "name" varchar(50) UNIQUE NOT NULL,
    "metaId" integer UNIQUE NOT NULL
);
-- rollback DROP TABLE contact_types;
