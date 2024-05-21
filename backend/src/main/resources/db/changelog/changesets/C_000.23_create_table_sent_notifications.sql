-- liquibase formatted sql

-- changeset C_000:23-create-table-sent-notifications
CREATE TABLE IF NOT EXISTS "sent_notifications" (
    "householdId" integer,
    "notificationId" integer,
    PRIMARY KEY ("householdId", "notificationId")
);
-- rollback DROP TABLE sent_notifications;
