// import {connect, Schema, model} from "mongoose";
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://siddamsettysumanth2003:0pxKNAxEfszvNweI@cluster0.ydcevt9.mongodb.net/Nss?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
  console.log("connected to DB");
}).catch((err)=>{
  console.log(err.message);
})


const eventSchema = new mongoose.Schema({
   Event:{
     type:String,
     required:true
    },
    Title:{
      type:String,
      required:true
    },
    Image:{
    type:String
    },
    pdf:{
      type:String
    }
  })

  const events = mongoose.model("events",eventSchema);

  const upeventSchema = new mongoose.Schema({
    Event:{
      type:String,
      required:true
     },
     Title:{
       type:String,
       required:true
     },
     Image:{
      data:Buffer,
     contentType:String
     },
     Date:{
       type:String
     }
   })

   const upevents = mongoose.model("upevents", upeventSchema)

   const expSchema = new mongoose.Schema({
    Name:{
      type:String,
      required:true
     },
     Batch:{
       type:String,
       required:true
     },
     Exp:{
     type:String,
     required:true
     }

   })
   const experience = mongoose.model("experience",expSchema)

   const imageSchema = new mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    event:{
      type:String,
      required:true
    },
    image:{
      data:Buffer,
      contentType:String
    },
  
   })

   const image = mongoose.model("imagestore",imageSchema)

   const pdfSchema = new mongoose.Schema({
    name:{
      type:String,
      required:true
    },
   
    pdf:{
      data:Buffer,
      contentType:String
    }
  
   })

   const pdf = mongoose.model("imagepdf",pdfSchema)

   const sneakSchema = new mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    image:{
      data:Buffer,
      contentType:String
    }
  
   })
   const sneakpeak = mongoose.model("sneakpeak",sneakSchema)

  module.exports =  {events, upevents,experience,image,pdf,sneakpeak};

