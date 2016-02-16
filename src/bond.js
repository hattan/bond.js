var bond = {
	AppContainer : "#app",
	Model : function(){
		var templates = {};
		function is($elem,type){
			return $elem.is(type);
		}
		function isDiv($elem){
			return is($elem,"div");
		}
		function isInput($elem){
			return is($elem,"input");
		}		
		function getTemplate(name,source){
			var template = null;
			if(templates[name] != undefined){
			  template = templates[name];
			}
			else{
				template = Handlebars.compile(source);
				templates[name]=template;
			}
			return template;
		}
		function processDiv($elem,name,value){
			if($elem.children().length > 0 ){
				var source = $elem.html(),
						template = getTemplate(name,source);
				
				var html = template(value);
				$elem.html(html);
			}
			else{
				$elem.text(value);
			}
		}
		function handleModelChange(changes){
			changes.forEach(function(change){
				var name = change.name,
						value = change.object[name],
						$elem = $("#" + name);

				if(isDiv($elem)){
					processDiv($elem,name,value);
				}
				else if(isInput($elem)){
					$elem.val(value);
				}
			})
      $(bond.AppContainer).fadeIn();
    }
	Object.observe(this,handleModelChange);

	this.handleModelChange = handleModelChange;
	}
};