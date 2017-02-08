angular.module('YQHOME', ['app.controllers', 'app.filters'])

.run(function($rootScope){
	$rootScope.param = {
		menu: [{
			title: "home",
			link: "page-home",
			is_sm: false
		}, {
			title: "documentation",
			link: "page-documentation",
			is_sm: false
		}, {
			title: "career",
			link: "page-career",
			is_sm: false
		}, {
			title: "education",
			link: "page-education",
			is_sm: false
		}, {
			title: "discover",
			link: "page-discover",
			is_sm: false
		}, {
			title: "settings",
			link: "page-setting",
			is_sm: false
		}, {
			title: "source",
			link: "page-source",
			is_sm: true
		}, {
			title: "github",
			link: "page-github",
			is_sm: true
		}, {
			title: "contact",
			link: "page-contact",
			is_sm: true
		}],
		sub_menu: [{
			title: "Twitter",
			link: "",
			icon: "fa-twitter"
		}, {
			title: "LinkedIn",
			link: "",
			icon: "fa-linkedin"
		}, {
			title: "Facebook",
			link: "",
			icon: "fa-facebook"
		}, {
			title: "YouTube",
			link: "",
			icon: "fa-youtube-play"
		}]
	};
})
.config(function(){

});