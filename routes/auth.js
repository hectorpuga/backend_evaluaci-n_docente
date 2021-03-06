const {Router}=require('express');
const {check}=require('express-validator');
const { login } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');


const router= Router();

router.post('/login',[
    check('user','El usuario debe de ser de 8 caracteres').not().isEmpty().isLength(8),
    check('password','La contraseña es obligatoria').not().isEmpty(),
  validarCampos

],login)

module.exports=router;