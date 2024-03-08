import express from 'express';
import dataController from '../controllers/dataController.js';
import data from '../models/model.js';

const router = express.Router();
const dc = new dataController();

router.get('/', function(req,res){
    dc.getAllData(req,res);
})

router.get('/',function(req,res){
    dc.getData(req,res);
})

router.get('/:id',function(req,res){
    dc.getDistinctData(req,res)
})
export default router;
