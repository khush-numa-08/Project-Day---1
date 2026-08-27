//Grade Calculation (lab work)

let marks: number = 85;
let grade: string;

if(marks >= 90) grade = "A+";
else if(marks >= 80) grade = "A";
else if(marks >= 70) grade = "B";
else if(marks >= 60) grade = "C";
else if(marks >= 40) grade = "D";
else grade = "Fail";

console.log("Marks: ", marks, "Grade:",grade);
document.getElementById("grade")!.innerHTML =
"Grade =" + grade
