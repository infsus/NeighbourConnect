-- liquibase formatted sql

-- changeset C_000:19-create-table-reported-households
CREATE TABLE IF NOT EXISTS "reported_households" (
    "householdId" integer,
    "complaintId" integer,
    "comment" varchar(200),
    PRIMARY KEY ("householdId", "complaintId")
);
-- rollback DROP TABLE reported_households;
