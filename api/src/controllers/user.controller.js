const pg = require("../config/databasepg");

//  Método responsável por criar o 'Aluno' no banco SQL Postegres:

exports.createUser = async (req, res) => {
  const {  nome, matricula, datanascimento, datadeconclusao, turmareferente } = req.body;
  const { rows } = await pg.query(
    "INSERT INTO Aluno (nome, matricula, datanascimento, datadeconclusao, turmareferente) VALUES ($1, $2, $3, $4, $5 )",
    [ nome, matricula, datanascimento, datadeconclusao, turmareferente]
  );

  res.status(201).send({
    message: "Aluno novo Cadastrado",
    body: {
      user: { nome }
    },
  });
};

//  Método responsável por lista os 'Aluno' no banco SQL Postegres:

exports.listarUser = async (req, res) =>{
  const response = await pg.query('SELECT * FROM Aluno ORDER BY id ASC');
  res.status(200).send(response.rows);
}

//  Método responsável por selecionar 'Aluno' pelo 'Id' no banco SQL Postegres:

exports.buscaUsuarioporId = async (req, res) => {
  const matricula = parseInt(req.params.matricula);
  const response = await pg.query('SELECT * FROM Aluno WHERE matricula = $1', [matricula]);
  res.status(200).send(response.rows);
  console.log(response.rows[0].matricula)
}


//  Método responsável por atualizar o 'Aluno' pelo 'Id' no banco SQL Postegres:

exports.atualizarUserId = async (req, res) => {
  const matricula = parseInt(req.params.matricula);
  const { nome, datanascimento, datadeconclusao, turmareferente } = req.body;

  const response = await pg.query(
    "UPDATE Aluno SET nome = $1, datanascimento = $2,  datadeconclusao = $3, turmareferente = $4 WHERE matricula = $5",
    [nome, datanascimento, datadeconclusao, turmareferente, matricula]
  );
  res.status(200).send({message: "Aluno atualizado com sucesso !"});
};

//  Método responsável por excluir o 'Usuário' pelo 'Id' no banco SQL Postegres:

exports.deletarUserId = async (req, res) => {
  const matricula = parseInt(req.params.matricula);
  await pg.query("DELETE FROM Aluno WHERE matricula = $1",
  [matricula]);
  res.status(200).send({message: "Aluno deletado com sucesso ", matricula});
}
