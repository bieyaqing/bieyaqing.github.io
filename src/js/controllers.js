angular.module('app.controllers', [])

.controller('AppCtrl', function($scope, $timeout) {
	$scope.param = {
		menu: [{
			title: "home", link: "page-home", is_sm: false
		}, {
			title: "projects", link: "page-projects", is_sm: false
		}, {
			title: "gallery", link: "page-gallery", is_sm: false
		}, {
			title: "career", link: "page-career", is_sm: false
		}, {
			title: "life", link: "page-life", is_sm: false
		}, {
			title: "education", link: "page-education", is_sm: false
		}, {
			title: "source", link: "page-source", is_sm: true
		}, {
			title: "contact", link: "page-contact", is_sm: true
		}, {
			title: "settings", link: "page-settings", is_sm: true
		}],
		sub_menu: [{
			title: "Github", link: "", icon: "fa-github"
		}, {
			title: "LinkedIn", link: "", icon: "fa-linkedin"
		}, {
			title: "Facebook", link: "", icon: "fa-facebook"
		}],
		pages: [{
			title: "home", id: "page-home", url: "templates/home.html"
		}, {
			title: "projects", id: "page-projects", url: "templates/projects.html"
		}, {
			title: "gallery", id: "page-gallery", url: "templates/gallery.html"
		}, {
			title: "career", id: "page-career", url: "templates/career.html"
		}, {
			title: "life", id: "page-life", url: "templates/life.html"
		}, {
			title: "education", id: "page-education", url: "templates/education.html"
		}, {
			title: "source", id: "page-source", url: "templates/source.html"
		}, {
			title: "contact", id: "page-contact", url: "templates/contact.html"
		}, {
			title: "settings", id: "page-settings", url: "templates/settings.html"
		}]
	};
	$timeout(function() {
		ORI_MAIN.init();
	}, 500);
})

.controller('SettingsCtrl', function($rootScope, $scope) {
	console.log("Settings Controller");





});