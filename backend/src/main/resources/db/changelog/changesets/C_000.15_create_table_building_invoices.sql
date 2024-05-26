-- liquibase formatted sql

-- changeset C_000:15-create-table-building-invoices
CREATE TABLE IF NOT EXISTS "building_invoices" (
    "id" serial PRIMARY KEY,
    "buildingId" integer NOT NULL,
    "issueDate" date NOT NULL DEFAULT now(),
    "dueDate" date NOT NULL,
    "month" date NOT NULL,
    "price" decimal NOT NULL,
    "description" varchar(200),
    "metaId" integer UNIQUE NOT NULL,
    CHECK ("price" > 0)
);
-- rollback DROP TABLE building_invoices;
