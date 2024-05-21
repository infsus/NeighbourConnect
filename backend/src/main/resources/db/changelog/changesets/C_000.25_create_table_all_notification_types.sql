-- liquibase formatted sql

-- changeset C_000:25-create-table-all-notification-types
CREATE TABLE IF NOT EXISTS "all_notification_types" (
    "notificationId" integer,
    "notificationTypeId" integer,
    PRIMARY KEY ("notificationId", "notificationTypeId")
);
-- rollback DROP TABLE all_notification_types;
