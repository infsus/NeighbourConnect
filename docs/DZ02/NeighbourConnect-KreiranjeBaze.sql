CREATE TABLE IF NOT EXISTS "Država" (
                                        "id" integer PRIMARY KEY,
                                        "ime" varchar(50) UNIQUE NOT NULL,
                                        "kratica" varchar(3) UNIQUE NOT NULL,
                                        "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "Mjesto" (
                                        "id" integer PRIMARY KEY,
                                        "državaId" integer NOT NULL,
                                        "ime" varchar(50) UNIQUE NOT NULL,
                                        "postanskiBroj" integer UNIQUE NOT NULL,
                                        "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "Ulica" (
                                       "id" integer PRIMARY KEY,
                                       "mjestoId" integer NOT NULL,
                                       "ime" varchar(50) UNIQUE NOT NULL,
                                       "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "Ulaz" (
                                      "id" integer PRIMARY KEY,
                                      "zgradaId" integer NOT NULL,
                                      "predstavnikId" integer,
                                      "ulicaId" integer NOT NULL,
                                      "ulicaBroj" integer NOT NULL,
                                      "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "Zgrada" (
                                        "id" integer PRIMARY KEY,
                                        "datumPočetkaGradnje" date NOT NULL,
                                        "datumIzgradnje" date NOT NULL,
                                        "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "Ugovor" (
                                        "id" integer PRIMARY KEY,
                                        "zgradaId" integer NOT NULL,
                                        "kompanijaId" integer NOT NULL,
                                        "datumSklapanja" date NOT NULL,
                                        "datumIsteka" date NOT NULL,
                                        "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "Kompanija" (
                                           "id" integer PRIMARY KEY,
                                           "vlasnikId" integer NOT NULL,
                                           "ulicaId" integer NOT NULL,
                                           "ime" varchar(50) NOT NULL,
                                           "oib" varchar(11) UNIQUE NOT NULL,
                                           "godinaOsnutka" date,
                                           "ulicaBroj" integer NOT NULL,
                                           "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "Korisnik" (
                                          "id" integer PRIMARY KEY,
                                          "ime" varchar(50) NOT NULL,
                                          "prezime" varchar(50) NOT NULL,
                                          "oib" varchar(11) NOT NULL,
                                          "datumRodenja" date,
                                          "mjestoRodenjaId" integer,
                                          "mjestoPrebivalištaId" integer,
                                          "email" varchar(50) UNIQUE NOT NULL,
                                          "lozinka" varchar(200) NOT NULL,
                                          "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "Upravitelj" (
                                            "id" integer PRIMARY KEY,
                                            "datumZaposlenja" date
);

CREATE TABLE IF NOT EXISTS "Stanar" (
                                        "id" integer PRIMARY KEY,
                                        "pristajeBitiPredstavnik" bool NOT NULL DEFAULT true
);

CREATE TABLE IF NOT EXISTS "Kontakt" (
                                         "id" integer PRIMARY KEY,
                                         "korisnikId" integer NOT NULL,
                                         "vrstaKontaktId" integer NOT NULL,
                                         "kontakt" varchar(50) NOT NULL,
                                         "primarni" bool NOT NULL DEFAULT true,
                                         "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "VrstaKontakt" (
                                              "id" integer PRIMARY KEY,
                                              "nazivVrste" varchar(50) UNIQUE NOT NULL,
                                              "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "NalogPlacanja" (
                                               "id" integer PRIMARY KEY,
                                               "zgradaId" integer NOT NULL,
                                               "datumIzdavanja" date NOT NULL,
                                               "rokUplate" date NOT NULL,
                                               "zaMjesec" date NOT NULL,
                                               "iznos" decimal NOT NULL,
                                               "opis" varchar(200),
                                               "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "Pričuva" (
                                         "id" integer PRIMARY KEY,
                                         "nalogPlacanjaId" integer NOT NULL,
                                         "kucanstvoId" integer NOT NULL,
                                         "postotakIznos" decimal NOT NULL DEFAULT 1,
                                         "datumPlacanja" timestamp,
                                         "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "Kućanstvo" (
                                           "id" integer PRIMARY KEY,
                                           "ulazId" integer NOT NULL,
                                           "stanarId" integer,
                                           "napomena" varchar(200),
                                           "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "Pritužba" (
                                          "id" integer PRIMARY KEY,
                                          "kućanstvoId" integer NOT NULL,
                                          "naslov" varchar(50) NOT NULL,
                                          "opis" varchar(200) NOT NULL,
                                          "privatna" bool NOT NULL DEFAULT true,
                                          "obavijestiPredstavnika" bool NOT NULL DEFAULT false,
                                          "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "PrijavljenaKućanstva" (
                                                      "kućanstvoid" integer,
                                                      "pritužbaId" integer,
                                                      "napomena" varchar(200),
                                                      PRIMARY KEY ("kućanstvoid", "pritužbaId")
);

CREATE TABLE IF NOT EXISTS "Oglas" (
                                       "id" integer PRIMARY KEY,
                                       "naslov" varchar(50) NOT NULL,
                                       "opis" varchar(200) NOT NULL,
                                       "cijena" decimal NOT NULL,
                                       "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "ZainteresiraniZaOglas" (
                                                       "korisnikId" integer,
                                                       "oglasId" integer,
                                                       "poruka" varchar(500) NOT NULL,
                                                       PRIMARY KEY ("korisnikId", "oglasId")
);

CREATE TABLE IF NOT EXISTS "Obavijest" (
                                           "id" integer PRIMARY KEY,
                                           "pošiljateljId" integer NOT NULL,
                                           "vrstaObavijestId" integer NOT NULL,
                                           "naslov" varchar(50) NOT NULL,
                                           "poruka" varchar(200) NOT NULL,
                                           "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "PoslanaObavijest" (
                                                  "kućanstvoId" integer,
                                                  "obavijestId" integer,
                                                  PRIMARY KEY ("kućanstvoId", "obavijestId")
);

CREATE TABLE IF NOT EXISTS "VrstaObavijest" (
                                                "id" integer PRIMARY KEY,
                                                "vrsta" varchar(20) UNIQUE NOT NULL,
                                                "prioritet" integer UNIQUE NOT NULL,
                                                "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "Prostorija" (
                                            "id" integer PRIMARY KEY,
                                            "kućanstvoId" integer NOT NULL,
                                            "vrstaProstorija" integer NOT NULL,
                                            "kvadratura" decimal NOT NULL,
                                            "metaId" integer UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "VrstaProstorija" (
                                                 "id" integer PRIMARY KEY,
                                                 "vrsta" varchar(50) UNIQUE NOT NULL,
                                                 "metaId" integer NOT NULL
);

CREATE TABLE IF NOT EXISTS "Meta" (
                                      "id" integer PRIMARY KEY,
                                      "stvorioId" integer NOT NULL,
                                      "uredioId" integer NOT NULL,
                                      "stvorenoU" timestamp NOT NULL,
                                      "uređenoU" timestamp NOT NULL,
                                      "obrisano" bool NOT NULL DEFAULT false
);

ALTER TABLE "Mjesto" ADD FOREIGN KEY ("državaId") REFERENCES "Država" ("id");

ALTER TABLE "Ulica" ADD FOREIGN KEY ("mjestoId") REFERENCES "Mjesto" ("id");

ALTER TABLE "Ulaz" ADD FOREIGN KEY ("ulicaId") REFERENCES "Ulica" ("id");

ALTER TABLE "Ulaz" ADD FOREIGN KEY ("zgradaId") REFERENCES "Zgrada" ("id");

ALTER TABLE "Ulaz" ADD CONSTRAINT unique_c3 UNIQUE ("ulicaId", "ulicaBroj");

ALTER TABLE "Ugovor" ADD FOREIGN KEY ("zgradaId") REFERENCES "Zgrada" ("id");

ALTER TABLE "Ugovor" ADD FOREIGN KEY ("kompanijaId") REFERENCES "Kompanija" ("id");

ALTER TABLE "Kompanija" ADD FOREIGN KEY ("ulicaId") REFERENCES "Ulica" ("id");

ALTER TABLE "Kompanija" ADD CONSTRAINT unique_c2 UNIQUE ("ulicaId", "ulicaBroj");

ALTER TABLE "Korisnik" ADD FOREIGN KEY ("mjestoRodenjaId") REFERENCES "Mjesto" ("id");

ALTER TABLE "Korisnik" ADD FOREIGN KEY ("mjestoPrebivalištaId") REFERENCES "Mjesto" ("id");

ALTER TABLE "Upravitelj" ADD FOREIGN KEY ("id") REFERENCES "Korisnik" ("id");

ALTER TABLE "Stanar" ADD FOREIGN KEY ("id") REFERENCES "Korisnik" ("id");

ALTER TABLE "Kompanija" ADD FOREIGN KEY ("vlasnikId") REFERENCES "Upravitelj" ("id");

ALTER TABLE "Ulaz" ADD FOREIGN KEY ("predstavnikId") REFERENCES "Stanar" ("id");

ALTER TABLE "Kontakt" ADD FOREIGN KEY ("vrstaKontaktId") REFERENCES "VrstaKontakt" ("id");

ALTER TABLE "Kontakt" ADD FOREIGN KEY ("korisnikId") REFERENCES "Korisnik" ("id");

ALTER TABLE "NalogPlacanja" ADD FOREIGN KEY ("zgradaId") REFERENCES "Zgrada" ("id");

ALTER TABLE "Pričuva" ADD FOREIGN KEY ("nalogPlacanjaId") REFERENCES "NalogPlacanja" ("id");

ALTER TABLE "Pričuva" ADD FOREIGN KEY ("kucanstvoId") REFERENCES "Kućanstvo" ("id");

ALTER TABLE "Pričuva" ADD CONSTRAINT unique_c1 UNIQUE ("nalogPlacanjaId", "kucanstvoId");

ALTER TABLE "Kućanstvo" ADD FOREIGN KEY ("ulazId") REFERENCES "Ulaz" ("id");

ALTER TABLE "Kućanstvo" ADD FOREIGN KEY ("stanarId") REFERENCES "Stanar" ("id");

ALTER TABLE "Pritužba" ADD FOREIGN KEY ("kućanstvoId") REFERENCES "Kućanstvo" ("id");

ALTER TABLE "PrijavljenaKućanstva" ADD FOREIGN KEY ("kućanstvoid") REFERENCES "Kućanstvo" ("id");

ALTER TABLE "PrijavljenaKućanstva" ADD FOREIGN KEY ("pritužbaId") REFERENCES "Pritužba" ("id");

ALTER TABLE "Oglas" ADD FOREIGN KEY ("id") REFERENCES "Kućanstvo" ("id");

ALTER TABLE "ZainteresiraniZaOglas" ADD FOREIGN KEY ("oglasId") REFERENCES "Oglas" ("id");

ALTER TABLE "ZainteresiraniZaOglas" ADD FOREIGN KEY ("korisnikId") REFERENCES "Korisnik" ("id");

ALTER TABLE "Obavijest" ADD FOREIGN KEY ("pošiljateljId") REFERENCES "Kućanstvo" ("id");

ALTER TABLE "PoslanaObavijest" ADD FOREIGN KEY ("obavijestId") REFERENCES "Obavijest" ("id");

ALTER TABLE "PoslanaObavijest" ADD FOREIGN KEY ("kućanstvoId") REFERENCES "Kućanstvo" ("id");

ALTER TABLE "Obavijest" ADD FOREIGN KEY ("vrstaObavijestId") REFERENCES "VrstaObavijest" ("id");

ALTER TABLE "Prostorija" ADD FOREIGN KEY ("vrstaProstorija") REFERENCES "VrstaProstorija" ("id");

ALTER TABLE "Prostorija" ADD FOREIGN KEY ("kućanstvoId") REFERENCES "Kućanstvo" ("id");

ALTER TABLE "Država" ADD FOREIGN KEY ("metaId") REFERENCES "Meta" ("id");

ALTER TABLE "Mjesto" ADD FOREIGN KEY ("metaId") REFERENCES "Meta" ("id");

ALTER TABLE "Ulica" ADD FOREIGN KEY ("metaId") REFERENCES "Meta" ("id");

ALTER TABLE "Ulaz" ADD FOREIGN KEY ("metaId") REFERENCES "Meta" ("id");

ALTER TABLE "Zgrada" ADD FOREIGN KEY ("metaId") REFERENCES "Meta" ("id");

ALTER TABLE "Ugovor" ADD FOREIGN KEY ("metaId") REFERENCES "Meta" ("id");

ALTER TABLE "Kompanija" ADD FOREIGN KEY ("metaId") REFERENCES "Meta" ("id");

ALTER TABLE "NalogPlacanja" ADD FOREIGN KEY ("metaId") REFERENCES "Meta" ("id");

ALTER TABLE "Pričuva" ADD FOREIGN KEY ("metaId") REFERENCES "Meta" ("id");

ALTER TABLE "Kućanstvo" ADD FOREIGN KEY ("metaId") REFERENCES "Meta" ("id");

ALTER TABLE "Kontakt" ADD FOREIGN KEY ("metaId") REFERENCES "Meta" ("id");

ALTER TABLE "VrstaKontakt" ADD FOREIGN KEY ("metaId") REFERENCES "Meta" ("id");

ALTER TABLE "Obavijest" ADD FOREIGN KEY ("metaId") REFERENCES "Meta" ("id");

ALTER TABLE "VrstaObavijest" ADD FOREIGN KEY ("metaId") REFERENCES "Meta" ("id");

ALTER TABLE "Prostorija" ADD FOREIGN KEY ("metaId") REFERENCES "Meta" ("id");

ALTER TABLE "VrstaProstorija" ADD FOREIGN KEY ("metaId") REFERENCES "Meta" ("id");

ALTER TABLE "Pritužba" ADD FOREIGN KEY ("metaId") REFERENCES "Meta" ("id");

ALTER TABLE "Korisnik" ADD FOREIGN KEY ("metaId") REFERENCES "Meta" ("id");

ALTER TABLE "Oglas" ADD FOREIGN KEY ("metaId") REFERENCES "Meta" ("id");

ALTER TABLE "Meta" ADD FOREIGN KEY ("stvorioId") REFERENCES "Korisnik" ("id");

ALTER TABLE "Meta" ADD FOREIGN KEY ("uredioId") REFERENCES "Korisnik" ("id");