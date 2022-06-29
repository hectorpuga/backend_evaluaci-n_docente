var x1 = require('excel4node');
var path = require('path');

var getExcel=async(req=request, res) =>{
     //Inicialización de Libro de trabajo del archivo Excel

     const total =req.params.total;
     var wb = new x1.Workbook();
   
     //Inicializacion de Hoja de trabajo del archivo Excel
     var ws = wb.addWorksheet('Evaluación');

     //Esta libreria nos permite colocarle estilos a las celdas

     //Estilo normal
     var style = wb.createStyle({
          font:{
               color: '#040404',
               size: 12,
          }
     });

     //Estilo verde
     var greenS = wb.createStyle({
          font: {
               color: '#388813',
               size: 12,
          }
     });
     ws.cell(1, 1).string("Maestro").style(greenS);
     ws.cell(1, 2).string("Materia").style(greenS);
for (let i = 0; i < total; i++) {
     ws.cell(1, (3+i)).string("Pregunta "+i+1).style(greenS);
     ws.column(i).setWidth(25);
       
}



     console.log("-> Excel generado!!!");

     //Lugar de almacenamiento del excel generado anteriormente
     const pathExcel = path.join(__dirname,'archivo','Reporte Evaluación Docente.xlsx');

     //Aqui se escribe el archivo excel en la ubicacion de Almacenamiento especificada anteriormente
     wb.write(pathExcel, function(err, stats){
          if(err){
               console.error(err);
          }else{
               function downloadFile(){
                    res.download(pathExcel);
               }
               //Descarga del archivo excel
               downloadFile();
               return false;
          }
     });
};

module.exports={
     getExcel
   
};