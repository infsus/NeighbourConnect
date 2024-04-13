CREATE TABLE "Država" (
  "id" integer PRIMARY KEY,
  "ime" varchar(50) UNIQUE NOT NULL,
  "kratica" varchar(3) UNIQUE NOT NULL,
  "metaId" integer NOT NULL
);

CREATE TABLE "Mjesto" (
  "id" integer PRIMARY KEY,
  "državaId" integer NOT NULL,
  "ime" varchar(50) UNIQUE NOT NULL,
  "postanskiBroj" integer UNIQUE NOT NULL,
  "metaId" integer NOT NULL
);

CREATE TABLE "Ulica" (
  "id" integer PRIMARY KEY,
  "mjestoId" integer NOT NULL,
  "ime" varchar(50) UNIQUE NOT NULL,
  "metaId" integer NOT NULL
);

CREATE TABLE "Ulaz" (
  "id" integer PRIMARY KEY,
  "zgradaId" integer NOT NULL,
  "predstavnikId" integer,
  "ulicaId" integer NOT NULL,
  "ulicaBroj" integer NOT NULL,
  "metaId" integer NOT NULL
);

CREATE TABLE "Zgrada" (
  "id" integer PRIMARY KEY,
  "datumPočetkaGradnje" date NOT NULL,
  "datumIzgradnje" date NOT NULL,
  "metaId" integer NOT NULL
);

CREATE TABLE "Ugovor" (
  "id" integer PRIMARY KEY,
  "zgradaId" integer NOT NULL,
  "kompanijaId" integer NOT NULL,
  "datumSklapanja" date NOT NULL,
  "datumIsteka" date NOT NULL,
  "metaId" integer NOT NULL
);

CREATE TABLE "Kompanija" (
  "id" integer PRIMARY KEY,
  "vlasnikId" integer NOT NULL,
  "ulicaId" integer NOT NULL,
  "ime" varchar(50) NOT NULL,
  "oib" varchar(11) UNIQUE NOT NULL,
  "godinaOsnutka" date,
  "ulicaBroj" integer NOT NULL,
  "metaId" integer NOT NULL
);

CREATE TABLE "Korisnik" (
  "id" integer PRIMARY KEY,
  "ime" varchar(50) NOT NULL,
  "prezime" varchar(50) NOT NULL,
  "oib" varchar(11) NOT NULL,
  "datumRodenja" date,
  "mjestoRodenjaId" integer,
  "mjestoPrebivalištaId" integer,
  "email" varchar(50) UNIQUE NOT NULL,
  "lozinka" varchar(200) NOT NULL,
  "metaId" integer NOT NULL
);

CREATE TABLE "Upravitelj" (
  "id" integer PRIMARY KEY,
  "datumZaposlenja" date
);

CREATE TABLE "Stanar" (
  "id" integer PRIMARY KEY,
  "pristajeBitiPredstavnik" bool NOT NULL DEFAULT true
);

CREATE TABLE "Kontakt" (
  "id" integer PRIMARY KEY,
  "korisnikId" integer NOT NULL,
  "vrstaKontaktId" integer NOT NULL,
  "kontakt" varchar(50) NOT NULL,
  "primarni" bool NOT NULL DEFAULT true,
  "metaId" integer NOT NULL
);

CREATE TABLE "VrstaKontakt" (
  "id" integer PRIMARY KEY,
  "nazivVrste" varchar(50) UNIQUE NOT NULL,
  "metaId" integer NOT NULL
);

CREATE TABLE "NalogPlacanja" (
  "id" integer PRIMARY KEY,
  "zgradaId" integer NOT NULL,
  "datumIzdavanja" date,
  "rokUplate" date NOT NULL,
  "zaMjesec" date NOT NULL,
  "iznos" decimal NOT NULL,
  "opis" varchar(200),
  "metaId" integer NOT NULL
);

CREATE TABLE "Pričuva" (
  "id" integer PRIMARY KEY,
  "nalogPlacanjaId" integer NOT NULL,
  "kucanstvoId" integer NOT NULL,
  "postotakIznos" float NOT NULL DEFAULT 1,
  "datumPlacanja" datetime,
  "metaId" integer NOT NULL
);

CREATE TABLE "Kućanstvo" (
  "id" integer PRIMARY KEY,
  "ulazId" integer NOT NULL,
  "stanarId" integer,
  "napomena" varchar(200),
  "metaId" integer NOT NULL
);

CREATE TABLE "Pritužba" (
  "id" integer PRIMARY KEY,
  "kućanstvoId" integer NOT NULL,
  "naslov" varchar(50) NOT NULL,
  "opis" varchar(200) NOT NULL,
  "privatna" bool NOT NULL DEFAULT true,
  "obavijestiPredstavnika" bool NOT NULL DEFAULT false,
  "metaId" integer NOT NULL
);

CREATE TABLE "PrijavljenaKućanstva" (
  "kućanstvoid" integer,
  "pritužbaId" integer,
  "napomena" varchar(200),
  PRIMARY KEY ("kućanstvoid", "pritužbaId")
);

CREATE TABLE "Oglas" (
  "id" integer PRIMARY KEY,
  "naslov" varchar(50) NOT NULL,
  "opis" varchar(200) NOT NULL,
  "cijena" decimal NOT NULL
);

CREATE TABLE "ZainteresiraniZaOglas" (
  "stanarId" integer,
  "oglasId" integer,
  "poruka" varchar(500) NOT NULL,
  PRIMARY KEY ("stanarId", "oglasId")
);

CREATE TABLE "Obavijest" (
  "id" integer PRIMARY KEY,
  "pošiljateljId" integer NOT NULL,
  "vrstaObavijestId" integer NOT NULL,
  "naslov" varchar(50) NOT NULL,
  "poruka" varchar(200) NOT NULL,
  "metaId" integer NOT NULL
);

CREATE TABLE "PoslanaObavijest" (
  "kućanstvoId" integer,
  "obavijestId" integer,
  PRIMARY KEY ("kućanstvoId", "obavijestId")
);

CREATE TABLE "VrstaObavijest" (
  "id" integer PRIMARY KEY,
  "vrsta" varchar(20) UNIQUE NOT NULL,
  "prioritet" integer UNIQUE NOT NULL,
  "metaId" integer NOT NULL
);

CREATE TABLE "Prostorija" (
  "id" integer PRIMARY KEY,
  "kućanstvoId" integer NOT NULL,
  "vrstaProstorija" integer NOT NULL,
  "kvadratura" decimal NOT NULL,
  "metaId" integer NOT NULL
);

CREATE TABLE "VrstaProstorija" (
  "id" integer PRIMARY KEY,
  "vrsta" varchar(50) UNIQUE NOT NULL,
  "metaId" integer NOT NULL
);

CREATE TABLE "Meta" (
  "id" integer PRIMARY KEY,
  "stvorioId" integer NOT NULL,
  "uredioId" integer NOT NULL,
  "stvorenoU" datetime NOT NULL,
  "uređenoU" datetime NOT NULL,
  "obrisano" bool NOT NULL DEFAULT false
);

COMMENT ON TABLE "Ulaz" IS 'ulicaId i ulicaBroj su skupa unique';

COMMENT ON COLUMN "Ulaz"."predstavnikId" IS 'Nova zgrada, nitko ne živi još uuntra, nema predstavnika';

COMMENT ON TABLE "Kompanija" IS 'ulicaId i ulicaBroj unique skupa';

COMMENT ON TABLE "Korisnik" IS 'Osoba';

COMMENT ON TABLE "PrijavljenaKućanstva" IS 'kId i pId ključ';

COMMENT ON TABLE "ZainteresiraniZaOglas" IS 'sId i oId ključ';

COMMENT ON TABLE "PoslanaObavijest" IS 'kId i oId su ključ';

ALTER TABLE "Mjesto" ADD FOREIGN KEY ("državaId") REFERENCES "Država" ("id");

ALTER TABLE "Ulica" ADD FOREIGN KEY ("mjestoId") REFERENCES "Mjesto" ("id");

ALTER TABLE "Ulaz" ADD FOREIGN KEY ("ulicaId") REFERENCES "Ulica" ("id");

ALTER TABLE "Ulaz" ADD FOREIGN KEY ("zgradaId") REFERENCES "Zgrada" ("id");

ALTER TABLE "Ugovor" ADD FOREIGN KEY ("zgradaId") REFERENCES "Zgrada" ("id");

ALTER TABLE "Ugovor" ADD FOREIGN KEY ("kompanijaId") REFERENCES "Kompanija" ("id");

ALTER TABLE "Kompanija" ADD FOREIGN KEY ("ulicaId") REFERENCES "Ulica" ("id");

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

ALTER TABLE "Kućanstvo" ADD FOREIGN KEY ("ulazId") REFERENCES "Ulaz" ("id");

ALTER TABLE "Kućanstvo" ADD FOREIGN KEY ("stanarId") REFERENCES "Stanar" ("id");

ALTER TABLE "Pritužba" ADD FOREIGN KEY ("kućanstvoId") REFERENCES "Kućanstvo" ("id");

ALTER TABLE "PrijavljenaKućanstva" ADD FOREIGN KEY ("kućanstvoid") REFERENCES "Kućanstvo" ("id");

ALTER TABLE "PrijavljenaKućanstva" ADD FOREIGN KEY ("pritužbaId") REFERENCES "Pritužba" ("id");

ALTER TABLE "Oglas" ADD FOREIGN KEY ("id") REFERENCES "Kućanstvo" ("id");

ALTER TABLE "ZainteresiraniZaOglas" ADD FOREIGN KEY ("oglasId") REFERENCES "Oglas" ("id");

ALTER TABLE "ZainteresiraniZaOglas" ADD FOREIGN KEY ("stanarId") REFERENCES "Stanar" ("id");

ALTER TABLE "Obavijest" ADD FOREIGN KEY ("pošiljateljId") REFERENCES "Kućanstvo" ("id");

ALTER TABLE "PoslanaObavijest" ADD FOREIGN KEY ("obavijestId") REFERENCES "Obavijest" ("id");

ALTER TABLE "PoslanaObavijest" ADD FOREIGN KEY ("kućanstvoId") REFERENCES "Kućanstvo" ("id");

ALTER TABLE "Obavijest" ADD FOREIGN KEY ("vrstaObavijestId") REFERENCES "VrstaObavijest" ("id");

ALTER TABLE "Prostorija" ADD FOREIGN KEY ("vrstaProstorija") REFERENCES "VrstaProstorija" ("id");

ALTER TABLE "Prostorija" ADD FOREIGN KEY ("kućanstvoId") REFERENCES "Kućanstvo" ("id");

ALTER TABLE "Meta" ADD FOREIGN KEY ("id") REFERENCES "Država" ("metaId");

ALTER TABLE "Meta" ADD FOREIGN KEY ("id") REFERENCES "Mjesto" ("metaId");

ALTER TABLE "Meta" ADD FOREIGN KEY ("id") REFERENCES "Ulica" ("metaId");

ALTER TABLE "Meta" ADD FOREIGN KEY ("id") REFERENCES "Ulaz" ("metaId");

ALTER TABLE "Meta" ADD FOREIGN KEY ("id") REFERENCES "Zgrada" ("metaId");

ALTER TABLE "Meta" ADD FOREIGN KEY ("id") REFERENCES "Ugovor" ("metaId");

ALTER TABLE "Meta" ADD FOREIGN KEY ("id") REFERENCES "Kompanija" ("metaId");

ALTER TABLE "Meta" ADD FOREIGN KEY ("id") REFERENCES "NalogPlacanja" ("metaId");

ALTER TABLE "Meta" ADD FOREIGN KEY ("id") REFERENCES "Pričuva" ("metaId");

ALTER TABLE "Meta" ADD FOREIGN KEY ("id") REFERENCES "Kućanstvo" ("metaId");

ALTER TABLE "Meta" ADD FOREIGN KEY ("id") REFERENCES "Kontakt" ("metaId");

ALTER TABLE "Meta" ADD FOREIGN KEY ("id") REFERENCES "VrstaKontakt" ("metaId");

ALTER TABLE "Meta" ADD FOREIGN KEY ("id") REFERENCES "Obavijest" ("metaId");

ALTER TABLE "Meta" ADD FOREIGN KEY ("id") REFERENCES "VrstaObavijest" ("metaId");

ALTER TABLE "Meta" ADD FOREIGN KEY ("id") REFERENCES "Prostorija" ("metaId");

ALTER TABLE "Meta" ADD FOREIGN KEY ("id") REFERENCES "VrstaProstorija" ("metaId");

ALTER TABLE "Meta" ADD FOREIGN KEY ("id") REFERENCES "Pritužba" ("metaId");

ALTER TABLE "Meta" ADD FOREIGN KEY ("id") REFERENCES "Korisnik" ("metaId");