# skelleton.model-api
Skelleton Framework - Data Model / API Interface


A jQuery library to extend data models and interface CRUD operations with a RESTful API service.

----------------------------------------------------
USAGE AND INITIALIZATION
----------------------------------------------------
Loading the API Class & API configuration.   


```
var TestingModel = $.extends(Skelleton.Model, {
	_name: "testing",
	_schema: {

	},
	load: function() {
		TestingModel.get({}, function(response) {
			Content.loop("testing", response);
		});
	},
});
