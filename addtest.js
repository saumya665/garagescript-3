const add=require('./add.js');

const addTest=(num1,num2,res)=>{
  if (add(num1,num2)==res){
    console.log("Test case passed!!");
  }
  else{
  console.log("Failed");
  }
}  

addTest(2,3,5);

