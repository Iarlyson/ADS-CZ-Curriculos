
require('dotenv').config();
const { MongoClient, ObjectID, ObjectId } = require('mongodb');

const mongodb = new MongoClient(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`,
    { useUnifiedTopology: true });

    mongodb.connect(
        console.log("Base de Dados no Mongodb nosql conectado com sucesso!!")
);

//  Método responsável por criar o 'Curriculo' no banco Mongodb:
exports.criarCurriculo =  async (req, res) => {
    const matricula = parseInt(req.params.matricula);
    const {descricao, email, telefone, trabalhando, tecnologia, linkedin, github} = req.body;
    const curriculo = {
        matricula: matricula,
        descricao: descricao,
        email: email,
        telefone: telefone,
        trabalhando: trabalhando,
        tecnologia: tecnologia,
        linkedin: linkedin,
        github: github
    };

    const curriculos = mongodb.db(`${process.env.MONGO_DATABASE}`).collection('curriculoalunos');

    curriculos.insertOne(curriculo).then(
    
    res.status(201).send({
        message: "Curriculo novo Cadastrado",
        body: {
        },
    }));
}


//  Método responsável por listar o 'Curriculo' de determinado usuário no banco Mongodb:

exports.listarCurriculo =  async (req, res) => {
    const matricula = parseInt(req.params.matricula);
    const curriculos = mongodb.db(`${process.env.MONGO_DATABASE}`).collection('curriculoalunos');
    const filter = { matricula: matricula  };
     await curriculos.find(filter).toArray((erro, result) =>{

        res.status(200).send(result);

    }); 
}

//  Método responsável por Atualizar o 'Curriculo' de determinado usuário no banco Mongodb:

exports.atualizarCurriculo =  async (req, res) => {
    const matricula = parseInt(req.params.matricula);
    const {descricao, email, telefone, trabalhando, tecnologia, linkedin, github} = req.body;
    const item = {
        matricula: matricula,
        descricao: descricao,
        email: email,
        telefone: telefone,
        trabalhando: trabalhando,
        tecnologia: tecnologia,
        linkedin: linkedin,
        github: github
    };
    const update = {$set: item};
    const filter = {matricula: matricula};
    const curriculos = mongodb.db(`${process.env.MONGO_DATABASE}`).collection('curriculoalunos');
    curriculos.updateOne(filter, update).then( res.status(201).send({
        message: "Curriculo Atualizado",
        body: {
        },
    }));
}


//  Método responsável por deletar o 'Curriculo' de determinado usuário no banco Mongodb:
exports.deleteCurriculo =  async (req, res) => {

    const matricula = parseInt(req.params.matricula);
    const curriculos = mongodb.db(`${process.env.MONGO_DATABASE}`).collection('curriculoalunos');
    const filter = {matricula: matricula};
    const result = await curriculos.deleteOne(filter);
    res.status(201).send({
        message: result.deletedCount + " documentos Removidos",
        body: {
        },
    });
}