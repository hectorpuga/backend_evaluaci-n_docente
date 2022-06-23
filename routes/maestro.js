const {Router}=require('express');
const { check } = require('express-validator');
const { maestroPost,maestroGet,maestroPut,maestroDelete} = require('../controllers/maestro');



const router= Router();

router.post('/',[
    check('pregunta','La pregunta es obligatoria').not().isEmpty(),
],maestroPost)


router.get('/',[
    check('pregunta','La pregunta es obligatoria').not().isEmpty(),
],maestroGet)


router.put('/:id',[
    check('pregunta','La pregunta es obligatoria').not().isEmpty(),
],maestroPut)

router.delete('/:id',[
    check('pregunta','La pregunta es obligatoria').not().isEmpty(),
],maestroDelete)

module.exports=router;