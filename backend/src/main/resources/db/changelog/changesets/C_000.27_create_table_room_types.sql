-- liquibase formatted sql

-- changeset C_000:27-create-table-room-types
CREATE TABLE IF NOT EXISTS "room_types" (
    "id" integer PRIMARY KEY,
    "name" varchar(50) UNIQUE NOT NULL,
    "metaId" integer UNIQUE NOT NULL
);
-- rollback DROP TABLE room_types;
