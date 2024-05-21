-- liquibase formatted sql

-- changeset C_000:21-create-table-household-advert-interests
CREATE TABLE IF NOT EXISTS "household_advert_interests" (
    "userId" integer,
    "householdAdvertId" integer,
    "message" varchar(500) NOT NULL,
    PRIMARY KEY ("userId", "householdAdvertId")
);
-- rollback DROP TABLE household_advert_interests;
