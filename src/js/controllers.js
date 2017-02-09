angular.module('app.controllers', [])

.controller('AppCtrl', function($scope, $timeout) {
	$timeout(function() {
		ORI_MAIN.init();
	}, 500);
})

.controller('HomeCtrl', function($scope) {
	console.log("Home Controller");
	$scope.param = {
		doughnut: {
			labels: ["html", "js", "css", "angular", "sass"],
			data: [
				250 + Math.round(Math.random() * 100),
				150 + Math.round(Math.random() * 100),
				50 + Math.round(Math.random() * 100),
				550 + Math.round(Math.random() * 100),
				350 + Math.round(Math.random() * 100)
			],
			colors: [
				"#313131",
				"#333333",
				"#353535",
				"#373737",
				"#393939"
			],
			options: {
				cutoutPercentage: 65,
				rotation: -0.5 * Math.PI,
				animation: {
					animateScale: true
				},
				elements: {
					arc: {
						borderColor: "#555555"
					}
				},
				legend: {
					display: true,
					position: "right",
					labels: {
						fontColor: 'rgba(255, 255, 255, 0.6)'
					}
				},
				tooltips: {
					enabled: true
				}
			}
		}
	};
})

.controller('SettingsCtrl', function($rootScope, $scope) {
	console.log("Settings Controller");
	$scope.param = {
		option: {
			language: DATA_IO.getLanguage(),
			theme: "dark"
		},
		cog: {
			run: false
		}
	};

	$scope.toggleCogRun = function() {
		$scope.param.cog.run = $scope.param.cog.run == false;
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