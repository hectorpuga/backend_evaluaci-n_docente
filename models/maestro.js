const {Schema,model}=require('mongoose');


const MaestroSchema=Schema({

    nombre:{
        type:String,
        required:[true,'El nombre es obligatorio']},
    especialidad:{
        type:Array,
        required:[true,'La especialidad obligatoria']},
        estado:{
            type:Boolean,
            default:true
        },
    respuestaAlumnos:{
        type:Array,
    },


});


module.exports=model('Maestro',MaestroSchema);