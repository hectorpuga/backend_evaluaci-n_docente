const { response } = require("express");
const Encuesta=require('../models/encuesta')


const encuestaPost=async(req,res=response)=>{

    const {encuesta}=req.body;

    const pregunta=Encuesta( {encuesta});

    pregunta.save();

    res.json({
     pregunta
     })
   
}

const encuestaGet=async(req=request, res=response)=>{


    const {limite=5,desde=0}=req.query;

    const [total,preguntas]=await Promise.all([
        Encuesta.countDocuments(),
        Encuesta.find().skip(desde).limit(Number(limite))
      ]);
    

    res.json({
        total,
      preguntas
    })};

    const encuestaPut= async (req, res=response)=>{ 
        const id =req.params.id;

        const {_id,...resto}=req.body;

        const encuesta= await Encuesta.findByIdAndUpdate(id,resto);
        res.json({
            encuesta
        })
      }
    const encuestaDelete= async(req, res=response)=>{
        const {id}=req.params;

        const encuesta=await Encuesta.findByIdAndDelete(id);
       
        res.json({
           encuesta
        })
      };


module.exports={
    encuestaPost,
    encuestaGet,
    encuestaPut,
    encuestaDelete
};