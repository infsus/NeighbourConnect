-- liquibase formatted sql

-- changeset C_000:09-create-table-managers
CREATE TABLE IF NOT EXISTS "managers" (
    "id" serial PRIMARY KEY,
    "dateOfEmployment" date
);
-- rollback DROP TABLE managers;
