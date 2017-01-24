# skelleton.model-api
Skelleton Framework - Data Model / API Interface


A jQuery library to extend data models and interface CRUD operations with a RESTful API service.

----------------------------------------------------
CREATING A MODEL
----------------------------------------------------
Loading the API Class & API configuration.   

```javascript
const TestingModel = new Model([
    { name: "id", type: "bigint" },
    { name: "id", type: "bigint" }
], "testing");


```
----------------------------------------------------
Get all model records
----------------------------------------------------
```javascript
TestingModel.all(function(request) {
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
----------------------------------------------------
Custom Methods
----------------------------------------------------
```javascript
Testing.methodname = function(value) {
    return value;
}
```

----------------------------------------------------
Content Initialize
----------------------------------------------------
```javascript
Testing.init();
```


