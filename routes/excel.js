
const {Router}=require('express');
const { getExcel } = require('../controllers/excel');



const router= Router();

router.get('/:total',getExcel);

module.exports=router;