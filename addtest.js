const add=require('./add.js');

const addTest=(a,b,res)=>{
  if (add(a,b)==res){
    console.log("Test case passed!!");
  }
  else{
  console.log("Failed");
  }
}  

addTest(2,3,5);

