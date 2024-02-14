
//example of regular string and literal string
var name = "Jorden";
var lastName = "Dubreuil";
var message = `hello welcmome to the javascript lesson ${name} ${lastName}`;
//console.log(message);
//alert(message)
//example of traditonal string concatination

var message2 = "Hello " + name + " " + lastName + " Welcome to the Javascript Lesson"
//console.log(message2)
outputToConsole(message2)
var addProblem = 12 + 4
// console.log(addProblem)
outputToConsole(addProblem)

function outputToConsole(argue){
    console.log(argue);
}

//document.getElementById("header").innerHTML = message2;
//var myButton = document.querySelector("button");
//event listner to button.
//myButton.addEventListener("click", changePage);
//function changePage(){
    
    //document.querySelector("h1").innerHTML = message;
    //document.querySelector("body").style.backgroundColor = "#ff0000";
//}
//prompt example
//var yourName = prompt("Please Enter Your Name:");
//document.querySelector('h1').innerHTML = `Hello ${yourName} thanks for entering your name`

var dataPromptButton = document.getElementById('promptButton');
dataPromptButton.addEventListener('click', dataPrompt);

function dataPrompt(){
    alert( `my name is ${name}`);
    var yourName = prompt("Please Enter Your Name:");
    alert(`Hello: ${yourName} nice to met you.`);

    var yourLastName = prompt("Please Enter your Last Name:");
    alert(`Hello your full name is ${name} ${yourLastName}`);

    var firstNumber = prompt("LEts add some numbers, add first number")
    var secondNumber = prompt("LEts add some numbers, add second number")

    var result = Number(firstNumber) + Number(secondNumber);
    alert(`the result is ${result}`);


var documentBody = document.querySelector('body');

var outputData = document.createElement('p');
outputData.innerHTML = `your name is ${yourName} ${yourLastName}\nThe result of your numbers is ${result}`;
documentBody.appendChild(outputData)
}
