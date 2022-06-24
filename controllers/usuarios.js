
const {response,request}=require('express');
const Usuario=require('../models/usuario');
const bcryptjs=require('bcryptjs');



const usuariosGet=async(req=request, res=response)=>{
    //const {q,nombre,apikey,page=1,limit}=query=req.query;

    const {limite=5,desde=0}=req.query;
    const query={estado:true};
   
    const [total,usuarios]=await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query).skip(desde).limit(Number(limite))
      ]);
    res.json({
        total,usuarios
    })};

    const usuariosPost=async(req, res=response)=>{
     

      const {nombre,correo,password,rol,user,maestros}=req.body;

      const usuario=Usuario( {nombre,correo,password,rol,user,maestros});

      //Encriptar la contraseña

      const salt=bcryptjs.genSaltSync();

      usuario.password=bcryptjs.hashSync(password,salt);

      


      //Guardar en BD

     await usuario.save();

     res.json({
      usuario
  });

       
      };

    const usuariosPut= async (req, res=response)=>{

      
        const id =req.params.id;

        const {_id,password,google,correo,...resto}=req.body;

        // TODO validar contra base de datos

       
        if(password){

           //Encriptar la contraseña
      const salt=bcryptjs.genSaltSync();
      resto.password=bcryptjs.hashSync(password,salt);

        }

        const usuario= await Usuario.findByIdAndUpdate(id,resto);

        res.json({
            
            usuario
        })
      }

    const usuarioDelete= async(req, res=response)=>{


      const {id}=req.params;

      //const usuario=await Usuario.findByIdAndDelete(id);
      const usuario=await Usuario.findByIdAndUpdate(id,{estado:false})
      const usuarioAutenticado=req.usuario;

      
        res.json({
           usuario,usuarioAutenticado
        })
      };


    module.exports={usuariosGet,usuariosPost,usuariosPut,usuarioDelete}