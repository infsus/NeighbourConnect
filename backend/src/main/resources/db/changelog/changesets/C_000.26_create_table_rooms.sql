-- liquibase formatted sql

-- changeset C_000:26-create-table-rooms
CREATE TABLE IF NOT EXISTS "rooms" (
    "id" serial PRIMARY KEY,
    "householdId" integer NOT NULL,
    "roomTypeId" integer NOT NULL,
    "quadrature" decimal NOT NULL,
    "metaId" integer UNIQUE NOT NULL
);
-- rollback DROP TABLE rooms;
