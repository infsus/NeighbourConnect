-- liquibase formatted sql

-- changeset C_002:01-alter-table-buildings-add-building-name
ALTER TABLE "buildings" ADD COLUMN "name" varchar(50) UNIQUE;
ALTER TABLE "buildings" ALTER COLUMN "name" SET DEFAULT '';
ALTER TABLE "buildings" ALTER COLUMN "name" SET NOT NULL;
-- rollback ALTER TABLE "buildings" DROP COLUMN "name";;
