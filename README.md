# skelleton.model-api
Skelleton Framework - Data Model / API Interface


A jQuery library to extend data models and interface CRUD operations with a RESTful API service.

----------------------------------------------------
CREATING A MODEL
----------------------------------------------------
Loading the API Class & API configuration.   

```javascript
var TestingModel = Model({
    name: "testing",
    endpoint: "v1/testing",
    schema: [
        { name: "id", type: "bigint" },
        { name: "name", type: "varchar", default: 100 }
    ]
});

```
----------------------------------------------------
Initializing the Model
----------------------------------------------------
```javascript
TestingModel.init(function() {
    // Model Actions
});
```
----------------------------------------------------
Get all model records
----------------------------------------------------
```javascript
TestingModel.get({}, function(response) {
    // Do something with response
});


```

----------------------------------------------------
Get Model API request by id
----------------------------------------------------
```javascript
TestingModel.get({ id: 1 }, function(response) {
    // Do something with response
});
```


----------------------------------------------------
Save API request by id
----------------------------------------------------
If "id" is passed to values thesn an update.

```javascript
TestingModel.save(values, function(response) {
    // Do something with response
});

```
----------------------------------------------------
Custom Methods
----------------------------------------------------
```javascript
TestingModel.methodname = function(value) {
    return value;
}
```
