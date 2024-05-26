-- liquibase formatted sql

-- changeset C_000:17-create-table-households
CREATE TABLE IF NOT EXISTS "households" (
    "id" serial PRIMARY KEY,
    "buildingEntranceId" integer NOT NULL,
    "residentId" integer,
    "comment" varchar(200),
    "metaId" integer UNIQUE NOT NULL
);
-- rollback DROP TABLE households;
