-- liquibase formatted sql

-- changeset C_000:16-create-table-household-payments
CREATE TABLE IF NOT EXISTS "household_payments" (
    "id" serial PRIMARY KEY,
    "buildingInvoiceId" integer NOT NULL,
    "householdId" integer NOT NULL,
    "priceModifier" decimal NOT NULL DEFAULT 1,
    "paymentDate" timestamp,
    "metaId" integer UNIQUE NOT NULL,
    UNIQUE ("buildingInvoiceId", "householdId"),
    CHECK ("priceModifier" >= 0)
);
-- rollback DROP TABLE household_payments;
