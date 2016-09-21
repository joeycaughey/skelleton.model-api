# skelleton.model-api
Skelleton Framework - Data Model / API Interface


A jQuery library to extend data models and interface CRUD operations with a RESTful API service.

----------------------------------------------------
CREATING A MODEL
----------------------------------------------------
Loading the API Class & API configuration.   

```
var TestingModel = $.extends(Skelleton.Model, {
	_name: "testing",
	_schema: {
	
	}
});
```
----------------------------------------------------
Get all model records
----------------------------------------------------
```
TestingModel.all(function(response) {
    // Do something with response
});
```

----------------------------------------------------
Get Model API request by id
----------------------------------------------------
```
TestingModel.get({ id: 1}, function(response) {
    // Do something with response
});
```


----------------------------------------------------
SAve API request by id
----------------------------------------------------
```
TestingModel.save(parameters, function(response) {
    // Do something with response
});
```
