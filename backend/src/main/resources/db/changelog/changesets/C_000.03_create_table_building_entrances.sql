-- liquibase formatted sql

-- changeset C_000:03-create-table-building-entrances
CREATE TABLE IF NOT EXISTS "building_entrances" (
    "id" integer PRIMARY KEY,
    "buildingId" integer NOT NULL,
    "tenantRepresentativeId" integer,
    "streetId" integer NOT NULL,
    "streetNumber" integer NOT NULL,
    "metaId" integer UNIQUE NOT NULL,
    UNIQUE ("streetId", "streetNumber")
);
-- rollback DROP TABLE building_entrances;
