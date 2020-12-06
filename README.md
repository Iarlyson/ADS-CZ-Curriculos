# ADS-CZ Currículos


### Equipe:
#### Francisco Iarlyson Santana de Andrade
#### Maria Kelcilene Parnaiba Bispo



CREATE TABLE Aluno(
	id SERIAL,
	Matricula VARCHAR(10),
	Nome VARCHAR(50),
	DataNascimento VARCHAR(10),
	AnoConclusao VARCHAR(10),
	TurmaReferente VARCHAR(10),
	PRIMARY KEY(Id)
);

INSERT INTO Aluno(Matricula, Nome, DataNascimento, AnoConclusao, TurmaReferente) VALUES ('2017120101', 'Joao Carlos Brasileiro', '10-01-1199', '12-12-2019', '2017.1');

INSERT INTO Aluno(Matricula, Nome, DataNascimento, AnoConclusao, TurmaReferente) VALUES('2017120102','Maria Eduarda Nascimento', '15-06-1197', '12-06-2016', '2013.2');

INSERT INTO Aluno (Matricula, Nome, DataNascimento, AnoConclusao, TurmaReferente) VALUES('2017120103',  'Pedro Henrique Duarte', '10-12-2001', '12-12-2019', '2015.1');

INSERT INTO Aluno(Matricula, Nome, DataNascimento, AnoConclusao, TurmaReferente) VALUES ('2017120104', 'Laura Perreira ', '10-05-2000', '17-12-2019', '2015.1');
 
INSERT INTO Aluno (Matricula, Nome, DataNascimento, AnoConclusao, TurmaReferente) VALUES ('2017120105', 'Joana Vitoria Brasileiro', '10-02-2001', '17-06-2020', '2017.2');