//callbacks
//any function that uses a function as an argument

function greeting(greet){
    console.log(greet);
}

function creatGreeting(fname, functionName){
    var myGreeting = "hello " + fname;
    //greeting(myGreeting);
    //var functionName = greeting;
    functionName(myGreeting);
}


//greeting("Charlie");
creatGreeting("Charlie", greeting);

//**************************************//



//timers//
var myTimer = setInterval(aFunction, 3000);

function aFunction(){
    alert("Paladins are dumb");
}

// click event that will stop timer

document.getElementById('stop').addEventListener('click', function(){
    clearInterval(myTimer);
})

//*****************************************

//Arrays
myDiv = document.getElementById('ary');

var classes = ["Demon Hunter", "Not a paladin", "Warlock"];

// store different elements

//var elements = ["Hello", 7, { message : "stupid paladin"}, true];

myDiv.innerHTML = classes.length;


myString = "<select id='class'>";


//for(var i=0; i < classes.length; i++)
//{
    //myString += "<option>" + classes[1] + "</option>";
//}

classes.forEach(function(el)
{
    //myString += "<option>" + el + "</option>";
    myString += `<option>${el}</option>`;
})

myString += "</select>";
myDiv.innerHTML = myString;

document.getElementById('getIt').addEventListener('click', function{
    alert(document.getElementById('class').value);
})

//*************************************** 
// add to an array

classes.push("hunter");
console.log(classes);

//get the last element
var last = classes.length -1;
HTMLFormControlsCollection.log(classes[last]);

//remove an element from the end
var aVar = classes.pop();
console,log(`${aVar}: ${classes}`);

classes.splice(1,2)
console.log(classes);

