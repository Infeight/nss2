// import express from 'express';
// import cors from 'cors'
// import bodyParser from 'body-parser';
// import events from './mongoose.js';
// import upevents from './mongoose.js'
// import experience from './mongoose.js'
// import image from './mongoose.js'
// import pdf from './mongoose.js'
// import multer from 'multer';
// import path from 'path'
const express = require ('express');
const cors = require ('cors')
const bodyParser = require ('body-parser')
const events = require('./mongoose.js')
const upevents = require ('./mongoose.js')
const experience = require ('./mongoose.js')
const image = require('./mongoose.js')
const pdf = require ('./mongoose.js')
const multer = require('multer')
const path = require ('path')


// import { name } from 'ejs';
const app = express()


// const __dirname = path.resolve()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))


const port = 5001;
app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})

// app.set("view engine", "ejs");
// app.set("views",path.resolve("./views"))

//multer storage
const Storage = multer.diskStorage({
  destination:function(req,file,cb){
   return cb(null,'./uploads')
  },
  filename:(req, file, cb)=>{
    cb(null,`${file.originalname}`);
  }
})
const Storage1 = multer.diskStorage({
  destination:function(req,file,cb){
   return cb(null,'./uploadspdf')
  },
  filename:(req, file, cb)=>{
    cb(null,`${file.originalname}`);
  }
})

const upload = multer({
  Storage
}).single('testImage')


const upload1 = multer({
  Storage
}).single('testpdf')


const upeventupload =  multer({
  Storage
}).single("testImage1")

// app.get('/', function(req, res) {

//   res.sendFile(path.join(__dirname,'./index.html'))



// });
app.get('/', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
})


app.post('/uploadimg' ,(req,res)=>{
  upload(req,res,(err)=>{
    if(err){
      console.log(err)
    }
    else{
      const newImage = new image.image({
        name: req.body.name,
        event:req.body.event,
        image:{
          data: req.file.buffer,
          contentType:'image/png'
        }
      })
      newImage.save()
      .then(()=>{console.log('succesfully uploaded')})
      .catch(err=>{console.log(err)})
     }
  })
  // console.log(req.body)
  // console.log(req.file)
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
})

app.post('/uploadpdf' ,(req,res)=>{
  upload1(req,res,(err)=>{
    if(err){
      console.log(err)
    }
    else{
      const newPdf = new pdf.pdf({
        name: req.body.name,
        pdf:{
          data: req.file.buffer,
          contentType:'pdf'
        }
      })
      newPdf.save()
      .then(()=>{console.log('succesfully uploaded')})
      .catch(err=>{console.log(err)})
     }
  })
  // console.log(req.body)
  // console.log(req.file)
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
})

app.post('/upevents' ,(req,res)=>{
  // console.log(req.body.Image)
  upeventupload(req,res,(err)=>{
    if(err){
      console.log(err)
    }
    else{
      const newUpevent = new upevents.upevents({
        Event: req.body.eventdes,
        Title:req.body.name,
        Image:{
           data: req.file.buffer,
          contentType:'image/png'
        },
        Date:req.body.date
      })
      newUpevent.save()
      .then(()=>{console.log('succesfully uploaded upevents')})
      .catch(err=>{console.log(err)})
     }
  })
  // console.log(req.body)
  // console.log(req.file)
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
})






app.get('/events', async(req,res)=>{
  const event = await image.image.find();
  
  res.send(event)
})
app.get('/eventpdf', async(req,res)=>{
  const eventpdf = await pdf.pdf.find();
  
  res.send(eventpdf)
})

app.get('/upevents', async(req,res)=>{
  const upevent = await upevents.upevents.find();
  res.send(upevent)
})

app.get('/experience', async(req,res)=>{
  const exp = await experience.experience.find();
  res.send(exp)
})

app.post("/experience", async(req,res)=>{
  const exp = {
    Name:req.body.Name,
    Batch:req.body.Batch,
    Exp: req.body.Exp
  }

  await experience.experience.insertMany(exp)
})

app.post('/deleteevent',async(req,res)=>{
 const event = {name:req.body.name}
  const allevents = await image.image.findOne(event);
  if(allevents){
   await image.image.deleteOne(allevents)
   
   console.log("deleted")
  }


  res.redirect('/')
})

app.post('/deletepdf',async(req,res)=>{
  const event = {name:req.body.name}
   const allevents = await pdf.pdf.findOne(event);
   if(allevents){
    await pdf.pdf.deleteOne(allevents)
    
    console.log("deleted")
   }
 
 
   res.redirect('/')
 })

 app.post('/deleteupevent',async(req,res)=>{
  const event = {Title:req.body.Title}
   const allevents = await upevents.upevents.findOne(event);
   if(allevents){
    await upevents.upevents.deleteOne(allevents)
    
    console.log("deleted")
   }
 
 
   res.redirect('/')
 })

 app.post('/deleteexp',async(req,res)=>{
  const event = {Name:req.body.Name}
   const allevents = await experience.experience.findOne(event);
   if(allevents){
    await experience.experience.deleteOne(allevents)
    
    console.log("deleted")
   }
 
 
   res.redirect('/')
 })

 module.exports = app;