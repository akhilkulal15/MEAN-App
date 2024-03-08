import data from "../models/model.js";

class dataController{
    constructor(){}
    async getAllData(req,res){
        try{
            const datas = await data.find();
            res.status(200).json(datas);
        }
        catch(err){
            console.log(err);
        }
    }

    async getData(req,res){
        try{
            const datas = await data.find({$or:[{'country':req.query.country},{'intensity':req.query.intensity}]});
            res.status(200).json(datas);

        }
        catch(err){
            res.status(500).json(err);
        }
    }

    async getDistinctData(req,res){
        try{
            const datas = await data.distinct(req.params.id);
            res.status(200).json(datas)
        }
        catch(err){
             console.log(err);
        }
    }
}

export default dataController;

