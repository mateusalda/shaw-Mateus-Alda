SET SQL_SAFE_UPDATES = 0;

CREATE TABLE Movies(
	id int primary key,
    title varchar(255) not null,
    synopsis text not null,
    release_date date not null,
    rating int not null
);

INSERT INTO Movies (id, title, synopsis, release_date, rating)
VALUE (
	001,
    'Se Eu Fosse Você',
    'Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos',
    '2006-01-06',
    7
), (
	002,
    'Doce de mãe',
    'Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela',
    '2012-12-27',
    10
), (
	003,
    'Dona Flor e Seus Dois Maridos',
    'Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.',
    '2017-11-02',
    8
), (
	004,
    'Lisbela e o Prisioneiro',
    'A jovem Lisbela adora ir ao cinema e vive sonhando com os galãs de Hollywood dos filmes que assiste. Leléu é um malandro conquistador, que em meio a uma de suas muitas aventuras chega à cidade da moça. Após se conhecerem eles logo se apaixonam, mas Lisbela está de casamento marcado. Em meio às dúvidas e aos problemas familiares que a nova paixão desperta, há ainda a presença de um matador que está atrás de Leléu, devido a ele ter se envolvido com sua esposa no passado.',
    '2003-08-22',
    10
);

SELECT * from Movies;

SELECT id, title, rating from Movies WHERE id = 004;

SELECT * from Movies WHERE title = 'Lisbela e o Prisioneiro';

SELECT id, title, synopsis from Movies WHERE rating >= 7;

SELECT * from Movies WHERE title LIKE '%vida%';

SELECT * from Movies WHERE title LIKE '%casa%' OR synopsis LIKE '%casa%';

SELECT * from Movies WHERE DATE(release_date) < curdate();

SELECT * from Movies WHERE DATE(release_date) < curdate() 
AND (title LIKE '%casa%' OR synopsis LIKE '%casa%') 
AND rating > 7;

ALTER TABLE Movies
ADD playing_limit_date DATE;

ALTER TABLE Movies
CHANGE rating rating FLOAT;

UPDATE Movies
SET playing_limit_date = "2022-07-22"
WHERE id = 004;

UPDATE Movies
SET playing_limit_date = "2022-05-22"
WHERE id = 002;

DELETE FROM Movies WHERE id = 003;

UPDATE Movies
SET synopsis = "Ipsum lorem..."
WHERE id = 003;

----------------------------------------------

CREATE TABLE Actor (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;

SHOW TABLES;

DESCRIBE Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"001",
    "Tony Ramos",
    400000,
    "1948-08-25",
    "male"
), (
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"002",
    "Celton Mello",
    600000,
    "1972-12-30",
    "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Débora Falabella",
  300000,
  "1979-02-22", 
  "female"
), (
  "007", 
  "Marco Nanini",
  400000,
  "1948-05-31", 
  "male"
);

SELECT * from Actor WHERE gender = 'female';

SELECT salary from Actor WHERE name = 'Tony Ramos';

SELECT * from Actor WHERE gender = "invalid";

SELECT id, name, salary from Actor WHERE salary <= 500000;

SELECT id, name from Actor WHERE id = "002";

SELECT * from Actor WHERE name NOT LIKE 'A%' AND salary > 350000;

SELECT * from Actor WHERE name LIKE '%g%';

SELECT * from Actor
WHERE (name LIKE '%a%' OR name LIKE '%g%') AND salary BETWEEN 350000 AND 900000;


ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

UPDATE Actor
SET name = "Ingrid Guimarães",
	birth_date = "1972-07-05"
WHERE id = "003";

UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

UPDATE Actor
SET name = "Antônio Fagundes",
	salary = 400000,
    birth_date = "1949-04-18",
    gender = "male"
WHERE id = "005";

UPDATE Actor
SET name = "Qualquer Nome"
WHERE id = "p03";

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

DELETE FROM Actor 
WHERE gender = "male" AND salary > 1000000;

SELECT MAX(salary) from Actor;

SELECT MIN(salary) from Actor
WHERE gender = "female";

SELECT COUNT(*) FROM Actor
WHERE gender = "female";

SELECT SUM(salary) from Actor;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

SELECT id, name from Actor ORDER BY name DESC;

SELECT * FROM Actor ORDER BY salary;

SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;



2.
d) 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
O comando rodou mas nenhuma linha foi alterada, pois o id não existe na tabela

5.
a) Este comando retorna a contagem de atores separados por gênero

6.
d) O comando rodou alterando a linha com o id deletado, nenhuma linha foi alterada