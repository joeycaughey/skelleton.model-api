# skelleton.model-api
Skelleton Framework - Data Model / API Interface


A jQuery library to extend data models and interface CRUD operations with a RESTful API service.

----------------------------------------------------
CREATING A MODEL
----------------------------------------------------
Loading the API Class & API configuration.   

```javascript
var TestingModel = $.extends(Skelleton.Model, {
	_name: "testing",
	_schema: {
	
	}
});
```
----------------------------------------------------
Get all model records
----------------------------------------------------
```javascript
TestingModel.all(function(response) {
    // Do something with response
});
```

----------------------------------------------------
Get Model API request by id
----------------------------------------------------
```javascript
TestingModel.get({ id: 1}, function(response) {
    // Do something with response
});
```


----------------------------------------------------
Save API request by id
----------------------------------------------------
```javascript
TestingModel.save(parameters, function(response) {
    // Do something with response
});
```
