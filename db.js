// mongodb-connect.js

const mongoose = require('mongoose');
require('dotenv').config();

// Replace with your MongoDB connection string

 //const mongoURI = ''; // Local MongoDB
 const mongoURI=process.env.DB_URL//mongodb atlas
// const mongoURI = 'your_mongodb_atlas_connection_string'; // For MongoDB Atlas

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('✅ Connected to MongoDB successfully!');
})
.catch((err) => {
    console.error('❌ Failed to connect to MongoDB:', err);
});
const db=mongoose.connection;
db.on('connect',()=>{
    console.log("database is connected");
});
db.on('disconnect',()=>{
    console.log("database is disconnected");
});
db.on('error',()=>{
    console.log("error in database connection");
});

// export
module.exports=db;

