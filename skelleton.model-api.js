Skelleton.Model =  {
	all: function(callback) {
		var self = this;
		Skelleton.API.get(self.name, function(request){
			if (request.success) {
				callback(request.response);
			}
		});
	},
	get: function(parameters, callback) {
		var self = this;
		Skelleton.API.get(self.name, parameters, function(request){
			if (request.success) {
				callback(request.response);
			}
		});
	},
	save: function(parameters, callback) {
		var self = this;
		var method = (parameters.id) ? "update" : "insert";

		Skelleton.API[method](self.name, parameters, function(request){
			if (request.success) {
				callback(request.response);
			}
		});
	},
	delete: function(parameters, callback) {
		Skelleton.API["delete"](self.name, parameters, function(request){
			if (request.success) {
				callback(request.response);
			}
		});
	}
}
