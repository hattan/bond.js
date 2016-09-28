var bond = {
	AppContainer : "#app",
	_templates : {},
	_getTemplate : function(name,source){
			var template = null,
					templates = bond._templates;
			if(templates[name] != undefined){
			  template = templates[name];
			}
			else{
				template = Handlebars.compile(source);
				templates[name]=template;
			}
			return template;
	},
	bind : function(model){
		var handler = {
    		set: function(target, prop, value, receiver) {
           		model.handleModelChange(prop,value);
    			return true;
    		}
		};

		return new Proxy(model,handler);
	},
	Create : function(cb){
		var model = new bond.Model(cb);
		return bond.bind(model);
	},
	Model : function(cb){
		function is($elem,type){
			return $elem.is(type);
		}
		function isDiv($elem){
			return is($elem,"div");
		}
		function isInput($elem){
			return is($elem,"input");
		}		
		function processDiv($elem,name,value){
			if($elem.children().length > 0 ){
				var source = $elem.html(),
						template = bond._getTemplate(name,source);
				
				var html = template(value);
				$elem.html(html);
			}
			else{
				$elem.text(value);
			}
		}
		function handleModelChange(name,value){
			var $elem = $("#" + name);

			if(isDiv($elem)){
				processDiv($elem,name,value);
			}
			else if(isInput($elem)){
				$elem.val(value);
			}

			if(cb!=undefined)
				cb();
		
     	 $(bond.AppContainer).fadeIn();
    
    	}

  		this.handleModelChange = handleModelChange;

	}
};