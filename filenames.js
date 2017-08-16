const fs= require('fs');
const express= require('express');
const app= express();

app.listen(3609);

const allFiles= [];
const fileSys=(err,files)=>{
  files.forEach(printOtherNames);
}
const printOtherNames=(eachFile)=>{
  if(eachFile != 'bharath'){
      allFiles.push(eachFile);
  }
}
const handle=(req,res)=>{
  res.send(allFiles);
}
app.get('/',handle);
fs.readdir('/home',fileSys);



