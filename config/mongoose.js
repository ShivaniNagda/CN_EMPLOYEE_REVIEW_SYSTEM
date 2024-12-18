const mongoose = require('mongoose');

const DB_URL = 'mongodb+srv://shivaninagda1997:Shivani1234@cluster0.pxizl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

// These set of line can be written in async await fashion, but I have followed the documentation. 
const connectUsingMongoose = async()=>{
     try{
         await mongoose.connect(DB_URL, {
             useNewUrlParser: true,
             useUnifiedTopology: true
         });
         console.log("Mongodb connected using mongoose");
         
     }catch(err){
         console.log("Error while connecting to db");
         console.log(err);
     }
 }
 
module.exports = connectUsingMongoose;