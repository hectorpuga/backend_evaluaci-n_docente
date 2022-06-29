const express = require('express')
const cors=require('cors');
const { dbConnection } = require('../database/config');

class Server{

    constructor(){
        this.app = express()
        this.port=process.env.PORT
        this.usuariosPath='/api/usuarios';
        this.authPath='/api/auth';
        this.preguntasPath='/api/encuesta';
        this.maestrosPath='/api/maestro';
        this.carreraPath='/api/carrera';
        this.excelPath='/api/excel';
        


        
        //Conectar a base datos
        this.conectarDB();
        //Middleweres
        this.middlewares();

        //Rutas de mi aplicación
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        //CORS
        this.app.use(cors())

        //Lectura y parseo del body

        this.app.use(express.json());



        //Direcctorio publico
        this.app.use(express.static('public'))
    }


    routes(){

        this.app.use(this.authPath,require('../routes/auth'));
        this.app.use(this.usuariosPath,require('../routes/usuarios'));
        this.app.use(this.preguntasPath,require('../routes/encuesta'));
        this.app.use(this.maestrosPath,require('../routes/maestro'));
        this.app.use(this.carreraPath,require('../routes/carrera'));
        this.app.use(this.excelPath,require('../routes/excel'));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en puerto',this.port)
        });
    }

}

module.exports= Server;