CREATE TABLE Oggetti(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20),
    img VARCHAR(50)
);
CREATE TABLE descrizione(
    id INT PRIMARY KEY AUTO_INCREMENT,
    oggetto INT REFERENCES Oggetti(id),
    tipo VARCHAR(10),
    info VARCHAR(200),
    posizione INT
);