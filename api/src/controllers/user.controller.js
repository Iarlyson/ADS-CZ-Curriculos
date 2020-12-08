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
  const id = parseInt(req.params.id);
  const response = await pg.query('SELECT * FROM Aluno WHERE id = $1', [id]);
  res.status(200).send(response.rows);
  console.log(response.rows[0].id)
}


//  Método responsável por atualizar o 'Aluno' pelo 'Id' no banco SQL Postegres:

exports.atualizarUserId = async (req, res) => {
  const id = parseInt(req.params.id);
  const {  nome, matricula, datanascimento, datadeconclusao, turmareferente } = req.body;

  const response = await pg.query(
    "UPDATE Aluno SET nome = $1, matricula = $2 , datanascimento = $3, datadeconclusao = $4, turmareferente = $5 WHERE id = $6",
    [nome, matricula, datanascimento, datadeconclusao, turmareferente, id]
  );
  res.status(200).send({message: "Aluno atualizado com sucesso !"});
};

//  Método responsável por excluir o 'Usuário' pelo 'Id' no banco SQL Postegres:

exports.deletarUserId = async (req, res) => {
  const usuarioId = parseInt(req.params.id);
  await pg.query("DELETE FROM Aluno WHERE id = $1",[
    usuarioId
  ]);
  res.status(200).send({message: "Aluno deletado com sucesso ", usuarioId});
}
