  
let marks = prompt("Enter the marks :");
if (marks >= 90) {
    console.log(`Marks are ${marks} and the grade is A`);
}
else if (marks >= 70){
    console.log(`Marks are ${marks} and the grade is B`);
}
else if (marks >= 50) {
    console.log(`Marks are ${marks} and the grade is C`);
}
else {
    console.log(`Marks are ${marks} and the grade is U(Fail)`)
}
//This is using the conditional statements

let mark = prompt("Enter the marks :");
let grade = (mark >= 90 ) ? `Marks are ${mark} and the grade is A` : (mark >= 70) ? `Marks are ${mark} and the grade is B` : (mark >= 50) ? `Marks are ${mark} and the grade is C` : `Marks are ${mark} and the grade is U(Fail)`;
console.log(grade);
//This is using the ternary operator