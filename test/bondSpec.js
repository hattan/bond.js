describe("bond tests",function(){

	it("should have a default AppContainer called #app",function(){
		expect(bond.AppContainer).toBe("#app");
	});

	/*it("should call handleModelChange when a property on the model has changed",function(done){
		var foo =  new bond.Model();
		model = bond.bind(foo);
		
		spyOn(foo,'handleModelChange').and.callFake(function(admin)  {
	 		done() ;
		});  

		model.foo = "bar";  
	});

	it("should invoke a callback after property on the model has changed",function(done){
		var modelChangeHandler = function(){
			done();
		};

		var model =  bond.Create(modelChangeHandler);

		model.foo = "bar"; 
	});

	it("should update the content of a div, if it has no children, and a model property is assigned",function(done){
		$("body").append("<div id='message'></div>");
 
		var modelChangeHandler = function(){
			var value = $("#message").html();
			expect(value).toEqual("hello there");
			done();
			$("#message").remove();
		};

		var model = new bond.Model(modelChangeHandler);
		model = bond.bind(model);

		model.message = "hello there"; 
	});

	it("should update the value  of an input tag if a model property is assigned",function(done){
		var expected = "fakeInputValue";

		$("body").append("<input id='fakeinput'/>");
 
		var modelChangeHandler = function(){
			var value = $("#fakeinput").val();
			expect(value).toEqual(expected);
			done();
			$("#fakeinput").remove();
		};

		var model = new bond.Model(modelChangeHandler);
		model = bond.bind(model);

		model.fakeinput = expected; 
	});

	it("should execute a handlebars template, if the element is a div with children & a model property is assigned",function(done){
		var expected = "templateFak";

		$("body").append("<div id='items'>{{#each this}}<div>{{this.name}}</div>{{/each}}</div>");
 
		var modelChangeHandler = function(){
			var value = $("#items").html();
			expect(value).toEqual("<div>bob</div><div>sally</div>");
			done();
			$("#items").remove();
		};

		var model = new bond.Model(modelChangeHandler);
		model = bond.bind(model);

		model.items = [
			{name: "bob"},
			{name: "sally"}
		]; 
	});

	it("should cache handlebar templates",function(){
		var source = "{{#foo}}";
		var template = bond._getTemplate("foo",source);

		expect(bond._templates["foo"]).toBeTruthy();
	});
*/
});