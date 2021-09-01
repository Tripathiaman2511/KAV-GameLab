import express from 'express';
import bodyParser from 'body-parser';
import  mongoose from 'mongoose';
import cors from 'cors';

const app=express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

const CONNECTION_URL=""
const PORT=process.env.PORt || 5000;

Mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
   .then( ()=>app.listen(PORT,()=>console.log('server running on port: '+PORT)))
   .catch((error)=>console.log(error.message));

  //no warning in console
  Mongoose.set('useFindAndModify', false);
