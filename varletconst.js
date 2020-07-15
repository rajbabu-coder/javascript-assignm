var fruits = "healthy";
console.log(fruits)
//This var element is used to define a variable in global scope of code block

{
  let fruits = "costly";
  console.log(fruits)
  //This let element is used to define and replace the variable just inside the local scope of code block
}
console.log(fruits)

const name1 = ["Rajbabu","Sai"];
console.log(name1)
name1.push("hananya");
console.log(name1)

name1 = ["hananya","Sai","Rajbabu"];
//This const element is used to hld the defined value to the variable and it cannot change the value.
//It it tends to be changed, then the console view will throw an error message