-- liquibase formatted sql

-- changeset C_000:24-create-table-notification-types
CREATE TABLE IF NOT EXISTS "notification_types" (
    "id" serial PRIMARY KEY,
    "name" varchar(20) UNIQUE NOT NULL,
    "priority" integer UNIQUE NOT NULL,
    "metaId" integer UNIQUE NOT NULL
);
-- rollback DROP TABLE notification_types;
