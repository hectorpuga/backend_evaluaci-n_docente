const {Schema,model}=require('mongoose');


const CarreraSchema=Schema({

    nombre:{
        type:String,
        required:[true,'El nombre es obligatorio']},
    descripcion:{
        type:String,
        default:'Academia de ciencias basicas'
       },


});


module.exports=model('Carrera',CarreraSchema);