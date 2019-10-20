
//imports
var math = require("./myMathLib");


console.log("Hello from NodeJS");//in CMD, type node node.js

//create helloMe function
//console log: Hello & Welcome NAMEHERE
function helloMe(){
    var name = "William";
    console.log("Hello & Welcome " + name);
}

// function lowerNumber(num1, num2){
//     if(num1<num2) return num1;
//     else return num2;
// }

// function sum(num1,num2){
//     return num1 + num2
// }

// function divide(num1,num2){
//     if(num1 == 0 || num2 == 0) return 0;
//     return num1 / num2;//this is done if the 0 is not hit
    
// } //ALL THIS HAS BEEN TRANSFERED TO myMathLib.js
//All math now must be started with "math."

function printSomeEvens(howMany){

    var printed = 0;
    for(var i=0; printed < howMany ; i++){ 

        if(printed < howMany){
            if(math.isItEven(i)){
                console.log(i);
                printed += i;
            }
        }
    }
}


function init(){
    
    helloMe(); // Hello & Welcome, NAMEHERE

    var res = math.lowerNumber(9,10);
    console.log(res); //9
    
    var res2 = math.sum(21,21);
    console.log(res2); //42

    var res3 = math.divide(10,2); // 5
    var res4 = math.divide(10,0); // Infinity
    var res5 = math.divide(0,40); //0
    console.log(res3);
    console.log(res4);
    console.log(res5);

   
    console.log(math.version());
    var nums = [1912,289,12398,2340970,123409,0987123];
    var low = math.lowestInArray(list);
    console.log(nums);
    var res6 = math.isItEven();

    console.log(low);

    printSomeEvens(4);
    
}


init();





/**
 * 
 * Console tricks and commands
 * 
 * WIN:
 * on file explorer address bar, type cmd + Enter
 * 
 * Mac / Linux:
 * Open Terminal, type cd
 * drag the folder onto the terminal
 * press enter
 * 
 * 
 * cd = change directory
 * cls = clear screen
 * 
 */