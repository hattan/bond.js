# bond.js [![Build Status](https://travis-ci.org/hattan/bond.js.svg?branch=master)](https://travis-ci.org/hattan/bond.js)
A simple micro-binding library for use with jQuery and Handlerbars.

bond uses convention over configuration. The name of your element must match the model property. If your element is a div and contains child elements, bond assumes that is a handlebars template and will try to render it.

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
var model = bond.Create();

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
