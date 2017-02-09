angular.module('app.controllers', [])

.controller('AppCtrl', function($scope, $timeout) {
	$timeout(function() {
		ORI_MAIN.init();
	}, 500);
})

.controller('SettingsCtrl', function($rootScope, $scope) {
	console.log("Settings Controller");

	$scope.param = {
		option: {
			language: DATA_IO.getLanguage(),
			theme: "dark"
		}
	};

	$scope.$watch(function() {
		return $scope.param.option.language;
	}, function(foo, bar) {
		if(foo != bar) {
			$rootScope.changeLanguage(foo);
		}
	});

	$scope.$watch(function() {
		return $scope.param.option.theme;
	}, function(foo, bar) {
		console.log(foo, bar);
		if(foo != bar) {
			
		}
	});
});