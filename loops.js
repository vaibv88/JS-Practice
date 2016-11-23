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

