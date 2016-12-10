
var myString ="Hello Vaibhav,How are you vaibhav";
var stringPos = myString.indexOf("vaibhav");
var stringCut = myString.substring(0,5);
alert(stringCut);
alert(stringPos);


var myString ="Hello Vaibhav,How are you vaibhav";
var stringPos = myString.indexOf("vaibhav");
var stringCut = myString.subString(0,5);
alert(stringCut);
alert(stringPos);


var myString ="Hello Vaibhav,How are you vaibhav";
var stringPos = myString.indexOf("vaibhav");
alert(stringPos);


function (fn) {
fn("Hello World");
}
fn(alert);

var degFahren = [212, 32, 178];
var degCel=[];
var i;
for(i=0;i<=2;i++) {
		  degCel[i]=(5/9)*(degFahren[i]-32);}

		  for(i=2;i>=0;i--) {
  console.log("Value at " +i "is" +degFahren[i] +"Degrees fahrenheit");

  console.log("Which is " +degCel[i] +"degrees Celcius");
  }

  
var myString = "";
var charcode;

for(charcode=65;charcode<=90;charcode++)
{
    myString = myString + String.fromCharCode(charcode);
}
console.log(myString);
VM6376:8 ABCDEFGHIJKLMNOPQRSTUVWXYZ


var myString = "";
var myChar;

for (myChar=90; myChar<=115;myChar++)
    myString = myString + String.fromCharCode(myChar);
console.log(myString);


var name = prompt("Enter Your name");
var greet = name.trim();
alert("Hello, "+greet);


var names = [];
names[0] = "Vaibhav";
names[1] = "Neelam";
names [2] = "Bhavya";

console.log("The last name is " +names[names.length-1]);
VM29585:6 The last name is Bhavya


var names = [];
names.push("Vaibhav");
names.push("Neelam");
names.push("Bhavya");
names.push("Ujjwal");

var len = names.length;
console.log(len);


var names = [];
names.push("Vaibhav");
names.push("Neelam");
names.push("Bhavya");
names.push("Ujjwal");

var ages = [1, 2, 3, 4, 5];

names = names.join(ages);

console.log(names);

var len = names.length;
console.log(len);


var names = [];
names.push("Vaibhav");
names.push("Neelam");
names.push("Bhavya");
names.push("Ujjwal");

var ages = [1, 2, 3, 4, 5];

names = names.concat(ages);

//names = names.join(ages);

console.log(names);

//var len = names.length;
//console.log(len);
VM33247:13 ["Vaibhav", "Neelam", "Bhavya", "Ujjwal", 1, 2, 3, 4, 5]


var names = ["vaibhhav", "Neelam", "Hello", " Javascript"];
var adderss = ["Pune", "Barshi", "satara", "Mumbai"];

names = names.slice(0,2);
console.log(names);
VM33887:5 ["vaibhhav", "Neelam"];

var array1 = [1,2,3,4,5,6,7,8];
var array2 = ["vaibhav", "shubhad","hello","bhavya"];
array1 = array1.concat(array2);
console.log(array1);
array1.sort();
console.log(array1);


var numbers= [1,2,3,4,5,6,7,8];

function doubleAndAlert(value, index, array) {
    var result = value*2;
    alert(result);
}
numbers.forEach(doubleAndAlert);


undefined


var numbers= [1,2,3,4,5,6,7,8];

function doubleAndAlert(value, index, array) {
    var result = value*2;
    alert(result);
}
numbers.every(doubleAndAlert);


false
var num = [1,2,3,4,5];
var max = Math.max(num);
console.log(max);
VM45013:3 NaN
undefined
var num = [1,2,3,4,5];
var max = Math.max(1,2,3,4,5,100);
console.log(max);
VM45084:3 100
undefined
var num = [1,2,3,4,5];
var max = Math.ceil(10.6);
console.log(max);
VM45669:3 11
undefined
var num = [1,2,3,4,5];
var max = Math.floor(10.6);
console.log(max);
VM45691:3 10
undefined
