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
})

.filter('text_fmt', function() {
	return function(input, opt1, opt2) {
		switch(opt1) {
			case 0:
				return input.toLowerCase();
			break;
			case 1:
				return input.replace(/\w\S*/g, function(txt){
					return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
				});
			break;
			case 2:
				
			break;
			case 3:
				return input.toUpperCase();
			break;
		}
	}
});