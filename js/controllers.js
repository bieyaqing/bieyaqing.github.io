angular.module('app.controllers', [])

.controller('AppCtrl', function($scope, $timeout) {
	// init
	$timeout(function() {
		ORI_MAIN.init();
	}, 500);
});