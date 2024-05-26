-- liquibase formatted sql

-- changeset C_001:00-alter-role-name-column-varchar-length
ALTER TABLE "roles" ALTER COLUMN "name" TYPE VARCHAR(50);
-- rollback ALTER TABLE "roles" ALTER COLUMN "name" TYPE VARCHAR(10);
