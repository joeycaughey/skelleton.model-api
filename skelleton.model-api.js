function Model(elements) {
    var self = {
        records: [],
        name: elements.name,
        endpoint: elements.endpoint + "/",

        init: function(callback) {
            var self = this;
            self.get({}, function(response) {
                response = (response) ? response : [];

                if (typeof response !== "undefined") {
                    Content.loop(self.name, response);
                    $("[data-rel=" + self.name + "-count]").text(response.length);
                    callback();
                }
            });
            return;
        },
        get: function(values, callback) {
            var self = this;
            //var params = {};

            try {
                API.get(self.endpoint, values, function(response) {
                    callback(response);
                });
            } catch (error) {
                callback([]);
            }
            return;
        },
        save: function(values, callback) {
            var self = this;
            var method = (values.id) ? "update" : "insert";
            API[method](self.endpoint, values, function(response) {
                callback(response)
            });
            return;
        },
        delete: function(id, callback) {
            var self = this;
            API.delete(self.endpoint, { id: id }, function(response) {
                callback(response)
            });
            return;
        }
    }
    $(document).ready(function() {
        self.init(function() {});
    });
    return self;
}
