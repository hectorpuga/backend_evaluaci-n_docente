
const {Schema,model}=require('mongoose');


const RoleSchemas=Schema({
    "rol":{
        type:String,
        required:[true, "El rol es obligatorio"]
    }
});



module.exports=model('Role',RoleSchemas);