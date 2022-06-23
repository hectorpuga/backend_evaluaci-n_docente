const { response } = require("express");
const Carrera=require('../models/carrera')


const carreraPost=async(req,res=response)=>{
    const {nombre,descripcion}=req.body;

    const carrera=Carrera( {nombre,descripcion});

    carrera.save();

    res.json({
     carrera
     })
}
const carreraGet=async(req=request, res=response)=>{

    const {limite=5,desde=0}=req.query;

    const [total,carreras]=await Promise.all([
        Carrera.countDocuments(),
        Carrera.find().skip(desde).limit(Number(limite))
      ]);
    

    res.json({
       total,
       carreras
    })};

    const carreraPut= async (req, res=response)=>{ 
        const id =req.params.id;

        const {_id,...resto}=req.body;

        const carrera= await Carrera.findByIdAndUpdate(id,resto);
        res.json({
            carrera
      })}
    const carreraDelete= async(req, res=response)=>{
        const {id}=req.params;

        const carrera=await Carrera.findByIdAndDelete(id);
       
        res.json({
          carrera
        })
      };


module.exports={
    carreraPost,
    carreraGet,
    carreraPut,
    carreraDelete
};