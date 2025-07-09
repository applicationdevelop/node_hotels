const person=require('./../models/person');
const express=require('express');
const router=express.Router();
router.post('/',async(req,resp)=>{
try{
const data=req.body;// accessing data in body container

// create a new peron
const newperson=new person(data);

// save person data
const savedperson=await newperson.save();
console.log("data saved",savedperson);
resp.status(200).json(savedperson);
}
catch(err){
    console.log(err);
resp.status(500).json({error:'internal server error'});
}
})

router.get('/',async(req,res)=>{
    try{
        const data=await person.find();
        console.log("data fetch");
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"internal error"});
    }
})
router.put('/:id',async(req,res)=>{
    try{
        const personid=req.params.id;
        const persondata=req.body;
        const data=await person.findByIdAndUpdate(personid,persondata);

        if(!data){
            return res.status(404).json({error:"data not found"});
        }

        console.log("data update");
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"internal error"});
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const personid=req.params.id;
        const response=await person.findByIdAndDelete(personid);
        if(!response){
            res.status(404).json({error:"data not found"});
        }
        console.log("data deleted");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"internal error"});
    }
})

module.exports=router;
