const {Schema,model}=require('mongoose');


const EncuestaSchema=Schema({
    "encuesta":{
        type:Array
    }

});


module.exports=model('Encuesta',EncuestaSchema);