angular.module('YQHOME', ['app.controllers', 'app.filters'])

.run(function($rootScope){
	$rootScope.root = {
		menu: [{
				title: "", link: "page-home", is_sm: false
			}, {
				title: "", link: "page-projects", is_sm: false
			}, {
				title: "", link: "page-gallery", is_sm: false
			}, {
				title: "", link: "page-career", is_sm: false
			}, {
				title: "", link: "page-life", is_sm: false
			}, {
				title: "", link: "page-education", is_sm: false
			}, {
				title: "", link: "page-source", is_sm: true
			}, {
				title: "", link: "page-contact", is_sm: true
			}, {
				title: "", link: "page-settings", is_sm: true
			}],
		sub_menu: [{
				title: "", link: "https://github.com/bieyaqing", icon: "fa-github"
			}, {
				title: "", link: "https://www.linkedin.com/in/yaqing-bie-59464156/", icon: "fa-linkedin"
			}, {
				title: "", link: "https://www.facebook.com/bie.yaqing", icon: "fa-facebook"
			}],
		pages: [{
				id: "page-home", url: "templates/home.html"
			}, {
				id: "page-projects", url: "templates/projects.html"
			}, {
				id: "page-gallery", url: "templates/gallery.html"
			}, {
				id: "page-career", url: "templates/career.html"
			}, {
				id: "page-life", url: "templates/life.html"
			}, {
				id: "page-education", url: "templates/education.html"
			}, {
				id: "page-source", url: "templates/source.html"
			}, {
				id: "page-contact", url: "templates/contact.html"
			}, {
				id: "page-settings", url: "templates/settings.html"
			}]
	};

	function loadMenuText() {
		$rootScope.root.menu[0].title = $rootScope.language.home;
		$rootScope.root.menu[1].title = $rootScope.language.projects;
		$rootScope.root.menu[2].title = $rootScope.language.gallery;
		$rootScope.root.menu[3].title = $rootScope.language.career;
		$rootScope.root.menu[4].title = $rootScope.language.life;
		$rootScope.root.menu[5].title = $rootScope.language.education;
		$rootScope.root.menu[6].title = $rootScope.language.source;
		$rootScope.root.menu[7].title = $rootScope.language.contact;
		$rootScope.root.menu[8].title = $rootScope.language.settings;
		$rootScope.root.sub_menu[0].title = $rootScope.language.github;
		$rootScope.root.sub_menu[1].title = $rootScope.language.linkedin;
		$rootScope.root.sub_menu[2].title = $rootScope.language.facebook;
	}

	$rootScope.changeLanguage = function(foo) {
		switch(foo) {
			case "en":
			$rootScope.language = LAN_EN;
			DATA_IO.setLanguage("en");
			break;
			case "ch":
			$rootScope.language = LAN_CH;
			DATA_IO.setLanguage("ch");
			break;
			default:
			$rootScope.language = LAN_EN;
			DATA_IO.setLanguage("en");
		}
		loadMenuText();
	};
	var lng_opt = DATA_IO.getLanguage();
	$rootScope.changeLanguage(lng_opt);
})

.config(function(){
	
});