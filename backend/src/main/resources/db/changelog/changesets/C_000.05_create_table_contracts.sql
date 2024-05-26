-- liquibase formatted sql

-- changeset C_000:05-create-table-contracts
CREATE TABLE IF NOT EXISTS "contracts" (
    "id" serial PRIMARY KEY,
    "buildingId" integer NOT NULL,
    "companyId" integer NOT NULL,
    "contractingDate" date NOT NULL,
    "validToDate" date NOT NULL,
    "metaId" integer UNIQUE NOT NULL,
    UNIQUE ("buildingId", "companyId", "contractingDate"),
    CHECK ("validToDate" > "contractingDate")
);
-- rollback DROP TABLE contracts;
