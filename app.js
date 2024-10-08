const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const sequelize=require('./util/database');
const appointmentRoutes = require('./routes/appointment')

const app=express();

app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api',appointmentRoutes)

app.use((req,res)=>{
    res.status(404).json({success:false,message:'Page not found'})
})

sequelize
  .sync()
  .then((res)=>{
    app.listen(3000)
  })
  .catch((err)=>{
    console.log(err)
  })