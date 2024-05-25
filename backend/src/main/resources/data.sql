BEGIN TRANSACTION;

/* System admin setup */
alter table persons alter column "metaId" drop not null;
alter table roles alter column "metaId" drop not null;

insert into roles (id, name, "metaId")
values (1, 'Administrator', null);

insert into persons (id, "firstName", "lastName", pid, "dateOfBirth", "placeOfBirthId", "placeOfResidenceId", "metaId")
values (1, 'Admin', 'Admin', '00000000000', now(), null, null, null);

insert into users (id, "roleId", email, password, enabled)
values (1, 1, 'admin@gmail.com', 'admin123', true);

insert into meta (id, "createdById", "modifiedById")
values (1, 1, 1);
insert into meta (id, "createdById", "modifiedById")
values (2, 1, 1);

update persons set "metaId" = 1 where id = 1;
update roles set "metaId" = 2 where id = 1;

alter table persons alter column "metaId" set not null;
alter table roles alter column "metaId" set not null;

/* User roles */
insert into meta (id, "createdById", "modifiedById")
values (3, 1, 1);
insert into roles (id, name, "metaId")
values (2, 'BuildingManager', 3);

insert into meta (id, "createdById", "modifiedById")
values (4, 1, 1);
insert into roles (id, name, "metaId")
values (3, 'TenantRepresentative', 4);

insert into meta (id, "createdById", "modifiedById")
values (5, 1, 1);
insert into roles (id, name, "metaId")
values (4, 'Resident', 5);

insert into meta (id, "createdById", "modifiedById")
values (6, 1, 1);
insert into roles (id, name, "metaId")
values (5, 'Guest', 6);

/* Users */
insert into meta (id, "createdById", "modifiedById")
values (7, 1, 1);
insert into persons (id, "firstName", "lastName", pid, "dateOfBirth", "placeOfBirthId", "placeOfResidenceId", "metaId")
values (2, 'Ime 1', 'Prezime 1', '00000000001', null, null, null, 7);
insert into users (id, "roleId", email, password, enabled)
values (2, 2, 'email1@gmail.com', 'lozinka1', true);
insert into managers (id, "dateOfEmployment")
values (2, now());

insert into meta (id, "createdById", "modifiedById")
values (8, 1, 1);
insert into persons (id, "firstName", "lastName", pid, "dateOfBirth", "placeOfBirthId", "placeOfResidenceId", "metaId")
values (3, 'Ime 2', 'Prezime 2', '00000000002', null, null, null, 8);
insert into users (id, "roleId", email, password, enabled)
values (3, 3, 'email2@gmail.com', 'lozinka2', true);
insert into residents (id, "acceptsBeRepresentative")
values (3, true);

insert into meta (id, "createdById", "modifiedById")
values (9, 1, 1);
insert into persons (id, "firstName", "lastName", pid, "dateOfBirth", "placeOfBirthId", "placeOfResidenceId", "metaId")
values (4, 'Ime 3', 'Prezime 3', '00000000003', null, null, null, 9);
insert into users (id, "roleId", email, password, enabled)
values (4, 3, 'email3@gmail.com', 'lozinka3', true);
insert into residents (id, "acceptsBeRepresentative")
values (4, false);

/* Countries */
insert into meta (id, "createdById", "modifiedById")
values (10, 1, 1);
insert into countries (id, name, code, "metaId")
values (1, 'Hrvatska', 'HR', 10);
insert into meta (id, "createdById", "modifiedById")
values (11, 1, 1);
insert into countries (id, name, code, "metaId")
values (2, 'Slovenija', 'SLO', 11);

/* Places */
insert into meta (id, "createdById", "modifiedById")
values (12, 1, 1);
insert into places (id, "countryId", name, "postalCode", "metaId")
values (1, 1, 'Zagreb', '10000', 12);
insert into meta (id, "createdById", "modifiedById")
values (13, 1, 1);
insert into places (id, "countryId", name, "postalCode", "metaId")
values (2, 1, 'Rijeka', '51000', 13);

/* Streets */
insert into meta (id, "createdById", "modifiedById")
values (14, 1, 1);
insert into streets (id, "placeId", name, "metaId")
values (1, 1, 'Maksimirska ulica', 14);
insert into meta (id, "createdById", "modifiedById")
values (15, 1, 1);
insert into streets (id, "placeId", name, "metaId")
values (2, 1, 'Ilica', 15);
insert into meta (id, "createdById", "modifiedById")
values (16, 1, 1);
insert into streets (id, "placeId", name, "metaId")
values (3, 2, 'Korzo', 16);

/* Companies */
insert into meta (id, "createdById", "modifiedById")
values (17, 1, 1);
insert into companies (id, "ownerId", "streetId", name, pid, "foundationDate", "streetNumber", "metaId")
values (1, 2, 1, 'Kompanija 1', '00000000010', null, 3, 17);
insert into meta (id, "createdById", "modifiedById")
values (18, 1, 1);
insert into companies (id, "ownerId", "streetId", name, pid, "foundationDate", "streetNumber", "metaId")
values (2, 2, 3, 'Kompanija 2', '00000000011', null, 37, 18);

/* Buildings */
insert into meta (id, "createdById", "modifiedById")
values (19, 1, 1);
insert into buildings (id, "buildingStartDate", "buildingEndDate", "metaId")
values (1, now(), now() + '1 year'::interval, 19);
insert into meta (id, "createdById", "modifiedById")
values (20, 1, 1);
insert into buildings (id, "buildingStartDate", "buildingEndDate", "metaId")
values (2, now(), now() + '2 year'::interval, 20);

/* Contracts */
insert into meta (id, "createdById", "modifiedById")
values (21, 1, 1);
insert into contracts (id, "buildingId", "companyId", "contractingDate", "validToDate", "metaId")
values (1, 1, 1, now(), now() + '1 year'::interval, 21);
insert into meta (id, "createdById", "modifiedById")
values (22, 1, 1);
insert into contracts (id, "buildingId", "companyId", "contractingDate", "validToDate", "metaId")
values (2, 2, 1, now(), now() + '3 year'::interval, 22);
insert into meta (id, "createdById", "modifiedById")
values (23, 1, 1);
insert into contracts (id, "buildingId", "companyId", "contractingDate", "validToDate", "metaId")
values (3, 1, 1, now() + '1 year'::interval, now() + '2 year'::interval, 23);

/* Building invoices */
insert into meta (id, "createdById", "modifiedById")
values (24, 1, 1);
insert into building_invoices (id, "buildingId", "issueDate", "dueDate", month, price, description, "metaId")
values (1, 1, now(), now(), now(), 30.0, 'Nalog plaćanja 1', 24);

/* Building entrances */
insert into meta (id, "createdById", "modifiedById")
values (25, 1, 1);
insert into building_entrances (id, "buildingId", "tenantRepresentativeId", "streetId", "streetNumber", "metaId")
values (1, 1, 3, 1, 19, 25);
insert into meta (id, "createdById", "modifiedById")
values (26, 1, 1);
insert into building_entrances (id, "buildingId", "tenantRepresentativeId", "streetId", "streetNumber", "metaId")
values (2, 1, 3, 1, 21, 26);

/* Households */
insert into meta (id, "createdById", "modifiedById")
values (27, 1, 1);
insert into households (id, "buildingEntranceId", "residentId", comment, "metaId")
values (1, 1, 3, 'Napomena 1', 27);
insert into meta (id, "createdById", "modifiedById")
values (28, 1, 1);
insert into households (id, "buildingEntranceId", "residentId", comment, "metaId")
values (2, 1, 4, null, 28);

/* Household payments */
insert into meta (id, "createdById", "modifiedById")
values (29, 1, 1);
insert into household_payments (id, "buildingInvoiceId", "householdId", "priceModifier", "paymentDate", "metaId")
values (1, 1, 1, 1.0, null, 29);
insert into meta (id, "createdById", "modifiedById")
values (30, 1, 1);
insert into household_payments (id, "buildingInvoiceId", "householdId", "priceModifier", "paymentDate", "metaId")
values (2, 1, 2, 1.0, null, 30);

/* Notification types */
insert into meta (id, "createdById", "modifiedById")
values (31, 1, 1);
insert into notification_types (id, name, priority, "metaId")
values (1, 'Vrsta obavijest 1', 0, 31);
insert into meta (id, "createdById", "modifiedById")
values (32, 1, 1);
insert into notification_types (id, name, priority, "metaId")
values (2, 'Vrsta obavijest 2', 10, 32);
insert into meta (id, "createdById", "modifiedById")
values (33, 1, 1);
insert into notification_types (id, name, priority, "metaId")
values (3, 'Vrsta obavijest 3', 20, 33);

/* Notifications */
insert into meta (id, "createdById", "modifiedById")
values (34, 1, 1);
insert into notifications (id, "senderId", title, message, "metaId")
values (1, 1, 'Naslov 1', 'Poruka 1', 34);
insert into meta (id, "createdById", "modifiedById")
values (35, 1, 1);
insert into notifications (id, "senderId", title, message, "metaId")
values (2, 2, 'Naslov 2', 'Poruka 2', 35);

/* All notification types */
insert into all_notification_types ("notificationId", "notificationTypeId")
values (1, 2);
insert into all_notification_types ("notificationId", "notificationTypeId")
values (2, 1);

/* Sent notifications */
insert into sent_notifications ("householdId", "notificationId")
values (1, 2);

/* Household adverts */
insert into meta (id, "createdById", "modifiedById")
values (36, 1, 1);
insert into household_adverts
values (1, 'Oglas 1', 'Opis 1', 250000, 36);

/* Household advert interests */
insert into household_advert_interests ("userId", "householdAdvertId", message)
values (2, 1, 'Poruka 1');

/* Room types */
insert into meta (id, "createdById", "modifiedById")
values (37, 1, 1);
insert into room_types (id, name, "metaId")
values (1, 'Vrsta prostorija 1', 37);
insert into meta (id, "createdById", "modifiedById")
values (38, 1, 1);
insert into room_types (id, name, "metaId")
values (2, 'Vrsta prostorija 2', 38);

/* Rooms */
insert into meta (id, "createdById", "modifiedById")
values (39, 1, 1);
insert into rooms (id, "householdId", "roomTypeId", quadrature, "metaId")
values (1, 1, 1, 32, 39);
insert into meta (id, "createdById", "modifiedById")
values (40, 1, 1);
insert into rooms (id, "householdId", "roomTypeId", quadrature, "metaId")
values (2, 1, 2, 10, 40);
insert into meta (id, "createdById", "modifiedById")
values (41, 1, 1);
insert into rooms (id, "householdId", "roomTypeId", quadrature, "metaId")
values (3, 1, 2, 6, 41);
insert into meta (id, "createdById", "modifiedById")
values (42, 1, 1);
insert into rooms (id, "householdId", "roomTypeId", quadrature, "metaId")
values (4, 2, 1, 25, 42);
insert into meta (id, "createdById", "modifiedById")
values (43, 1, 1);
insert into rooms (id, "householdId", "roomTypeId", quadrature, "metaId")
values (5, 2, 2, 7, 43);

/* Complaints */
insert into meta (id, "createdById", "modifiedById")
values (44, 1, 1);
insert into complaints (id, "householdId", title, message, "metaId")
values (1, 1, 'Naslov 1', 'Opis 1', 44);

/* Reported households */
insert into reported_households ("householdId", "complaintId", comment)
values (2, 1, null);

/* Contact types */
insert into meta (id, "createdById", "modifiedById")
values (45, 1, 1);
insert into contact_types (id, name, "metaId")
values (1, 'Vrsta kontakt 1', 45);
insert into meta (id, "createdById", "modifiedById")
values (46, 1, 1);
insert into contact_types (id, name, "metaId")
values (2, 'Vrsta kontakt 2', 46);

/* Contacts */
insert into meta (id, "createdById", "modifiedById")
values (47, 1, 1);
insert into contacts (id, "personId", "contactTypeId", contact, "metaId")
values (1, 2, 1, '+385014485395', 47);
insert into meta (id, "createdById", "modifiedById")
values (48, 1, 1);
insert into contacts (id, "personId", "contactTypeId", contact, "metaId")
values (2, 3, 2, '+38598395332', 48);
insert into meta (id, "createdById", "modifiedById")
values (49, 1, 1);
insert into contacts (id, "personId", "contactTypeId", contact, "metaId")
values (3, 3, 2, '+385919384391', 49);

COMMIT;
