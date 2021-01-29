CREATE TABLE Oggetti(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20),
    img VARCHAR(50)
);

CREATE TABLE Descrizioni(
    id INT PRIMARY KEY AUTO_INCREMENT,
    oggetto INT REFERENCES Oggetti(id),
    tipo VARCHAR(10),
    info VARCHAR(200),
    posizione INT
);

-- grant all on museo_informatica.* to 'museo_informatica'@'%';

INSERT INTO Descrizioni VALUES
(1,1,'titolo','oggetto 1',0),
(2,1,'testo','questo e la descrizione dell\'oggetto',1);