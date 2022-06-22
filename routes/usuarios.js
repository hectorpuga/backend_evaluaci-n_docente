const {Router} =require('express');
const {check}=require('express-validator')
const { usuariosPut, usuariosPatch, usuariosPost, usuarioDelete,usuariosGet} = require('../controllers/usuarios');
const { esRoleValido, emailExiste ,existeUsuarioPorId} = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { esAdminRole } = require('../middlewares/validar-roles');

const router= Router();

router.get('/', usuariosGet)
router.put('/:id',[
    check('id', 'No es un Id válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom(esRoleValido),
    validarCampos
], usuariosPut)
router.patch('/',usuariosPatch)
router.post('/',[
check('nombre','El nombre es obligatorio').not().isEmpty(),
check('password','El password es obligatorio y mas de  letras').isLength({min:6}),
check('correo','El correo no es valido').isEmail(),
check('correo').custom(emailExiste),
// check('rol','No es un rol valido').isIn(['ADMIN_ROLE','USER_ROLE']),

check('rol').custom(esRoleValido),
validarCampos
]
,usuariosPost)
router.delete('/:id',  
[

    validarJWT,
    esAdminRole,
    check('id', 'No es un Id válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
   
    validarCampos

],usuarioDelete)

module.exports=router;