const fs= require('fs');

const fileSys=(err,files)=>{
  files.forEach(printOtherNames);
}
const printOtherNames=(eachName)=>{
  if (eachName != 'bharath'){
    fs.appendFile('/home/bharath/gitcode/garagescript/files.txt',eachName+ "\n");
  }
}
fs.readdir('/home',fileSys);
