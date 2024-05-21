-- liquibase formatted sql

-- changeset C_000:02-create-table-streets
CREATE TABLE IF NOT EXISTS "streets" (
    "id" integer PRIMARY KEY,
    "placeId" integer NOT NULL,
    "name" varchar(50) NOT NULL,
    "metaId" integer UNIQUE NOT NULL,
    UNIQUE ("placeId", "name")  -- we can have multiple streets with the same name, but from other places
);
-- rollback DROP TABLE streets;
