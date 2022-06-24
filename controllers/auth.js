const { response } = require("express");
const Usuario=require('../models/usuario')
const bcryptjs= require('bcryptjs');
const { generaJWT } = require("../helpers/generar_jwt");


const login=async(req,res=response)=>{

   

    try {

        const {user,password}=req.body;

        console.log(user);

        // Verificar si el email existe 
        const usuario= await Usuario.findOne({user});

        if(!usuario){
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - user'
            });
        }
      

        // Si el usuario est+a activo

        if(!usuario.estado){
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - estado: false'
            });
        }

        // Verificar la contraseña

        const validPassword= bcryptjs.compareSync(password, usuario.password);

        if(!validPassword){
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password'
            });
        }
      
       

        // Genera el JWT

        const token= await generaJWT(usuario.id);

        res.json({
            usuario,
            token
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Hable con el administrador"
        });
    }

   
}

module.exports={
    login
};