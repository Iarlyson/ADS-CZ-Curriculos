const db = require("../config/database");

//  Método responsável por criar o 'Aluno' no banco SQL Postegres:

exports.createUser = async (req, res) => {
  const { matricula, nome, datanascimento, anoconclusao, turmareferente } = req.body;
  const { rows } = await db.query(
    "INSERT INTO Aluno (matricula, nome, datanascimento, anoconclusao, turmareferente) VALUES ($1, $2, $3, $4, $5 )",
    [matricula, nome, datanascimento, anoconclusao, turmareferente]
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
  const response = await db.query('SELECT * FROM Aluno ORDER BY id ASC');
  res.status(200).send(response.rows);
}

//  Método responsável por selecionar 'Aluno' pelo 'Id' no banco SQL Postegres:

exports.buscaUsuarioporId = async (req, res) => {
  const id = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM Aluno WHERE id = $1', [id]);
  res.status(200).send(response.rows);
  console.log(response.rows[0].id)
}


//  Método responsável por atualizar o 'Aluno' pelo 'Id' no banco SQL Postegres:

exports.atualizarUserId = async (req, res) => {
  const id = parseInt(req.params.id);
  const{nome} = req.body;

  const response = await db.query(
    "UPDATE Aluno SET nome = $1 WHERE id = $2",
    [nome, id]
  );
  res.status(200).send({message: "Aluno atualizado com sucesso !"});
};

//  Método responsável por excluir o 'Usuário' pelo 'Id' no banco SQL Postegres:

exports.deletarUserId = async (req, res) => {
  const usuarioId = parseInt(req.params.id);
  await db.query("DELETE FROM Aluno WHERE id = $1",[
    usuarioId
  ]);
  res.status(200).send({message: "Aluno deletado com sucesso ", usuarioId});
}
