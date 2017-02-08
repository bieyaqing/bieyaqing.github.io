angular.module('app.filters', [])

.filter('is_css', function() {
	return function(input, opt1, opt2) {
		if(input) {
			return opt1;
		} else {
			return "";
		}
	}
})

.filter('pretty_date', function() {
	return function(input, opt1, opt2) {
		return moment(input).format("DD MMM YYYY HH:mm:ss")
	}
});