
require('dotenv').config();
const { MongoClient, ObjectID, ObjectId } = require('mongodb');

const mongodb = new MongoClient(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`,
    { useUnifiedTopology: true });

    mongodb.connect(
        console.log("Base de Dados no Mongodb nosql conectado com sucesso!!")
);

//  Método responsável por criar o 'Curriculo' no banco Mongodb:
exports.criarCurriculo =  async (req, res) => {
    const id = parseInt(req.params.id);
    const {descricao, email, telefone, linkedin, github} = req.body;
    const curriculo = {
        id: id,
        descricao: descricao,
        email: email,
        telefone: telefone,
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
    const id = parseInt(req.params.id);
    const curriculos = mongodb.db(`${process.env.MONGO_DATABASE}`).collection('curriculoalunos');
    const filter = { id: id  };
    await curriculos.find(filter).forEach( item => 
        res.status(200).send({item}));
}

//  Método responsável por Atualizar o 'Curriculo' de determinado usuário no banco Mongodb:

exports.atualizarCurriculo =  async (req, res) => {
    const id = parseInt(req.params.id);
    const {descricao, email, telefone, linkedin, github} = req.body;
    const item = {
        id: id,
        descricao: descricao,
        email: email,
        telefone: telefone,
        linkedin: linkedin,
        github: github
    };
    const update = {$set: item};
    const filter = {id: id};
    const curriculos = mongodb.db(`${process.env.MONGO_DATABASE}`).collection('curriculoalunos');
    curriculos.updateOne(filter, update).then( res.status(201).send({
        message: "Curriculo Atualizado",
        body: {
        },
    }));
}


//  Método responsável por deletar o 'Curriculo' de determinado usuário no banco Mongodb:
exports.deleteCurriculo =  async (req, res) => {

    const id = parseInt(req.params.id);
    const curriculos = mongodb.db(`${process.env.MONGO_DATABASE}`).collection('curriculoalunos');
    const filter = {id: id};
    const result = await curriculos.deleteOne(filter);
    res.status(201).send({
        message: result.deletedCount + " documentos Removidos",
        body: {
        },
    });
}