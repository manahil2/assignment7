//1
let city = prompt("Enter city name: ");
city = city.toLowerCase();
if(city==="karachi"){
    document.write("Welcome to city of lights"+ "<br>");
}
else{
    document.write("Welcome to " + city + "<br>")
}

//2
let gender = prompt("Please Enter Your gender ").toLowerCase();
if(gender === "male"){
    alert("Good Morning Sir")
}
else{
    alert("Good Morning Mam!")
}

//3
let color = prompt("Please enter the traffic signal color (Red, Yellow, Green):");
if (color === "red") {
    alert("Must Stop");
  } else if (color === "yellow") {
    alert("Ready to move");
  } else if (color === "green") {
    alert("Move now");
  } else {
    alert("Invalid input. Please enter Red, Yellow, or Green.");
  }

  //4
let remainingFuel = prompt("Please Enter the remaining fuel in your car");
if (remainingFuel < 0.25) {
   alert("Please refill the fuel in your car");
} else {
       alert("You have enough fuel");
   }

//5
//a
var a = 4; 
if (++a === 5){ 
alert("given condition for variable a is true"); 
} 
//b
var b = 82; 
if (b++ === 83){ 
alert("given condition for variable b is true"); 
} 
//c
var c = 12; 
if (c++ === 13){ 
alert("condition 1 is true"); 
} 
if (c === 13){ 
alert("condition 2 is true"); 
} 
if (++c < 14){ 
alert("condition 3 is true"); 
} 
if(c === 14){ 
alert("condition 4 is true"); 
} 
//d
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
alert("The cost equals"); 
}
//e
if (true){ 
    alert("True"); 
    } 
    if (false){ 
    alert("False"); 
    } 
//f
if("car" < "cat"){ 
    alert("car is smaller than cat"); 
    }

//6
let obtained1 = parseFloat(prompt("Enter marks obtained in subject 1"));
let obtained3 = parseFloat(prompt("Enter marks obtained in subject 3"));
let obtained2 = parseFloat(prompt("Enter marks obtained in subject 2"));
let totalobtained = obtained1+obtained2+obtained3;
let totalmarks = parseFloat(prompt("Enter Total marks:"));
let percentage = (totalobtained*100)/totalmarks;

let grade, remarks;
if (percentage >= 80) {
  grade = "A-one";
  remarks = "Excellent";
} else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
} else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve";
} else {
  grade = "Fail";
  remarks = "Sorry";
}

document.write("<h2>MarkSheet</h2>");
document.write("Total Marks: " + totalmarks + "<br>");
document.write("Marks Obtained: " + totalobtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks+ "<br>");

//7
let secretNumber = 4;
let userGuess = prompt("Guess the number between 1 to 10")
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
  } else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    alert("Close enough to the correct answer");
  } else {
    alert("Try again! The secret number was " + secretNumber);
  }

//8
let number = prompt("Write a number");
if(number%3===0){
    document.write("the number is divisible by 3"+ "<br>");
}

//9
let num = parseInt(prompt("Enter a number:"));
if (num % 2 === 0) {
  alert("The number " + num + " is even.");
} else {
  alert("The number " + num + " is odd.");
}

//10
let temperature = parseFloat(prompt("Enter the temperature:"));
if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The Weather today is Normal.");
} else if (temperature > 20) {
  alert("Today’s Weather is cool.");
} else if(temperature > 10) {
  alert("OMG! Today’s weather is so Cool.");
}else{
    alert("It's very cold outside")
}

//11
let firstnum = parseFloat(prompt(("Enter the first number")));
let secondnum = parseFloat(prompt(("Enter the second number")));
let operation = prompt(("Enter operation(+,-,*,/,%)"));
let result;
if(operation==="+"){
  result = firstnum + secondnum;
}
else if(operation==="-"){
  result = firstnum - secondnum;
}
else if(operation==="*"){
  result = firstnum * secondnum;
}
else if(operation==="/"){
  result = firstnum / secondnum;
}
else if(operation==="%"){
  result = firstnum % secondnum;
}
document.write("The result is : "+result+ "<br>" )