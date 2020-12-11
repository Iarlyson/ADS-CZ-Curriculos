# ADS-CZ Currículos


### Equipe:
#### Francisco Iarlyson Santana de Andrade
#### Maria Kelcilene Parnaiba Bispo
#### Rayssa de Araújo Costa

CREATE TABLE Aluno(
	id SERIAL,
	Nome VARCHAR(50),
	Matricula INTEGER,
	DataNascimento VARCHAR(10),
	DatadeConclusao VARCHAR(10),
	TurmaReferente FLOAT,
	PRIMARY KEY(Matricula)
);



INSERT INTO Aluno( Nome, Matricula, DataNascimento, DatadeConclusao, TurmaReferente) VALUES ('Joao Carlos Brasileiro', 2017120101, '10-01-1199', '12-12-2019', '2017.1');

INSERT INTO Aluno( Nome, Matricula, DataNascimento, DatadeConclusao, TurmaReferente) VALUES ('Maria Eduarda Nascimento', 2017120102, '24-09-1997', '12-06-2016', '2013.2');
