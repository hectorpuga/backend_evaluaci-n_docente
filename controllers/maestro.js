const { response } = require("express");
const Maestro=require('../models/maestro')


const maestroPost=async(req,res=response)=>{

    const {nombre,especialidad,respuestaAlumnos}=req.body;
    const maestro=Maestro({nombre,especialidad,respuestaAlumnos});

    maestro.save();
    res.json({
     maestro
     })
}

const maestroGet=async(req=request, res=response)=>{

    const {limite=5,desde=0}=req.query;
    const query={estado:true};
   
   

    const [total,maestros]=await Promise.all([
        Maestro.countDocuments(query),
        Maestro.find(query).skip(desde).limit(Number(limite))
      ]);
    

    res.json({
        total,
    maestros,
   
    })};

    const maestroPut= async (req, res=response)=>{ 
        const id =req.params.id;

        const {_id,...resto}=req.body;

       

        const maestro= await Maestro.findByIdAndUpdate(id,resto);

        res.json({
            maestro
        })
      }
    const maestroDelete= async(req, res=response)=>{

        const {id}=req.params;

      //const usuario=await Usuario.findByIdAndDelete(id);
      const maestro=await Maestro.findByIdAndUpdate(id,{estado:false})
     
        res.json({
           maestro
        })
       
      };


module.exports={
    maestroPost,
    maestroGet,
    maestroPut,
    maestroDelete
};