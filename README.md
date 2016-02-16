# bond.js
A simple micro-binding library for use with jQuery and Handlerbars.

```html
<div id="message"></div>

<input id="random_input"/>

<div id="items">
	<ul>
	{{#each this}}
		<li>{{this.name}}</li>		
	{{/each}}
	</ul>
</div>
```

```javascript
//initialize bond
var model = new bond.Model();
bond.bind(model);

//bind to a div
model.message = 'hello world!';

//bind to an input
model.random_input = "some value";

//bind to an array and use a handlebars templates (see markup)
var data = [
	{id : 0, name : "bob"},
	{id : 1, name : "mike"},
	{id : 2, name : "sally"},
	{id : 3, name : "jennifer"}
];
model.items = data;`
```
