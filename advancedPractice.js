

//Pracice for toLocalString and toString() Access in Local scope

var person1 = {

    toLocalString : function()  {
	return "Vaibhav";
    },

    toString : function()  {

	return "Shubham";
    }

};

var person2 = {

    toLocalString : function() {
	return "Hello Vaibhav";
    },

    toString : function() {

	return "Hello Shubham";
    };

    var person = [person1, person2];

    alert(person);
    
