-- liquibase formatted sql

-- changeset C_000:04-create-table-buildings
CREATE TABLE IF NOT EXISTS "buildings" (
    "id" integer PRIMARY KEY,
    "buildingStartDate" date NOT NULL,
    "buildingEndDate" date NOT NULL,
    "metaId" integer UNIQUE NOT NULL,
    CHECK("buildingEndDate" > "buildingStartDate")
);
-- rollback DROP TABLE buildings;
