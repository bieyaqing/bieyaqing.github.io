var DATA_IO = (function() {
	var app = {};

	app.setLanguage = function(foo) {
		localStorage.setItem("YQ_HOME_LNG", foo);
	};

	app.getLanguage = function() {
		return localStorage.getItem("YQ_HOME_LNG");
	};

	return app;
})();