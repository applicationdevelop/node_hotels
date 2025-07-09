
const express=require('express')
const app=express();
const db=require('./db');

const bodyparser=require('body-parser');
app.use(bodyparser.json());
const personroutes=require('./routes/personcall');
const itemroutes=require('./routes/itemcall');
/* const person=require('./models/person');
const item=require('./models/item');
const userdata=require('./models/practics');*/

app.use('/person',personroutes);
app.use('/item',itemroutes);

//listen in port 3000
app.listen(3000,()=>{
console.log("server run in 3000")
})
