-- liquibase formatted sql

-- changeset C_000:29-alter-tables-add-foreign-key-constraint
ALTER TABLE "places" ADD FOREIGN KEY ("countryId") REFERENCES "countries" ("id");
ALTER TABLE "streets" ADD FOREIGN KEY ("placeId") REFERENCES "places" ("id");
ALTER TABLE "building_entrances" ADD FOREIGN KEY ("streetId") REFERENCES "streets" ("id");
ALTER TABLE "building_entrances" ADD FOREIGN KEY ("buildingId") REFERENCES "buildings" ("id");
ALTER TABLE "contracts" ADD FOREIGN KEY ("buildingId") REFERENCES "buildings" ("id");
ALTER TABLE "contracts" ADD FOREIGN KEY ("companyId") REFERENCES "companies" ("id");
ALTER TABLE "companies" ADD FOREIGN KEY ("streetId") REFERENCES "streets" ("id");
ALTER TABLE "persons" ADD FOREIGN KEY ("placeOfBirthId") REFERENCES "places" ("id");
ALTER TABLE "persons" ADD FOREIGN KEY ("placeOfResidenceId") REFERENCES "places" ("id");
ALTER TABLE "managers" ADD FOREIGN KEY ("id") REFERENCES "users" ("id");
ALTER TABLE "residents" ADD FOREIGN KEY ("id") REFERENCES "users" ("id");
ALTER TABLE "companies" ADD FOREIGN KEY ("ownerId") REFERENCES "managers" ("id");
ALTER TABLE "building_entrances" ADD FOREIGN KEY ("tenantRepresentativeId") REFERENCES "residents" ("id");
ALTER TABLE "users" ADD FOREIGN KEY ("roleId") REFERENCES "roles" ("id");
ALTER TABLE "users" ADD FOREIGN KEY ("id") REFERENCES "persons" ("id");
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