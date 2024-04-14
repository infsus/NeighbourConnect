/* Postavljanje admina sustava - moramo otpustiti neka ograničenja jer smo inače lockani - kokoš ili jaje :) */
alter table "Korisnik" alter column "metaId" drop not null;
insert into "Korisnik" (id, ime, prezime, oib, "datumRodenja", "mjestoRodenjaId", "mjestoPrebivalištaId", email, lozinka, "metaId")
values (1, 'Admin', 'Admin', '00000000000', now(), null, null, 'admin@gmail.com', 'admin123', null);
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (1, 1, 1, now(), now());
update "Korisnik" set "metaId" = 1 where id = 1;
alter table "Korisnik" alter column "metaId" set not null;

/* Dodavanje drugih korisnika */
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (2, 1, 1, now(), now());
insert into "Korisnik" (id, ime, prezime, oib, "datumRodenja", "mjestoRodenjaId", "mjestoPrebivalištaId", email, lozinka, "metaId")
values (2, 'Ime 1', 'Prezime 1', '00000000001', null, null, null, 'email1@gmail.com', 'lozinka1', 2);
insert into "Upravitelj" (id, "datumZaposlenja") VALUES (2, now());
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (3, 1, 1, now(), now());
insert into "Korisnik" (id, ime, prezime, oib, "datumRodenja", "mjestoRodenjaId", "mjestoPrebivalištaId", email, lozinka, "metaId")
values (3, 'Ime 2', 'Prezime 2', '00000000002', null, null, null, 'email2@gmail.com', 'lozinka2', 3);
insert into "Stanar" (id) values (3);
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (4, 1, 1, now(), now());
insert into "Korisnik" (id, ime, prezime, oib, "datumRodenja", "mjestoRodenjaId", "mjestoPrebivalištaId", email, lozinka, "metaId")
values (4, 'Ime 3', 'Prezime 3', '00000000003', null, null, null, 'email3@gmail.com', 'lozinka3', 4);
insert into "Stanar" (id, "pristajeBitiPredstavnik") values (4, false);

/* DRŽAVE */
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (5, 1, 1, now(), now());
insert into "Država" (id, ime, kratica, "metaId")
values (1, 'Hrvatska', 'HR', 5);
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (6, 1, 1, now(), now());
insert into "Država" (id, ime, kratica, "metaId")
values (2, 'Slovenija', 'SLO', 6);

/* MJESTA */
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (7, 1, 1, now(), now());
insert into "Mjesto" (id, "državaId", ime, "postanskiBroj", "metaId")
values (1, 1, 'Zagreb', '10000', 7);
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (8, 1, 1, now(), now());
insert into "Mjesto" (id, "državaId", ime, "postanskiBroj", "metaId")
values (2, 1, 'Rijeka', '51000', 8);

/* ULICE */
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (9, 1, 1, now(), now());
insert into "Ulica" (id, "mjestoId", ime, "metaId")
values (1, 1, 'Maksimirska ulica', 9);
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (10, 1, 1, now(), now());
insert into "Ulica" (id, "mjestoId", ime, "metaId")
values (2, 1, 'Ilica', 10);
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (11, 1, 1, now(), now());
insert into "Ulica" (id, "mjestoId", ime, "metaId")
values (3, 2, 'Korzo', 11);

/* KOMPANIJE */
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (12, 1, 1, now(), now());
insert into "Kompanija" (id, "vlasnikId", "ulicaId", ime, oib, "godinaOsnutka", "ulicaBroj", "metaId")
values (1, 2, 1, 'Kompanija 1', '00000000010', null, 3, 12);
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (13, 1, 1, now(), now());
insert into "Kompanija" (id, "vlasnikId", "ulicaId", ime, oib, "godinaOsnutka", "ulicaBroj", "metaId")
values (2, 2, 3, 'Kompanija 2', '00000000011', null, 37, 13);

/* ZGRADE */
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (14, 1, 1, now(), now());
insert into "Zgrada" (id, "datumPočetkaGradnje", "datumIzgradnje", "metaId")
values (1, now(), now(), 14);
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (15, 1, 1, now(), now());
insert into "Zgrada" (id, "datumPočetkaGradnje", "datumIzgradnje", "metaId")
values (2, now(), now(), 15);

/* UGOVORI */
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (16, 1, 1, now(), now());
insert into "Ugovor" (id, "zgradaId", "kompanijaId", "datumSklapanja", "datumIsteka", "metaId")
values (1, 1, 1, now(), now(), 16);
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (17, 1, 1, now(), now());
insert into "Ugovor" (id, "zgradaId", "kompanijaId", "datumSklapanja", "datumIsteka", "metaId")
values (2, 2, 1, now(), now(), 17);
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (18, 1, 1, now(), now());
insert into "Ugovor" (id, "zgradaId", "kompanijaId", "datumSklapanja", "datumIsteka", "metaId")
values (3, 1, 1, now(), now(), 18);

/* NALOG PLAĆANJA */
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (19, 1, 1, now(), now());
insert into "NalogPlacanja" (id, "zgradaId", "datumIzdavanja", "rokUplate", "zaMjesec", iznos, opis, "metaId")
values (1, 1, now(), now(), now(), 30.0, 'Nalog plaćanja 1', 19);

/* ULAZI */
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (20, 1, 1, now(), now());
insert into "Ulaz" (id, "zgradaId", "predstavnikId", "ulicaId", "ulicaBroj", "metaId")
values (1, 1, 3, 1, 19, 20);
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (21, 1, 1, now(), now());
insert into "Ulaz" (id, "zgradaId", "predstavnikId", "ulicaId", "ulicaBroj", "metaId")
values (2, 1, 3, 1, 21, 21);

/* KUĆANSTVA */
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (22, 1, 1, now(), now());
insert into "Kućanstvo" (id, "ulazId", "stanarId", napomena, "metaId")
values (1, 1, 3, 'Napomena 1', 22);
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (23, 1, 1, now(), now());
insert into "Kućanstvo" (id, "ulazId", "stanarId", napomena, "metaId")
values (2, 1, 4, null, 23);

/* PRIČUVE */
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (24, 1, 1, now(), now());
insert into "Pričuva" (id, "nalogPlacanjaId", "kucanstvoId", "datumPlacanja", "metaId")
values (1, 1, 1, null, 24);
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (25, 1, 1, now(), now());
insert into "Pričuva" (id, "nalogPlacanjaId", "kucanstvoId", "datumPlacanja", "metaId")
values (2, 1, 2, null, 25);

/* VRSTE OBAVIJESTI */
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (26, 1, 1, now(), now());
insert into "VrstaObavijest" (id, vrsta, prioritet, "metaId")
values (1, 'Vrsta obavijest 1', 0, 26);
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (27, 1, 1, now(), now());
insert into "VrstaObavijest" (id, vrsta, prioritet, "metaId")
values (2, 'Vrsta obavijest 2', 10, 27);
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (28, 1, 1, now(), now());
insert into "VrstaObavijest" (id, vrsta, prioritet, "metaId")
values (3, 'Vrsta obavijest 3', 20, 28);

/* OBAVIJESTI */
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (29, 1, 1, now(), now());
insert into "Obavijest" (id, "pošiljateljId", "vrstaObavijestId", naslov, poruka, "metaId")
values (1, 1, 2, 'Naslov 1', 'Poruka 1', 29);
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (30, 1, 1, now(), now());
insert into "Obavijest" (id, "pošiljateljId", "vrstaObavijestId", naslov, poruka, "metaId")
values (2, 2, 1, 'Naslov 2', 'Poruka 2', 30);

/* POSLANE OBAVIJESTI */
insert into "PoslanaObavijest" ("kućanstvoId", "obavijestId")
values (1, 2);

/* OGLASI */
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (31, 1, 1, now(), now());
insert into "Oglas" (id, naslov, opis, cijena, "metaId")
values (1, 'Oglas 1', 'Opis 1', 250000, 31);

/* ZAINTERESIRANI ZA OGLAS */
insert into "ZainteresiraniZaOglas" ("korisnikId", "oglasId", poruka)
values (2, 1, 'Poruka 1');

/* VRSTE PROSTORIJA */
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (32, 1, 1, now(), now());
insert into "VrstaProstorija" (id, vrsta, "metaId")
values (1, 'Vrsta prostorija 1', 32);
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (33, 1, 1, now(), now());
insert into "VrstaProstorija" (id, vrsta, "metaId")
values (2, 'Vrsta prostorija 2', 33);

/* PROSTORIJE */
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (34, 1, 1, now(), now());
insert into "Prostorija" (id, "kućanstvoId", "vrstaProstorija", kvadratura, "metaId")
values (1, 1, 1, 32, 34);
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (35, 1, 1, now(), now());
insert into "Prostorija" (id, "kućanstvoId", "vrstaProstorija", kvadratura, "metaId")
values (2, 1, 2, 10, 35);
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (36, 1, 1, now(), now());
insert into "Prostorija" (id, "kućanstvoId", "vrstaProstorija", kvadratura, "metaId")
values (3, 1, 2, 6, 36);
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (37, 1, 1, now(), now());
insert into "Prostorija" (id, "kućanstvoId", "vrstaProstorija", kvadratura, "metaId")
values (4, 2, 1, 25, 37);
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (38, 1, 1, now(), now());
insert into "Prostorija" (id, "kućanstvoId", "vrstaProstorija", kvadratura, "metaId")
values (5, 2, 2, 7, 38);

/* PRITUŽBE */
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (39, 1, 1, now(), now());
insert into "Pritužba" (id, "kućanstvoId", naslov, opis, "metaId")
values (1, 1, 'Naslov 1', 'Opis 1', 39);

/* PRIJAVLJENA KUĆANSTVA */
insert into "PrijavljenaKućanstva" (kućanstvoid, "pritužbaId", napomena)
values (2, 1, null);

/* VRSTE KONTAKATA */
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (40, 1, 1, now(), now());
insert into "VrstaKontakt" (id, "nazivVrste", "metaId")
values (1, 'Vrsta kontakt 1', 40);
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (41, 1, 1, now(), now());
insert into "VrstaKontakt" (id, "nazivVrste", "metaId")
values (2, 'Vrsta kontakt 2', 41);

/* KONTAKTI */
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (42, 1, 1, now(), now());
insert into "Kontakt" (id, "korisnikId", "vrstaKontaktId", kontakt, "metaId")
values (1, 2, 1, '+385014485395', 42);
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (43, 1, 1, now(), now());
insert into "Kontakt" (id, "korisnikId", "vrstaKontaktId", kontakt, "metaId")
values (2, 3, 2, '+38598395332', 43);
insert into "Meta" (id, "stvorioId", "uredioId", "stvorenoU", "uređenoU")
values (44, 1, 1, now(), now());
insert into "Kontakt" (id, "korisnikId", "vrstaKontaktId", kontakt, "metaId")
values (3, 3, 2, '+385919384391', 44);