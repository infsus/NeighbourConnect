-- liquibase formatted sql

-- changeset C_000:20-create-table-household-adverts
CREATE TABLE IF NOT EXISTS "household_adverts" (
    "id" integer PRIMARY KEY,
    "title" varchar(50) NOT NULL,
    "description" varchar(200) NOT NULL,
    "price" decimal NOT NULL,
    "metaId" integer UNIQUE NOT NULL,
    CHECK ("price" > 0)
);
-- rollback DROP TABLE household_adverts;
