DELETE FROM mjesecnaclan WHERE 1=1;
DELETE FROM odgovara  WHERE 1=1;
DELETE FROM prijavljujeerr  WHERE 1=1;
DELETE FROM prijavljujetr  WHERE 1=1;
DELETE FROM prijavljujetu  WHERE 1=1;
DELETE FROM spring_session  WHERE 1=1;
DELETE FROM spring_session_attributes  WHERE 1=1;
DELETE FROM taktika  WHERE 1=1;
DELETE FROM trening  WHERE 1=1;
DELETE FROM turnir  WHERE 1=1;
DELETE FROM zahtjevregistracije  WHERE 1=1;
DELETE FROM zanimljivost  WHERE 1=1;
DELETE FROM administrator  WHERE 1=1;
DELETE FROM trener  WHERE 1=1;
DELETE FROM clan  WHERE 1=1;
DELETE FROM korisnik  WHERE 1=1;

INSERT INTO korisnik(email, korisnickoime, lozinka,osobaid, blokiran, uloga)
VALUES ('admin@sah.hr', 'admin', '123', 1, 0, 'admin');
INSERT INTO korisnik(email, korisnickoime, lozinka,osobaid, blokiran, uloga)
VALUES ('trener@sah.hr', 'trener', '123', 2, 0, 'trener');
INSERT INTO korisnik(email, korisnickoime, lozinka,osobaid, blokiran, uloga)
VALUES ('trener1@sah.hr', 'trener1', '123', 3, 0, 'trener');
INSERT INTO korisnik(email, korisnickoime, lozinka,osobaid, blokiran, uloga)
VALUES ('trener2@sah.hr', 'trener2', '123', 4, 0, 'trener');
INSERT INTO korisnik(email, korisnickoime, lozinka,osobaid, blokiran, uloga)
VALUES ('clan@sah.hr', 'clan', '123', 5, 0, 'clan');

INSERT INTO administrator(ime, prezime, osobaid) VALUES ('Pero', 'Perić', 1);
INSERT INTO trener(ime, prezime, titula, osobaid) VALUES ('Hikaru', 'Nakamura','GM', 2);
INSERT INTO trener(ime, prezime, titula, osobaid) VALUES ('Agadmator', 'Agadmator','GM', 3);
INSERT INTO trener(ime, prezime, titula, osobaid) VALUES ('Magnus', 'Carlsen','GM', 4);
INSERT INTO clan(ime, prezime, clanod, bodovi, suspendiran, osobaid) VALUES ('Ivan', 'Horvat','2021-7-8', 500, 0, 5);

INSERT INTO zanimljivost(zanimljivostid, datumobjave, opis, naslov, aktivni, osobaid)
VALUES (1, '2022-12-25', 'S obzirom na nadolazeće blagdane odlučili smo otkazati sve turnire i treninge do daljnjega.','Sretan Božić', 1, 2);
INSERT INTO zanimljivost(zanimljivostid, datumobjave, opis, naslov, aktivni, osobaid)
VALUES (2, '2022-12-31', 'S obzirom na nadolazeće blagdane odlučili smo otkazati sve turnire i treninge do daljnjega.','Sretna Stara Godina', 1, 3);
INSERT INTO zanimljivost(zanimljivostid, datumobjave, opis, naslov, aktivni, osobaid)
VALUES (3, '2023-1-1', 'S obzirom na nadolazeće blagdane odlučili smo otkazati sve turnire i treninge do daljnjega.','Sretna Nova Godina', 1, 4);

INSERT INTO trening(treningid, mjesto, datumtreninga , vrijemetreninga , trajanje , aktivni, osobaid)
VALUES (1, 'A109', '2022-12-25', '18:45', 45, 1, 3);
INSERT INTO trening(treningid, mjesto, datumtreninga , vrijemetreninga , trajanje , aktivni, osobaid)
VALUES (2, 'D2', '2022-12-31', '18:45', 45, 1, 4);
INSERT INTO trening(treningid, mjesto, datumtreninga , vrijemetreninga , trajanje , aktivni, osobaid)
VALUES (3, 'B4', '2023-1-1', '18:45', 45, 1, 2);

INSERT INTO turnir(turnirid, naziv, datumturnira, mjesto, vrijemeturnir, aktivni, kapacitet, osobaid)
VALUES (1, 'Bullet 2+1', '2023-1-1', 'FER', 20, 1, 10, 2);
INSERT INTO turnir(turnirid, naziv, datumturnira, mjesto, vrijemeturnir, aktivni, kapacitet, osobaid)
VALUES (2, 'Rapid 10+15', '2023-1-1', 'FER', 10, 1, 10, 3);
INSERT INTO turnir(turnirid, naziv, datumturnira, mjesto, vrijemeturnir, aktivni, kapacitet, osobaid)
VALUES (3, 'Clasical', '2023-1-1', 'FER', 12, 1, 20, 4);
