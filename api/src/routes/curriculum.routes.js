const router = require('express-promise-router')();
const curriculumController = require('../controllers/curriculum.controler');


// Rota responsável por criar um novo 'currículo': (POST): localhost:3000/api/curriculo
router.post('/curriculo/:id', curriculumController.criarCurriculo);
// Rota responsável por listar  um 'currículo' pelo 'Id': (GET): localhost:3000/api/curriculo/:id
router.get('/curriculo/:id', curriculumController.listarCurriculo);
// Rota responsável por atualizar um  'currículo' pelo 'Id' : (GET): localhost:3000/api/curriculo/:id
router.put('/curriculo/:id', curriculumController.atualizarCurriculo);
// Rota responsável por deletar um 'currículo' pelo 'Id': (DELETE): localhost:3000/api/curriculo/:id
router.delete('/curriculo/:id', curriculumController.deleteCurriculo);

module.exports = router;