const {Schema,model}=require('mongoose');


const EncuestaSchema=Schema({

    pregunta:{
        type:String,
        required:[true,'La pregunta es requeridad']},

});


module.exports=model('Encuesta',EncuestaSchema);