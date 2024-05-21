-- liquibase formatted sql

-- changeset C_000:01-create-table-places
CREATE TABLE IF NOT EXISTS "places" (
    "id" integer PRIMARY KEY,
    "countryId" integer NOT NULL,
    "name" varchar(50) UNIQUE NOT NULL,
    "postalCode" integer UNIQUE NOT NULL,
    "metaId" integer UNIQUE NOT NULL,
    UNIQUE("name", "postalCode")
);
-- rollback DROP TABLE places;
