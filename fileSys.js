const fs= require('fs');

const fileSys=(err,files)=>{
  files.forEach(printOtherNames=(ele)=>{
    if (ele != 'bharath'){
      fs.writeFile('/home/bharath/gitcode/garagescript/files.txt',files+ "\n");
    }
  });
}

fs.readdir('/home',fileSys);
