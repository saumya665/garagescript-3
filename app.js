const express = require('express');
const app=express();
const fs=require('fs');

const handle=(req,res)=>{
  res.send("Working!!");
}

app.get('/hi',handle);
app.listen(3609);
app.use(express.static('public'));
