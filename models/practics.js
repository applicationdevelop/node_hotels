const mongoose=require('mongoose');
const mongooseShema=new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    }
})
const userdata=mongoose.model('userdata',mongooseShema);
//export
module.exports=userdata;