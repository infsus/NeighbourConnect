CREATE TABLE IF NOT EXISTS "countries" (
                             "id" integer PRIMARY KEY,
                             "name" varchar(50) UNIQUE NOT NULL,
                             "code" varchar(3) UNIQUE NOT NULL,
                             "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "places" (
                          "id" integer PRIMARY KEY,
                          "countryId" integer NOT NULL,
                          "name" varchar(50) UNIQUE NOT NULL,
                          "postalCode" integer UNIQUE NOT NULL,
                          "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "streets" (
                           "id" integer PRIMARY KEY,
                           "placeId" integer NOT NULL,
                           "name" varchar(50) UNIQUE NOT NULL,
                           "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "building_entrances" (
                                      "id" integer PRIMARY KEY,
                                      "buildingId" integer NOT NULL,
                                      "tenantRepresentativeId" integer,
                                      "streetId" integer NOT NULL,
                                      "streetNumber" integer NOT NULL,
                                      "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "buildings" (
                             "id" integer PRIMARY KEY,
                             "buildingStartDate" date NOT NULL,
                             "buildingEndDate" date NOT NULL,
                             "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "contracts" (
                             "id" integer PRIMARY KEY,
                             "buildingId" integer NOT NULL,
                             "companyId" integer NOT NULL,
                             "contractingDate" date NOT NULL,
                             "validToDate" date NOT NULL,
                             "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "companies" (
                             "id" integer PRIMARY KEY,
                             "ownerId" integer NOT NULL,
                             "streetId" integer NOT NULL,
                             "name" varchar(50) NOT NULL,
                             "pid" varchar(11) UNIQUE NOT NULL,
                             "foundationDate" date,
                             "streetNumber" integer NOT NULL,
                             "metaId" integer UNIQUE NOT NULL
);

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

CREATE TABLE IF NOT EXISTS "users" (
                         "id" integer PRIMARY KEY,
                         "roleId" integer NOT NULL,
                         "email" varchar(50) UNIQUE NOT NULL,
                         "password" varchar(200) NOT NULL,
                         "enabled" bool NOT NULL DEFAULT false
);

CREATE TABLE IF NOT EXISTS "managers" (
                            "id" integer PRIMARY KEY,
                            "dateOfEmployment" date
);

CREATE TABLE IF NOT EXISTS "residents" (
                             "id" integer PRIMARY KEY,
                             "acceptsBeRepresentative" bool NOT NULL DEFAULT true
);

CREATE TABLE IF NOT EXISTS "roles" (
                         "id" integer PRIMARY KEY,
                         "name" varchar(10) UNIQUE NOT NULL,
                         "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "auth_codes" (
                              "id" integer PRIMARY KEY,
                              "userId" integer NOT NULL,
                              "code" varchar(6) NOT NULL,
                              "expiresAt" date NOT NULL,
                              "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "contacts" (
                            "id" integer PRIMARY KEY,
                            "personId" integer NOT NULL,
                            "contactTypeId" integer NOT NULL,
                            "contact" varchar(50) NOT NULL,
                            "isPrimary" bool NOT NULL DEFAULT true,
                            "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "contact_types" (
                                 "id" integer PRIMARY KEY,
                                 "name" varchar(50) UNIQUE NOT NULL,
                                 "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "building_invoices" (
                                     "id" integer PRIMARY KEY,
                                     "buildingId" integer NOT NULL,
                                     "issueDate" date,
                                     "dueDate" date NOT NULL,
                                     "month" date NOT NULL,
                                     "price" decimal NOT NULL,
                                     "description" varchar(200),
                                     "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "household_payments" (
                                      "id" integer PRIMARY KEY,
                                      "buildingInvoiceId" integer NOT NULL,
                                      "householdId" integer NOT NULL,
                                      "priceModifier" decimal NOT NULL DEFAULT 1,
                                      "paymentDate" timestamp,
                                      "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "households" (
                              "id" integer PRIMARY KEY,
                              "buildingEntranceId" integer NOT NULL,
                              "residentId" integer,
                              "comment" varchar(200),
                              "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "complaints" (
                              "id" integer PRIMARY KEY,
                              "householdId" integer NOT NULL,
                              "title" varchar(50) NOT NULL,
                              "message" varchar(200) NOT NULL,
                              "isPrivate" bool NOT NULL DEFAULT true,
                              "notifyRepresentative" bool NOT NULL DEFAULT false,
                              "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "reported_households" (
                                       "householdId" integer,
                                       "complaintId" integer,
                                       "comment" varchar(200),
                                       PRIMARY KEY ("householdId", "complaintId")
);

CREATE TABLE IF NOT EXISTS "household_adverts" (
                                     "id" integer PRIMARY KEY,
                                     "title" varchar(50) NOT NULL,
                                     "description" varchar(200) NOT NULL,
                                     "price" decimal NOT NULL,
                                     "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "household_advert_interests" (
                                              "userId" integer,
                                              "householdAdvertId" integer,
                                              "message" varchar(500) NOT NULL,
                                              PRIMARY KEY ("userId", "householdAdvertId")
);

CREATE TABLE IF NOT EXISTS "notifications" (
                                 "id" integer PRIMARY KEY,
                                 "senderId" integer NOT NULL,
                                 "notificationTypeId" integer NOT NULL,
                                 "title" varchar(50) NOT NULL,
                                 "message" varchar(200) NOT NULL,
                                 "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "sent_notifications" (
                                      "householdId" integer,
                                      "notificationId" integer,
                                      PRIMARY KEY ("householdId", "notificationId")
);

CREATE TABLE IF NOT EXISTS "notification_types" (
                                      "id" integer PRIMARY KEY,
                                      "name" varchar(20) UNIQUE NOT NULL,
                                      "priority" integer UNIQUE NOT NULL,
                                      "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "all_notification_types" (
                                          "notificationId" integer,
                                          "notificationTypeId" integer,
                                          PRIMARY KEY ("notificationId", "notificationTypeId")
);

CREATE TABLE IF NOT EXISTS "rooms" (
                         "id" integer PRIMARY KEY,
                         "householdId" integer NOT NULL,
                         "roomTypeId" integer NOT NULL,
                         "quadrature" decimal NOT NULL,
                         "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "room_types" (
                              "id" integer PRIMARY KEY,
                              "name" varchar(50) UNIQUE NOT NULL,
                              "metaId" integer NOT NULL
);

CREATE TABLE IF NOT EXISTS "meta" (
                        "id" integer PRIMARY KEY,
                        "createdById" integer NOT NULL,
                        "modifiedById" integer NOT NULL,
                        "createdAt" timestamp NOT NULL,
                        "modifiedAt" timestamp NOT NULL,
                        "isDeleted" bool NOT NULL DEFAULT false
);

COMMENT ON COLUMN "auth_codes"."code" IS 'Unique with userId';

ALTER TABLE "places" ADD FOREIGN KEY ("countryId") REFERENCES "countries" ("id");

ALTER TABLE "streets" ADD FOREIGN KEY ("placeId") REFERENCES "places" ("id");

ALTER TABLE "building_entrances" ADD FOREIGN KEY ("streetId") REFERENCES "streets" ("id");

ALTER TABLE "building_entrances" ADD FOREIGN KEY ("buildingId") REFERENCES "buildings" ("id");

ALTER TABLE "contracts" ADD FOREIGN KEY ("buildingId") REFERENCES "buildings" ("id");

ALTER TABLE "contracts" ADD FOREIGN KEY ("companyId") REFERENCES "companies" ("id");

ALTER TABLE "companies" ADD FOREIGN KEY ("streetId") REFERENCES "streets" ("id");

ALTER TABLE "persons" ADD FOREIGN KEY ("placeOfBirthId") REFERENCES "places" ("id");

ALTER TABLE "persons" ADD FOREIGN KEY ("placeOfResidenceId") REFERENCES "places" ("id");

ALTER TABLE "persons" ADD FOREIGN KEY ("id") REFERENCES "users" ("id");

ALTER TABLE "managers" ADD FOREIGN KEY ("id") REFERENCES "users" ("id");

ALTER TABLE "residents" ADD FOREIGN KEY ("id") REFERENCES "users" ("id");

ALTER TABLE "companies" ADD FOREIGN KEY ("ownerId") REFERENCES "managers" ("id");

ALTER TABLE "building_entrances" ADD FOREIGN KEY ("tenantRepresentativeId") REFERENCES "residents" ("id");

ALTER TABLE "users" ADD FOREIGN KEY ("roleId") REFERENCES "roles" ("id");

ALTER TABLE "auth_codes" ADD FOREIGN KEY ("userId") REFERENCES "users" ("id");

ALTER TABLE "contacts" ADD FOREIGN KEY ("contactTypeId") REFERENCES "contact_types" ("id");

ALTER TABLE "contacts" ADD FOREIGN KEY ("personId") REFERENCES "persons" ("id");

ALTER TABLE "building_invoices" ADD FOREIGN KEY ("buildingId") REFERENCES "buildings" ("id");

ALTER TABLE "household_payments" ADD FOREIGN KEY ("buildingInvoiceId") REFERENCES "building_invoices" ("id");

ALTER TABLE "household_payments" ADD FOREIGN KEY ("householdId") REFERENCES "households" ("id");

ALTER TABLE "households" ADD FOREIGN KEY ("buildingEntranceId") REFERENCES "building_entrances" ("id");

ALTER TABLE "households" ADD FOREIGN KEY ("residentId") REFERENCES "residents" ("id");

ALTER TABLE "complaints" ADD FOREIGN KEY ("householdId") REFERENCES "households" ("id");

ALTER TABLE "reported_households" ADD FOREIGN KEY ("householdId") REFERENCES "households" ("id");

ALTER TABLE "reported_households" ADD FOREIGN KEY ("complaintId") REFERENCES "complaints" ("id");

ALTER TABLE "household_adverts" ADD FOREIGN KEY ("id") REFERENCES "households" ("id");

ALTER TABLE "household_advert_interests" ADD FOREIGN KEY ("householdAdvertId") REFERENCES "household_adverts" ("id");

ALTER TABLE "household_advert_interests" ADD FOREIGN KEY ("userId") REFERENCES "users" ("id");

ALTER TABLE "notifications" ADD FOREIGN KEY ("senderId") REFERENCES "households" ("id");

ALTER TABLE "sent_notifications" ADD FOREIGN KEY ("notificationId") REFERENCES "notifications" ("id");

ALTER TABLE "sent_notifications" ADD FOREIGN KEY ("householdId") REFERENCES "households" ("id");

ALTER TABLE "all_notification_types" ADD FOREIGN KEY ("notificationTypeId") REFERENCES "notification_types" ("id");

ALTER TABLE "all_notification_types" ADD FOREIGN KEY ("notificationId") REFERENCES "notifications" ("id");

ALTER TABLE "rooms" ADD FOREIGN KEY ("roomTypeId") REFERENCES "room_types" ("id");

ALTER TABLE "rooms" ADD FOREIGN KEY ("householdId") REFERENCES "households" ("id");

ALTER TABLE "countries" ADD FOREIGN KEY ("metaId") REFERENCES "meta" ("id");

ALTER TABLE "places" ADD FOREIGN KEY ("metaId") REFERENCES "meta" ("id");

ALTER TABLE "streets" ADD FOREIGN KEY ("metaId") REFERENCES "meta" ("id");

ALTER TABLE "building_entrances" ADD FOREIGN KEY ("metaId") REFERENCES "meta" ("id");

ALTER TABLE "buildings" ADD FOREIGN KEY ("metaId") REFERENCES "meta" ("id");

ALTER TABLE "contracts" ADD FOREIGN KEY ("metaId") REFERENCES "meta" ("id");

ALTER TABLE "companies" ADD FOREIGN KEY ("metaId") REFERENCES "meta" ("id");

ALTER TABLE "building_invoices" ADD FOREIGN KEY ("metaId") REFERENCES "meta" ("id");

ALTER TABLE "household_payments" ADD FOREIGN KEY ("metaId") REFERENCES "meta" ("id");

ALTER TABLE "households" ADD FOREIGN KEY ("metaId") REFERENCES "meta" ("id");

ALTER TABLE "contacts" ADD FOREIGN KEY ("metaId") REFERENCES "meta" ("id");

ALTER TABLE "contact_types" ADD FOREIGN KEY ("metaId") REFERENCES "meta" ("id");

ALTER TABLE "notifications" ADD FOREIGN KEY ("metaId") REFERENCES "meta" ("id");

ALTER TABLE "notification_types" ADD FOREIGN KEY ("metaId") REFERENCES "meta" ("id");

ALTER TABLE "rooms" ADD FOREIGN KEY ("metaId") REFERENCES "meta" ("id");

ALTER TABLE "room_types" ADD FOREIGN KEY ("metaId") REFERENCES "meta" ("id");

ALTER TABLE "complaints" ADD FOREIGN KEY ("metaId") REFERENCES "meta" ("id");

ALTER TABLE "persons" ADD FOREIGN KEY ("metaId") REFERENCES "meta" ("id");

ALTER TABLE "household_adverts" ADD FOREIGN KEY ("metaId") REFERENCES "meta" ("id");

ALTER TABLE "roles" ADD FOREIGN KEY ("metaId") REFERENCES "meta" ("id");

ALTER TABLE "auth_codes" ADD FOREIGN KEY ("metaId") REFERENCES "meta" ("id");

ALTER TABLE "meta" ADD FOREIGN KEY ("createdById") REFERENCES "users" ("id");

ALTER TABLE "meta" ADD FOREIGN KEY ("modifiedById") REFERENCES "users" ("id");