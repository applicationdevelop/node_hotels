const mongoose=require('mongoose');

// create schema of person
const personschema= new mongoose.Schema({
    name:{
        type:String,
        requried: true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:["chef","waiter","manager"],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    salary:{
        type:Number,
        required:true
    }

})
// create person model
const person=mongoose.model('person',personschema);
module.exports=person;
