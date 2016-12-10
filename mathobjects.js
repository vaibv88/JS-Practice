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

var diceRoll;
for(diceRoll=0;diceRoll<=10;diceRoll++) {

    console.log(Math.floor((Math.random()*6)+1));
}
