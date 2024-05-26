-- liquibase formatted sql

-- changeset C_000:12-create-table-auth-codes
CREATE TABLE IF NOT EXISTS "auth_codes" (
    "id" serial PRIMARY KEY,
    "userId" integer NOT NULL,
    "code" varchar(6) NOT NULL,
    "expiresAt" date NOT NULL,
    "metaId" integer UNIQUE NOT NULL,
    UNIQUE ("userId", "code")
);
-- rollback DROP TABLE auth_codes;
