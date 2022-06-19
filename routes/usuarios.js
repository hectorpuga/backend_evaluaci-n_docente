const {Router} =require('express');
const { usuariosPut, usuariosPatch, usuariosPost, usuarioDelete,usuariosGet} = require('../controllers/usuarios');

const router= Router();

router.get('/', usuariosGet)
router.put('/:id', usuariosPut)
router.patch('/',usuariosPatch)
router.post('/',usuariosPost )
router.delete('/',  usuarioDelete)

module.exports=router;