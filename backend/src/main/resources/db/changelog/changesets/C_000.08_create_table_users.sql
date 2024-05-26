-- liquibase formatted sql

-- changeset C_000:08-create-table-users
CREATE TABLE IF NOT EXISTS "users" (
    "id" serial PRIMARY KEY,
    "roleId" integer NOT NULL,
    "email" varchar(50) UNIQUE NOT NULL,
    "password" varchar(200) NOT NULL,
    "enabled" bool NOT NULL DEFAULT false
);
-- rollback DROP TABLE users;
