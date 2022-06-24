const {Schema,model}=require('mongoose');


const UsuarioSchema=Schema({

    nombre:{
        type:String,
        required:[true,'El nombre es obligatorio']},

    correo:{
        type:String,
        unique:true,
        required:[true,'El correo es obligatorio']
    },
    password:{
        type:String,
        required:[true,'La contraseña es obligatoria']
    },
    user:{
        type:String,
    },

    rol:{
        type:String,
        required:true,
        enum:['ADMIN_ROLE','USER_ROLE']
    },

    maestros:{
        type:Array

    },

    estado:{
        type:Boolean,
        default:true
    },



});


UsuarioSchema.methods.toJSON=function(){
    const {_id,__v,password,...usuario}=this.toObject();

    usuario.uid=_id;
    
    return usuario;
}

module.exports=model('Usuario',UsuarioSchema);