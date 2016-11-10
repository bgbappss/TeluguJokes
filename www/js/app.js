angular.module("telugu_jokes", ["ngCordova","ionic","ionMdInput","ionic-material","ionic.rating","utf8-base64","telugu_jokes.controllers", "telugu_jokes.services"])
	.run(function($ionicPlatform) {
		$ionicPlatform.ready(function() {
			if(window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}

			if(window.StatusBar) {
				StatusBar.styleDefault();
			}


		});
	})


	.filter("to_trusted", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}])

	.filter("trustUrl", function($sce) {
		return function(url) {
			return $sce.trustAsResourceUrl(url);
		};
	})

	.filter("strExplode", function() {
		return function($string,$delimiter) {
			if(!$string.length ) return;
			var $_delimiter = $delimiter || "|";
			return $string.split($_delimiter);
		};
	})

	.filter("strDate", function(){
		return function (input) {
			return new Date(input);
		}
	})
	.filter("strHTML", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}])
	.filter("strEscape",function(){
		return window.encodeURIComponent;
	})





.config(function($stateProvider, $urlRouterProvider,$sceDelegateProvider,$httpProvider){
	// Domain Whitelist
	$sceDelegateProvider.resourceUrlWhitelist([
		"self",
		new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$'),
		new RegExp('^(http[s]?):\/\/(w{3}.)?w3schools\.com/.+$'),
	]);
	$stateProvider
	.state("telugu_jokes",{
		url: "/telugu_jokes",
			abstract: true,
			templateUrl: "templates/telugu_jokes-side_menus.html",
			controller: "side_menusCtrl",
	})

	.state("telugu_jokes.about", {
		url: "/about",
		views: {
			"telugu_jokes-side_menus" : {
						templateUrl:"templates/telugu_jokes-about.html",
						controller: "aboutCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("telugu_jokes.dashboard", {
		url: "/dashboard",
		views: {
			"telugu_jokes-side_menus" : {
						templateUrl:"templates/telugu_jokes-dashboard.html",
						controller: "dashboardCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("telugu_jokes.jokes", {
		url: "/jokes",
		cache:false,
		views: {
			"telugu_jokes-side_menus" : {
						templateUrl:"templates/telugu_jokes-jokes.html",
						controller: "jokesCtrl"
					},
			"fabButtonUp" : {
						template: '<button id="fab-up-button" ng-click="scrollTop()" class="button button-fab button-fab-bottom-right button-energized-900 spin"><i class="icon ion-arrow-up-a"></i></button>',
						controller: function ($timeout) {
							$timeout(function () {
								document.getElementById("fab-up-button").classList.toggle("on");
							}, 900);
						}
					},
		}
	})

	.state("telugu_jokes.jokes_singles", {
		url: "/jokes_singles/:id",
		cache:false,
		views: {
			"telugu_jokes-side_menus" : {
						templateUrl:"templates/telugu_jokes-jokes_singles.html",
						controller: "jokes_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("telugu_jokes.more_apps", {
		url: "/more_apps",
		views: {
			"telugu_jokes-side_menus" : {
						templateUrl:"templates/telugu_jokes-more_apps.html",
						controller: "more_appsCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("telugu_jokes.quotes", {
		url: "/quotes",
		cache:false,
		views: {
			"telugu_jokes-side_menus" : {
						templateUrl:"templates/telugu_jokes-quotes.html",
						controller: "quotesCtrl"
					},
			"fabButtonUp" : {
						template: '<button id="fab-up-button" ng-click="scrollTop()" class="button button-fab button-fab-bottom-right button-energized-900 spin"><i class="icon ion-arrow-up-a"></i></button>',
						controller: function ($timeout) {
							$timeout(function () {
								document.getElementById("fab-up-button").classList.toggle("on");
							}, 900);
						}
					},
		}
	})

	.state("telugu_jokes.quotes_singles", {
		url: "/quotes_singles/:id",
		cache:false,
		views: {
			"telugu_jokes-side_menus" : {
						templateUrl:"templates/telugu_jokes-quotes_singles.html",
						controller: "quotes_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	$urlRouterProvider.otherwise("/telugu_jokes/jokes");
});
