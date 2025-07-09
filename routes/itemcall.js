const item=require('./../models/item');
const express=require('express');
const router=express.Router();

router.post('/',async(res,resp)=>{
try{
    const data=res.body;
    const newitem=new item(data);
    const saveddata=await newitem.save();
console.log("data saved",saveddata);
resp.status(200).json(saveddata);
}
catch(err){
    console.log(err);
resp.status(500).json({error:'internal server error'});
}

});

router.get('/',async(res,resp)=>{
    try{
        const data=await item.find();
        console.log("data found");
        resp.status(200).json(data);
    }
    catch(err){
        console.log(err);
        resp.status(500).json('internal error');
    }
});

module.exports=router;