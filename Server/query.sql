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

-- grant all on museo_informatica.* to 'museo_informatica'@'%';
