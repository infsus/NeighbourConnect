-- liquibase formatted sql

-- changeset C_000:10-create-table-residents
CREATE TABLE IF NOT EXISTS "residents" (
    "id" serial PRIMARY KEY,
    "acceptsBeRepresentative" bool NOT NULL DEFAULT true
);
-- rollback DROP TABLE residents;
