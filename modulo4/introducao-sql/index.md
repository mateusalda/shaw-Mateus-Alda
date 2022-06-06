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
AND rating > 7


------------------------------------------------------------
1.
a) VARCHAR(255) recebe até 255 caracteres e salva somente a quantidade de caracteres enviada;
DATE recebe uma data no formato YYYY-MM-DD;
PRIMARY KEY demarca a coluna que servirá como identificador;
NOT NULL deve receber valor que não seja nulo;

b) SHOW DATABASES lista as databases no server host;
SHOW TABLES lista as tabelas na database;

c) Descreve campo, tipo, null, chave, padrão e extra de cada coluna da tabela

2.
b) Código de Erro: 1062. Entrada duplicada '002' para chave 'PRIMARY'. Primary key não pode ser repetida entre itens da tabela

c) Contagem de colunas não corresponde à contagem de valores na linha 1. São informadas 3 colunas mas passados 5 valores

d) Campo 'name' não tem valor padrão. Não é informado o campo 'name', porém ele é NOT NULL e não tem valor padrão.

e) Valor de data incorreto: '1950' para coluna 'birth_date' na linha 1. Valor de data deve ser um string no formato 'YYYY-MM-DD'

3.
e) Coluna desconhecida 'nome' em 'field list'. A coluna se chama 'name', não 'nome'.

4.
a) Apresenta todas as colunas dos elementos onde o 'name' começe com A ou J e 'salary' seja maior que 300000