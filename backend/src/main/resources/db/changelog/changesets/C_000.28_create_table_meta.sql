-- liquibase formatted sql

-- changeset C_000:28-create-table-meta
CREATE TABLE IF NOT EXISTS "meta" (
    "id" integer PRIMARY KEY,
    "createdById" integer NOT NULL,
    "modifiedById" integer NOT NULL,
    "createdAt" timestamp NOT NULL DEFAULT now(),
    "modifiedAt" timestamp NOT NULL DEFAULT now(),
    "isDeleted" bool NOT NULL DEFAULT false
);
-- rollback DROP TABLE meta;
