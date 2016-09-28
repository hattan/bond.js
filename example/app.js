$(function(){

	//initialize bond
	var model = new bond.Model();

	//bind to a div
	model.message = "hello world!";
	
  //bind to an input
	model.random_input = "some value";

  //bind to an array and use a handlebars templates (see markup)
	var data = [
		{id : 0, name : "bob"},
		{id : 1, name : "mike"},
		{id : 2, name : "sally"},
		{id : 3, name : "jennifer"}
	];
	model.items = data;

});