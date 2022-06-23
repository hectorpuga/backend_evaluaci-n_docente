const {Router}=require('express');
const { check } = require('express-validator');
const { carreraPost,carreraGet,carreraPut,carreraDelete } = require('../controllers/carrera');



const router= Router();

router.post('/',[
    check('pregunta','La pregunta es obligatoria').not().isEmpty(),
],carreraPost)

router.get('/',[
    check('pregunta','La pregunta es obligatoria').not().isEmpty(),
],carreraGet)


router.put('/:id',[
    check('pregunta','La pregunta es obligatoria').not().isEmpty(),
],carreraPut)

router.delete('/:id',[
    check('pregunta','La pregunta es obligatoria').not().isEmpty(),
],carreraDelete)

module.exports=router;