
class Model {
    constructor(schema, table) {
        this._schema = schema;
        this.table = table;
    }
    init() {
    	var self = this;
    	self.all(function(request){
    		//Content.loop("[data-content-loop="+self.table+"]", request.response);
    	});
    }
    all(callback) {
        var self = this;
        Skelleton.API.get(self.table, function(request) {
            callback(request);
        });
    }
    get(parameters, callback) {
        var self = this;

        Skelleton.API.get(self.table, parameters, function(request) {
            callback(request);
        });
    }
    save(parameters, callback) {
        var self = this;
        var method = (parameters.id) ? "update" : "insert";

        Skelleton.API[method](self.table, parameters, function(request) {
            callback(request);
        });
    }
    delete(parameters, callback) {
        var self = this;
        Skelleton.API["delete"](self.table, parameters, function(request) {
            callback(request);
        });
    }
}
