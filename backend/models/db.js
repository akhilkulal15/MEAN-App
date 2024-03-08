import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({path:'../data.env'});

var dbConnect = (async ()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/JSONData");
        console.log('Connected to DB');
    }
    catch(err){
        console.log('Error : '+err.message);
    }
})

export default dbConnect;