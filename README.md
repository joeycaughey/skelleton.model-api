# skelleton.model-api
Skelleton Framework - Data Model / API Interface



'''
var TestingModel = $.extends(Skelleton.Model, {
	_name: "testing",
	_schema: {

	},
	load: function() {
		TestingModel.get({}, function(response) {
			Content.loop("testing", response);
		});
	}
});
