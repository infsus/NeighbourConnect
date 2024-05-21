-- liquibase formatted sql

-- changeset C_000:18-create-table-complaints
CREATE TABLE IF NOT EXISTS "complaints" (
    "id" integer PRIMARY KEY,
    "householdId" integer NOT NULL,
    "title" varchar(50) NOT NULL,
    "message" varchar(200) NOT NULL,
    "isPrivate" bool NOT NULL DEFAULT true,
    "notifyRepresentative" bool NOT NULL DEFAULT false,
    "metaId" integer UNIQUE NOT NULL
);
-- rollback DROP TABLE complaints;
