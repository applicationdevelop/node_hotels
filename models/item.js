const mongoose=require('mongoose');
 const itemschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    sale:{
        type:String,
        required:true
    }
 })

 const item=mongoose.model('item',itemschema);
 module.exports=item;