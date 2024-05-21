-- liquibase formatted sql

-- changeset C_000:22-create-table-notifications
CREATE TABLE IF NOT EXISTS "notifications" (
    "id" integer PRIMARY KEY,
    "senderId" integer NOT NULL,
    "title" varchar(50) NOT NULL,
    "message" varchar(200) NOT NULL,
    "metaId" integer UNIQUE NOT NULL
);
-- rollback DROP TABLE notifications;
