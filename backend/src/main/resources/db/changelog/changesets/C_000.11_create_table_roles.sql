-- liquibase formatted sql

-- changeset C_000:11-create-table-roles
CREATE TABLE IF NOT EXISTS "roles" (
    "id" integer PRIMARY KEY,
    "name" varchar(10) UNIQUE NOT NULL,
    "metaId" integer UNIQUE NOT NULL
);
-- rollback DROP TABLE roles;
