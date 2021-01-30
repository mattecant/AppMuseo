
CREATE DATABASE museo_informatica;
USE museo_informatica;
CREATE USER museo_informatica IDENTIFIED BY 'museo_informatica';
grant all on museo_informatica.* to 'museo_informatica'@'%';

CREATE TABLE Oggetti(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    img VARCHAR(50)
);

CREATE TABLE Descrizioni(
    id INT PRIMARY KEY AUTO_INCREMENT,
    oggetto INT REFERENCES Oggetti(id),
    tipo VARCHAR(10),
    info VARCHAR(512),
    posizione INT
);

