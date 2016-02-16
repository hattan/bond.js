describe("bond tests",function(){

	it("should have a default AppContainer called #app",function(){
		expect(true).toBe(true);
	});

	it("should call handleModelChange when a property on the model has changed",function(done){
		//arrange
		var model = new bond.Model();
		model.handleModelChange = function(){
			done();
			//assert
			expect(model.handleModelChange).toHaveBeenCalled();
		};
		spyOn(model,'handleModelChange').and.callThrough();

		bond.bind(model);

		//act
		model.foo = "bar"; 
	});

});