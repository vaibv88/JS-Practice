
`// first function with undefined parameter


function power(base, exponent) 
    if (exponent==undefined)  
	exponent = 2;
	var result = 1;
	for (var count = 0; count < exponent; count++) {
	    result*=base;
	    return result;
	}
   
console.log(power(4));

//function under function

function printFarmInventory ( cows , chickens ) {
    var cowString = String ( cows );
    while ( cowString . length < 3)
	cowString = "0" + cowString ;
    console . log ( cowString + " Cows ") ;
    var chickenString = String ( chickens );
    while ( chickenString . length < 3)
	chickenString = "0" + chickenString ;
    console . log ( chickenString + " Chickens ") ;
}
printFarmInventory (7 , 11) ;

//minimum function

function min(val1, val2) {
    if(val1<val2)
	return val1;
    else
	return val2;
}
console.log(min(2,8));

//even odd regular function
function evenOdd(number) {
    if(number==0)
	console.log("NUmber is even");
    else if(number==1)
	console.log("The number is odd");
    else if(number%2==0)
	console.log("The number is even");
    else
	cosole.log("The number is odd");
};

evenOdd(10);


//character counts

function countStr(string, ch) {
    counter = 0;
    for (var i = 0; i<string.length; i++)
	if (string.charAt(i)==ch)
	    counted+=1;
    return counter;
}

function countBs(string) {
    return countStr(string, "B");
}
console.log(countBs("Vaibhav"));



//fucntion to print range of numbers

var myNum = [];
function range(start, end) {
    for(var i=start;i<=end;i++)
	myNum.push(i);
    console.log(myNum);
};

console.log(range(1,9));



//printing an array and sum of all elements

function range(start, end) {
    var myNum = [];
    for(var i=start;i<=end;i++)
	myNum.push(i);
    return myNum;
}


function sum(myNum) {
    for (var i=0;i<=myNum.length;i++)
	var summ =0;
    summ+=myNum(i);
    return summ;
}

console.log(sum(range(1,9)));
   
//storing in an array and sum of all elements in array

function range(start, end) {
    var arrayy = [];
    for (var i=start;i<=end;i++)
	arrayy.push(i);
    console.log(arrayy);
    return arrayy;
}

function sum(arrayy) {
    var total = 0;
    for(var i=0;i<arrayy.length;i++)
	total += arrayy[i];
    return total;
}

console.log(sum(range(1,10)));
