const {Router}=require('express');
const { check } = require('express-validator');
const { encuestaPost,encuestaGet,encuestaPut,encuestaDelete } = require('../controllers/encuesta');



const router= Router();

router.post('/',[
    check('pregunta','La pregunta es obligatoria').not().isEmpty(),
],encuestaPost)


router.get('/',[
    check('pregunta','La pregunta es obligatoria').not().isEmpty(),
],encuestaGet)


router.put('/:id',[
    check('pregunta','La pregunta es obligatoria').not().isEmpty(),
],encuestaPut)

router.delete('/:id',[
    check('pregunta','La pregunta es obligatoria').not().isEmpty(),
],encuestaDelete)



module.exports=router;