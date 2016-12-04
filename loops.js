/*  Do while Loops*/

var x = prompt("Enter the number:");
var y = prompt("Enter the exponent");
result = 1;
counter = 0;


do{
    result = result * x;
    counter +=1;
}while(counter<y);
console.log("Square is:" +result);



/*while loop structure*/

var num = 1;
var counter = 0;
while (counter < 8) {
    num = num * 3;
    cunter +=1;
}
console.log(num);


//while loop for squaring number


var x = prompt("Enter the number");
var y = prompt("Enetr the exponent") ;

result = 1;
counter = 0;

while (counter<y)
{
    result = result*x;
    counter +=1;
}
cossole.log(result);

//basic if -else

var myNumber = Number(prompt("Enter any number",""));
if(!isNaN(myNumber)) {
    alert("Your number is square root of " +myNumber*myNumber);
}
else {
    alert("You didnt entered a correct number!!!");
}

//do while basic

do {
    var x = prompt("Enter your name");
}while(!x);
console.log(x);

//while for squaring number


var x = prompt("Enter the number");
var y = prompt("enter the exponent");
var counter = 0;
var result = 1;

while(counter < y)
{
    result = result * x;
    counter +=1;
}
console.log(result);


//square of 2 by for loop

result = 1;
for (var i=0; i<10; i++) {
    result = result * 2;
}
console.log(result);

//sqare of number by for loop

result = 1;
var x = prompt("Enter the number");
var y = prompt("Enter the exponent");

for(i=0;i<y;i++) {
    result = result * x;
}
console.log(result);result = 1;
var x = prompt("Enter the number");
var y = prompt("Enter the exponent");

for(i=0;i<y;i++) {
    result = result * x;
}
console.log(result);


//printing a chess square

var size = 8;

var board= " ";

for (var i = 0; i < size; i++) {
    for (var j = 0; j<size; j++) {
	if ((i+j)%2 == 0)
	    board += " ";
	else
	    board +="#";
    }
    board+="\n";
}


//function with two parameters

var result = 1;

var power = function(base, exponent) {
    for (var i=0;i<exponent;i++)
	result = result*base;
    return result;
}
console.log(power(2,10));


//simple function

function writeUserWelcome(userName){
    console.log("Welcome to my website " + userName + "<br />");
    console.log("Hope you enjoy it!");
}

writeUserWelcome("vaibhav");
