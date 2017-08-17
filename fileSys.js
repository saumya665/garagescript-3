/// Printing all file names except your name in files.txt 

const fs= require('fs');

const fileSys=(err,files)=>{
   let names="";
   files.forEach((eachName)=>{
    if (eachName != 'bharath'){
      names = names+  ' ' + eachName;
    }
  });
   fs.writeFile('/home/bharath/gitcode/garagescript/files.txt',names+ "\n");
};

fs.readdir('/home',fileSys);
