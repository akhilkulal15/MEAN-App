import express from 'express';
import dbConnect from './models/db.js';
//import data from './backend/models/model.js';
//import dataController from './controllers/dataController.js';
import router from './routes/routes.js';
const app = express();

dbConnect();
//const dc = new dataController();

app.use('/',router);
//console.log(data.find({}))
const port = 5000;
app.listen(port,()=>{
    console.log('Listening on port'+port);
})

