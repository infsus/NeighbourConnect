-- liquibase formatted sql

-- changeset C_000:07-create-table-persons
CREATE TABLE IF NOT EXISTS "persons" (
    "id" integer PRIMARY KEY,
    "firstName" varchar(50) NOT NULL,
    "lastName" varchar(50) NOT NULL,
    "pid" varchar(11) UNIQUE,
    "dateOfBirth" date,
    "placeOfBirthId" integer,
    "placeOfResidenceId" integer,
    "metaId" integer UNIQUE NOT NULL
);
-- rollback DROP TABLE persons;
