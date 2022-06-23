const { response } = require("express");
const Usuario=require('../models/usuario')
const bcryptjs= require('bcryptjs');
const { generaJWT } = require("../helpers/generar_jwt");


const login=async(req,res=response)=>{

    const {user,password}=req.body;

    try {

        // Verificar si el email existe 
        const usuario= await Usuario.findOne({user});

      

        // Si el usuario est+a activo


        // Verificar la contraseña

      
       

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