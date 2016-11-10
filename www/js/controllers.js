angular.module("telugu_jokes.controllers", [])



// TODO: indexCtrl --|-- 
.controller("indexCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64){
	
	$rootScope.headerExists = true;
	$rootScope.page_id = "index" ;
	$rootScope.last_edit = "-" ;
	// TODO: indexCtrl --|-- $scope.scrollTop
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// TODO: indexCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: indexCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: indexCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// TODO: indexCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: indexCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("error: page index => custom controller");
			console.log(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: side_menusCtrl --|-- 
.controller("side_menusCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64){
	
	$rootScope.headerExists = true;
	$rootScope.page_id = "side_menus" ;
	$rootScope.last_edit = "-" ;
	// TODO: side_menusCtrl --|-- $scope.scrollTop
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// TODO: side_menusCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: side_menusCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: side_menusCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// TODO: side_menusCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 
	
	var popover_template = "";
	popover_template += "<ion-popover-view class=\"fit\">";
	popover_template += "	<ion-content>";
	popover_template += "		<ion-list>";
	popover_template += "			<a  class=\"item dark-ink\" ng-href=\"#/telugu_jokes/form_feedback\" ng-click=\"popover.hide()\">";
	popover_template += "			Feedback";
	popover_template += "			</a>";
	popover_template += "		</ion-list>";
	popover_template += "	</ion-content>";
	popover_template += "</ion-popover-view>";
	
	
	$scope.popover = $ionicPopover.fromTemplate(popover_template,{
		scope: $scope
	});
	
	$scope.closePopover = function(){
		$scope.popover.hide();
	};
	
	$scope.$on("$destroy", function(){
		$scope.popover.remove();
	});

	// TODO: side_menusCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("error: page side_menus => custom controller");
			console.log(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: aboutCtrl --|-- 
.controller("aboutCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64){
	
	$rootScope.headerExists = true;
	$rootScope.page_id = "about" ;
	$rootScope.last_edit = "menu" ;
	// TODO: aboutCtrl --|-- $scope.scrollTop
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// TODO: aboutCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: aboutCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: aboutCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// TODO: aboutCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: aboutCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("error: page about => custom controller");
			console.log(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: dashboardCtrl --|-- 
.controller("dashboardCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64){
	
	$rootScope.headerExists = true;
	$rootScope.page_id = "dashboard" ;
	$rootScope.last_edit = "menu" ;
	// TODO: dashboardCtrl --|-- $scope.scrollTop
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// TODO: dashboardCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: dashboardCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: dashboardCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// TODO: dashboardCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: dashboardCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("error: page dashboard => custom controller");
			console.log(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: jokesCtrl --|-- 
.controller("jokesCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64){
	
	$rootScope.headerExists = true;
	$rootScope.page_id = "jokes" ;
	$rootScope.last_edit = "table (jokes)" ;
	// TODO: jokesCtrl --|-- $scope.scrollTop
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// TODO: jokesCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: jokesCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: jokesCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// TODO: jokesCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// TODO: jokesCtrl --|-- $scope.showAuthentication
	$scope.showAuthentication  = function(){
		var authPopup = $ionicPopup.show({
			template: ' ',
			title: "Authorization",
			subTitle: "Authorization is required",
			scope: $scope,
			buttons: [
				{text:"Cancel",onTap: function(e){
					$state.go("telugu_jokes.jokes");
				}},
			],
		}).then(function(form){
		},function(err){
		},function(msg){
		});
	};
	
	// set default parameter http
	var http_params = {};
	
	// set HTTP Header 
	var http_header = {
		headers: {
		},
		params: http_params
	};
	var targetQuery = ""; //default param
	var raplaceWithQuery = "";
	//fix url Jokes
	targetQuery = "per_page=20"; //default param
	raplaceWithQuery = "per_page=20";
	
	$scope.gmapOptions = {options: { scrollwheel: false }};
	
	var fetch_per_scroll = 6;
	// animation loading 
	$ionicLoading.show({
		template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
	});
	
	
	$scope.noMoreItemsAvailable = false; //readmore status
	var lastPush = 0;
	var data_jokess = [];
	
	if(window.localStorage.getItem("data_jokess") !== "undefined"){
		data_jokess = JSON.parse(window.localStorage.getItem("data_jokess"));
		$scope.data_jokess = JSON.parse(window.localStorage.getItem("data_jokess"));
			if (data_jokess !== null){
			$scope.jokess = [];
			for(lastPush = 0; lastPush < 10; lastPush++) {
				if (angular.isObject(data_jokess[lastPush])){
					$scope.jokess.push(data_jokess[lastPush]);
				};
			}
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 500);
		}
	}
	if(!angular.isObject(data_jokess)){
		$timeout(function() {
			var url_request = "http://gumig.com/jokes/wp-json/wp/v2/posts?per_page=20".replace(targetQuery,raplaceWithQuery);
			// overwrite HTTP Header 
			http_header = {
				headers: {
				},
				params: http_params
			};
			// TODO: jokesCtrl --|-- $http.get
			$http.get(url_request,http_header).then(function(response) {
				data_jokess = response.data;
				$scope.data_jokess = response.data;
				if(typeof(Storage) != "undefined"){
					try {
						// TODO: jokesCtrl --|---------- set:localstorage
						window.localStorage.setItem("data_jokess",JSON.stringify(data_jokess));
					} catch(e) {
						// TODO: jokesCtrl --|---------- clear:localstorage
						window.localStorage.clear();
						window.localStorage.setItem("data_jokess",JSON.stringify(data_jokess));
						$ionicHistory.clearCache();
						$ionicHistory.clearHistory();
						$state.reload();
						$scope.$state = $state;
					}
				}
				$scope.jokess = [];
				for(lastPush = 0; lastPush < 100; lastPush++) {
					if (angular.isObject(data_jokess[lastPush])){
						$scope.jokess.push(data_jokess[lastPush]);
					};
				}
			},function(response) {
			
				$timeout(function() {
					var url_request = "http://gumig.com/jokes/wp-json/wp/v2/posts?per_page=20&callback=JSON_CALLBACK".replace(targetQuery,raplaceWithQuery);
					// overwrite HTTP Header 
					http_header = {
						headers: {
						},
						params: http_params
					};
					// TODO: jokesCtrl --|------ $http.jsonp
					$http.jsonp(url_request,http_header).success(function(data){
						data_jokess = data;
						$scope.data_jokess = data;
						$ionicLoading.hide();
						if(typeof(Storage) != "undefined"){
							try {
								// TODO: jokesCtrl --|---------------- set:localstorage
								window.localStorage.setItem("data_jokess",JSON.stringify(data_jokess));
							} catch(e) {
								// TODO: jokesCtrl --|---------------- clear:localstorage
								window.localStorage.clear();
								window.localStorage.setItem("data_jokess",JSON.stringify(data_jokess));
								$ionicHistory.clearCache();
								$ionicHistory.clearHistory();
								$state.reload();
								$scope.$state = $state;
							}
						}
						controller_by_user();
						$scope.jokess = [];
						for(lastPush = 0; lastPush < 100; lastPush++) {
							if (angular.isObject(data_jokess[lastPush])){
								$scope.jokess.push(data_jokess[lastPush]);
							};
						}
					}).error(function(data){
					if(response.status ===401){
						// TODO: jokesCtrl --|------------ error:Unauthorized
						$scope.showAuthentication();
					}else{
						// TODO: jokesCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "Network Error" + " (" + data.status + ")",
							template: "An error occurred while collecting data." + "<br/><br/><pre>code: " + data.status + "<br/>error: " + data.statusText + "<br/>source: " + $rootScope.last_edit + "</pre>",
						});
					}
					});
				}, 1000);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 1000);
		});
	
		}, 1000);
	}
	
	
	// TODO: jokesCtrl --|-- $scope.doRefresh
	$scope.doRefresh = function(){
		var url_request ="http://gumig.com/jokes/wp-json/wp/v2/posts?per_page=20".replace(targetQuery,raplaceWithQuery);
		// retry retrieving data
		window.localStorage.clear();
		// overwrite http_header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: jokesCtrl --|------ $http.get
		$http.get(url_request,http_header).then(function(response) {
			data_jokess = response.data;
			$scope.data_jokess = response.data;
			if(typeof(Storage) != "undefined"){
				try {
					// TODO: jokesCtrl --|---------------- set:localstorage
					window.localStorage.setItem("data_jokess",JSON.stringify(data_jokess));
				} catch(e) {
					// TODO: jokesCtrl --|---------------- clear:localstorage
					window.localStorage.clear();
					window.localStorage.setItem("data_jokess",JSON.stringify(data_jokess));
					$ionicHistory.clearCache();
					$ionicHistory.clearHistory();
					$state.reload();
					$scope.$state = $state;
				}
			}
			$scope.jokess = [];
			for(lastPush = 0; lastPush < 100; lastPush++) {
				if (angular.isObject(data_jokess[lastPush])){
					$scope.jokess.push(data_jokess[lastPush]);
				};
			}
		},function(response){
			
		// retrieving data with jsonp
			$timeout(function() {
			var url_request ="http://gumig.com/jokes/wp-json/wp/v2/posts?per_page=20&callback=JSON_CALLBACK".replace(targetQuery,raplaceWithQuery);
				// overwrite http_header 
				http_header = {
					headers: {
					},
					params: http_params
				};
				// TODO: jokesCtrl --|---------- $http.jsonp
				$http.jsonp(url_request,http_header).success(function(data){
					data_jokess = data;
					$scope.data_jokess = data;
					$ionicLoading.hide();
					controller_by_user();
					if(typeof(Storage) != "undefined"){
						try {
							// TODO: jokesCtrl --|---------------- set:localstorage
							window.localStorage.setItem("data_jokess",JSON.stringify(data_jokess));
						} catch(e) {
							// TODO: jokesCtrl --|---------------- clear:localstorage
							window.localStorage.clear();
							window.localStorage.setItem("data_jokess",JSON.stringify(data_jokess));
							$ionicHistory.clearCache();
							$ionicHistory.clearHistory();
							$state.reload();
							$scope.$state = $state;
						}
					}
					$scope.jokess = [];
					for(lastPush = 0; lastPush < 100; lastPush++) {
						if (angular.isObject(data_jokess[lastPush])){
							$scope.jokess.push(data_jokess[lastPush]);
						};
					}
				}).error(function(resp){
					if(response.status ===401){
					// TODO: jokesCtrl --|------------ error:Unauthorized
					$scope.showAuthentication();
					}else{
						// TODO: jokesCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "Network Error" + " (" + data.status + ")",
							template: "An error occurred while collecting data." + "<br/><br/><pre>code: " + data.status + "<br/>error: " + data.statusText + "<br/>source: " + $rootScope.last_edit + "</pre>",
						});
					};
				});
			}, 1000);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 500);
		});
	
	};
	if (data_jokess === null){
		data_jokess = [];
	};
	// animation readmore
	var fetchItems = function() {
		for(var z=0;z<fetch_per_scroll;z++){
			if (angular.isObject(data_jokess[lastPush])){
				$scope.jokess.push(data_jokess[lastPush]);
				lastPush++;
			}else{;
				$scope.noMoreItemsAvailable = true;
			}
		}
		$scope.$broadcast("scroll.infiniteScrollComplete");
	};
	
	// event readmore
	$scope.onInfinite = function() {
		$timeout(fetchItems, 500);
	};
	
	// create animation fade slide in right (ionic-material)
	$scope.fireEvent = function(){
		ionicMaterialMotion.fadeSlideInRight();
		ionicMaterialInk.displayEffect();
	};
	// code 

	// TODO: jokesCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
//debug: all data
console.log(data_jokess);
			
		} catch(e){
			console.log("error: page jokes => custom controller");
			console.log(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: jokes_singlesCtrl --|-- 
.controller("jokes_singlesCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64){
	
	$rootScope.headerExists = true;
	$rootScope.page_id = "jokes_singles" ;
	$rootScope.last_edit = "table (jokes)" ;
	// TODO: jokes_singlesCtrl --|-- $scope.scrollTop
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// TODO: jokes_singlesCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: jokes_singlesCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: jokes_singlesCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// TODO: jokes_singlesCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// TODO: jokes_singlesCtrl --|-- $scope.showAuthentication
	$scope.showAuthentication  = function(){
		var authPopup = $ionicPopup.show({
			template: ' ',
			title: "Authorization",
			subTitle: "Authorization is required",
			scope: $scope,
			buttons: [
				{text:"Cancel",onTap: function(e){
					$state.go("telugu_jokes.jokes");
				}},
			],
		}).then(function(form){
		},function(err){
		},function(msg){
		});
	};
	
	// set default parameter http
	var http_params = {};

	// set HTTP Header 
	var http_header = {
		headers: {
		},
		params: http_params
	};
	// animation loading 
	$ionicLoading.show({
		template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
	});
	
	// Retrieving data
	var itemID = $stateParams.id;
	var current_item = [];
	if(window.localStorage.getItem("data_jokess") !== "undefined"){
		var datas = JSON.parse(window.localStorage.getItem("data_jokess"));
		if(datas!==null){
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		}
		// event done, hidden animation loading
		$timeout(function() {
			$ionicLoading.hide();
			$scope.jokes = current_item ;
			controller_by_user();
		}, 500);
	};
	if(!angular.isObject(current_item)){
		var itemID = $stateParams.id;
		var current_item = [];
	
		// set HTTP Header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: jokes_singlesCtrl --|-- $http.get
		$http.get("http://gumig.com/jokes/wp-json/wp/v2/posts?per_page=20",http_header).then(function(response) {
			// Get data single
			var datas = response.data;
			try {
				window.localStorage.setItem("data_jokess",JSON.stringify(datas));
			} catch(e) {
				window.localStorage.clear();
				window.localStorage.setItem("data_jokess",JSON.stringify(datas));
				$ionicHistory.clearCache();
				$ionicHistory.clearHistory();
				$state.reload();
				$scope.$state = $state;
			}
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		},function(data) {
					// Error message
					var alertPopup = $ionicPopup.alert({
						title: "Network Error" + " (" + data.status + ")",
						template: "An error occurred while collecting data." + "<br/><br/><pre>code: " + data.status + "<br/>error: " + data.statusText + "<br/>source: " + $rootScope.last_edit + "</pre>",
					});
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				$scope.jokes = current_item ;
				controller_by_user();
			}, 500);
		});
	}
	
	
		// TODO: jokes_singlesCtrl --|-- $scope.doRefresh
	$scope.doRefresh = function(){
		// Retrieving data
		window.localStorage.clear();
		var itemID = $stateParams.id;
		var current_item = [];
		// overwrite http_header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: jokes_singlesCtrl --|------ $http.get
		$http.get("http://gumig.com/jokes/wp-json/wp/v2/posts?per_page=20",http_header).then(function(response) {
			// Get data single
			var datas = response.data;
			window.localStorage.setItem("data_jokess",JSON.stringify(datas));
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		},function(data) {
			// Error message
		// TODO: jokes_singlesCtrl --|---------- $http.jsonp
				$http.jsonp("http://gumig.com/jokes/wp-json/wp/v2/posts?per_page=20&callback=JSON_CALLBACK",http_header).success(function(response){
					// Get data single
					var datas = response;
					window.localStorage.setItem("data_jokess",JSON.stringify(datas));
					for (var i = 0; i < datas.length; i++) {
						if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
							current_item = datas[i] ;
						}
					}
						$scope.$broadcast("scroll.refreshComplete");
						// event done, hidden animation loading
						$timeout(function() {
							$ionicLoading.hide();
							$scope.jokes = current_item ;
							controller_by_user();
						}, 500);
					}).error(function(resp){
						var alertPopup = $ionicPopup.alert({
							title: "Network Error" + " (" + data.status + ")",
							template: "An error occurred while collecting data." + "<br/><br/><pre>code: " + data.status + "<br/>error: " + data.statusText + "<br/>source: " + $rootScope.last_edit + "</pre>",
						});
					});
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				$scope.jokes = current_item ;
				controller_by_user();
			}, 500);
		});
	};
	// code 

	// TODO: jokes_singlesCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("error: page jokes_singles => custom controller");
			console.log(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: more_appsCtrl --|-- 
.controller("more_appsCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64){
	
	$rootScope.headerExists = true;
	$rootScope.page_id = "more_apps" ;
	$rootScope.last_edit = "menu" ;
	// TODO: more_appsCtrl --|-- $scope.scrollTop
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// TODO: more_appsCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: more_appsCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: more_appsCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// TODO: more_appsCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: more_appsCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("error: page more_apps => custom controller");
			console.log(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: quotesCtrl --|-- 
.controller("quotesCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64){
	
	$rootScope.headerExists = true;
	$rootScope.page_id = "quotes" ;
	$rootScope.last_edit = "table (quotes)" ;
	// TODO: quotesCtrl --|-- $scope.scrollTop
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// TODO: quotesCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: quotesCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: quotesCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// TODO: quotesCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// TODO: quotesCtrl --|-- $scope.showAuthentication
	$scope.showAuthentication  = function(){
		var authPopup = $ionicPopup.show({
			template: ' ',
			title: "Authorization",
			subTitle: "Authorization is required",
			scope: $scope,
			buttons: [
				{text:"Cancel",onTap: function(e){
					$state.go("telugu_jokes.jokes");
				}},
			],
		}).then(function(form){
		},function(err){
		},function(msg){
		});
	};
	
	// set default parameter http
	var http_params = {};
	
	// set HTTP Header 
	var http_header = {
		headers: {
		},
		params: http_params
	};
	var targetQuery = ""; //default param
	var raplaceWithQuery = "";
	$scope.gmapOptions = {options: { scrollwheel: false }};
	
	var fetch_per_scroll = 1;
	// animation loading 
	$ionicLoading.show({
		template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
	});
	
	
	$scope.noMoreItemsAvailable = false; //readmore status
	var lastPush = 0;
	var data_quotess = [];
	
	if(window.localStorage.getItem("data_quotess") !== "undefined"){
		data_quotess = JSON.parse(window.localStorage.getItem("data_quotess"));
		$scope.data_quotess = JSON.parse(window.localStorage.getItem("data_quotess"));
			if (data_quotess !== null){
			$scope.quotess = [];
			for(lastPush = 0; lastPush < 10; lastPush++) {
				if (angular.isObject(data_quotess[lastPush])){
					$scope.quotess.push(data_quotess[lastPush]);
				};
			}
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 500);
		}
	}
	if(!angular.isObject(data_quotess)){
		$timeout(function() {
			var url_request = "http://gumig.com/Quotes/wp-json/wp/v2/posts".replace(targetQuery,raplaceWithQuery);
			// overwrite HTTP Header 
			http_header = {
				headers: {
				},
				params: http_params
			};
			// TODO: quotesCtrl --|-- $http.get
			$http.get(url_request,http_header).then(function(response) {
				data_quotess = response.data;
				$scope.data_quotess = response.data;
				if(typeof(Storage) != "undefined"){
					try {
						// TODO: quotesCtrl --|---------- set:localstorage
						window.localStorage.setItem("data_quotess",JSON.stringify(data_quotess));
					} catch(e) {
						// TODO: quotesCtrl --|---------- clear:localstorage
						window.localStorage.clear();
						window.localStorage.setItem("data_quotess",JSON.stringify(data_quotess));
						$ionicHistory.clearCache();
						$ionicHistory.clearHistory();
						$state.reload();
						$scope.$state = $state;
					}
				}
				$scope.quotess = [];
				for(lastPush = 0; lastPush < 100; lastPush++) {
					if (angular.isObject(data_quotess[lastPush])){
						$scope.quotess.push(data_quotess[lastPush]);
					};
				}
			},function(response) {
			
				$timeout(function() {
					var url_request = "http://gumig.com/Quotes/wp-json/wp/v2/posts?callback=JSON_CALLBACK".replace(targetQuery,raplaceWithQuery);
					// overwrite HTTP Header 
					http_header = {
						headers: {
						},
						params: http_params
					};
					// TODO: quotesCtrl --|------ $http.jsonp
					$http.jsonp(url_request,http_header).success(function(data){
						data_quotess = data;
						$scope.data_quotess = data;
						$ionicLoading.hide();
						if(typeof(Storage) != "undefined"){
							try {
								// TODO: quotesCtrl --|---------------- set:localstorage
								window.localStorage.setItem("data_quotess",JSON.stringify(data_quotess));
							} catch(e) {
								// TODO: quotesCtrl --|---------------- clear:localstorage
								window.localStorage.clear();
								window.localStorage.setItem("data_quotess",JSON.stringify(data_quotess));
								$ionicHistory.clearCache();
								$ionicHistory.clearHistory();
								$state.reload();
								$scope.$state = $state;
							}
						}
						controller_by_user();
						$scope.quotess = [];
						for(lastPush = 0; lastPush < 100; lastPush++) {
							if (angular.isObject(data_quotess[lastPush])){
								$scope.quotess.push(data_quotess[lastPush]);
							};
						}
					}).error(function(data){
					if(response.status ===401){
						// TODO: quotesCtrl --|------------ error:Unauthorized
						$scope.showAuthentication();
					}else{
						// TODO: quotesCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "Network Error" + " (" + data.status + ")",
							template: "An error occurred while collecting data." + "<br/><br/><pre>code: " + data.status + "<br/>error: " + data.statusText + "<br/>source: " + $rootScope.last_edit + "</pre>",
						});
					}
					});
				}, 1000);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 1000);
		});
	
		}, 1000);
	}
	
	
	// TODO: quotesCtrl --|-- $scope.doRefresh
	$scope.doRefresh = function(){
		var url_request ="http://gumig.com/Quotes/wp-json/wp/v2/posts".replace(targetQuery,raplaceWithQuery);
		// retry retrieving data
		window.localStorage.clear();
		// overwrite http_header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: quotesCtrl --|------ $http.get
		$http.get(url_request,http_header).then(function(response) {
			data_quotess = response.data;
			$scope.data_quotess = response.data;
			if(typeof(Storage) != "undefined"){
				try {
					// TODO: quotesCtrl --|---------------- set:localstorage
					window.localStorage.setItem("data_quotess",JSON.stringify(data_quotess));
				} catch(e) {
					// TODO: quotesCtrl --|---------------- clear:localstorage
					window.localStorage.clear();
					window.localStorage.setItem("data_quotess",JSON.stringify(data_quotess));
					$ionicHistory.clearCache();
					$ionicHistory.clearHistory();
					$state.reload();
					$scope.$state = $state;
				}
			}
			$scope.quotess = [];
			for(lastPush = 0; lastPush < 100; lastPush++) {
				if (angular.isObject(data_quotess[lastPush])){
					$scope.quotess.push(data_quotess[lastPush]);
				};
			}
		},function(response){
			
		// retrieving data with jsonp
			$timeout(function() {
			var url_request ="http://gumig.com/Quotes/wp-json/wp/v2/posts?callback=JSON_CALLBACK".replace(targetQuery,raplaceWithQuery);
				// overwrite http_header 
				http_header = {
					headers: {
					},
					params: http_params
				};
				// TODO: quotesCtrl --|---------- $http.jsonp
				$http.jsonp(url_request,http_header).success(function(data){
					data_quotess = data;
					$scope.data_quotess = data;
					$ionicLoading.hide();
					controller_by_user();
					if(typeof(Storage) != "undefined"){
						try {
							// TODO: quotesCtrl --|---------------- set:localstorage
							window.localStorage.setItem("data_quotess",JSON.stringify(data_quotess));
						} catch(e) {
							// TODO: quotesCtrl --|---------------- clear:localstorage
							window.localStorage.clear();
							window.localStorage.setItem("data_quotess",JSON.stringify(data_quotess));
							$ionicHistory.clearCache();
							$ionicHistory.clearHistory();
							$state.reload();
							$scope.$state = $state;
						}
					}
					$scope.quotess = [];
					for(lastPush = 0; lastPush < 100; lastPush++) {
						if (angular.isObject(data_quotess[lastPush])){
							$scope.quotess.push(data_quotess[lastPush]);
						};
					}
				}).error(function(resp){
					if(response.status ===401){
					// TODO: quotesCtrl --|------------ error:Unauthorized
					$scope.showAuthentication();
					}else{
						// TODO: quotesCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "Network Error" + " (" + data.status + ")",
							template: "An error occurred while collecting data." + "<br/><br/><pre>code: " + data.status + "<br/>error: " + data.statusText + "<br/>source: " + $rootScope.last_edit + "</pre>",
						});
					};
				});
			}, 1000);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 500);
		});
	
	};
	if (data_quotess === null){
		data_quotess = [];
	};
	// animation readmore
	var fetchItems = function() {
		for(var z=0;z<fetch_per_scroll;z++){
			if (angular.isObject(data_quotess[lastPush])){
				$scope.quotess.push(data_quotess[lastPush]);
				lastPush++;
			}else{;
				$scope.noMoreItemsAvailable = true;
			}
		}
		$scope.$broadcast("scroll.infiniteScrollComplete");
	};
	
	// event readmore
	$scope.onInfinite = function() {
		$timeout(fetchItems, 500);
	};
	
	// create animation fade slide in right (ionic-material)
	$scope.fireEvent = function(){
		ionicMaterialMotion.fadeSlideInRight();
		ionicMaterialInk.displayEffect();
	};
	// code 

	// TODO: quotesCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
//debug: all data
console.log(data_quotess);
			
		} catch(e){
			console.log("error: page quotes => custom controller");
			console.log(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: quotes_singlesCtrl --|-- 
.controller("quotes_singlesCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64){
	
	$rootScope.headerExists = true;
	$rootScope.page_id = "quotes_singles" ;
	$rootScope.last_edit = "table (quotes)" ;
	// TODO: quotes_singlesCtrl --|-- $scope.scrollTop
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// TODO: quotes_singlesCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: quotes_singlesCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: quotes_singlesCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// TODO: quotes_singlesCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// TODO: quotes_singlesCtrl --|-- $scope.showAuthentication
	$scope.showAuthentication  = function(){
		var authPopup = $ionicPopup.show({
			template: ' ',
			title: "Authorization",
			subTitle: "Authorization is required",
			scope: $scope,
			buttons: [
				{text:"Cancel",onTap: function(e){
					$state.go("telugu_jokes.jokes");
				}},
			],
		}).then(function(form){
		},function(err){
		},function(msg){
		});
	};
	
	// set default parameter http
	var http_params = {};

	// set HTTP Header 
	var http_header = {
		headers: {
		},
		params: http_params
	};
	// animation loading 
	$ionicLoading.show({
		template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
	});
	
	// Retrieving data
	var itemID = $stateParams.id;
	var current_item = [];
	if(window.localStorage.getItem("data_quotess") !== "undefined"){
		var datas = JSON.parse(window.localStorage.getItem("data_quotess"));
		if(datas!==null){
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		}
		// event done, hidden animation loading
		$timeout(function() {
			$ionicLoading.hide();
			$scope.quotes = current_item ;
			controller_by_user();
		}, 500);
	};
	if(!angular.isObject(current_item)){
		var itemID = $stateParams.id;
		var current_item = [];
	
		// set HTTP Header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: quotes_singlesCtrl --|-- $http.get
		$http.get("http://gumig.com/Quotes/wp-json/wp/v2/posts",http_header).then(function(response) {
			// Get data single
			var datas = response.data;
			try {
				window.localStorage.setItem("data_quotess",JSON.stringify(datas));
			} catch(e) {
				window.localStorage.clear();
				window.localStorage.setItem("data_quotess",JSON.stringify(datas));
				$ionicHistory.clearCache();
				$ionicHistory.clearHistory();
				$state.reload();
				$scope.$state = $state;
			}
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		},function(data) {
					// Error message
					var alertPopup = $ionicPopup.alert({
						title: "Network Error" + " (" + data.status + ")",
						template: "An error occurred while collecting data." + "<br/><br/><pre>code: " + data.status + "<br/>error: " + data.statusText + "<br/>source: " + $rootScope.last_edit + "</pre>",
					});
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				$scope.quotes = current_item ;
				controller_by_user();
			}, 500);
		});
	}
	
	
		// TODO: quotes_singlesCtrl --|-- $scope.doRefresh
	$scope.doRefresh = function(){
		// Retrieving data
		window.localStorage.clear();
		var itemID = $stateParams.id;
		var current_item = [];
		// overwrite http_header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: quotes_singlesCtrl --|------ $http.get
		$http.get("http://gumig.com/Quotes/wp-json/wp/v2/posts",http_header).then(function(response) {
			// Get data single
			var datas = response.data;
			window.localStorage.setItem("data_quotess",JSON.stringify(datas));
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		},function(data) {
			// Error message
		// TODO: quotes_singlesCtrl --|---------- $http.jsonp
				$http.jsonp("http://gumig.com/Quotes/wp-json/wp/v2/posts?callback=JSON_CALLBACK",http_header).success(function(response){
					// Get data single
					var datas = response;
					window.localStorage.setItem("data_quotess",JSON.stringify(datas));
					for (var i = 0; i < datas.length; i++) {
						if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
							current_item = datas[i] ;
						}
					}
						$scope.$broadcast("scroll.refreshComplete");
						// event done, hidden animation loading
						$timeout(function() {
							$ionicLoading.hide();
							$scope.quotes = current_item ;
							controller_by_user();
						}, 500);
					}).error(function(resp){
						var alertPopup = $ionicPopup.alert({
							title: "Network Error" + " (" + data.status + ")",
							template: "An error occurred while collecting data." + "<br/><br/><pre>code: " + data.status + "<br/>error: " + data.statusText + "<br/>source: " + $rootScope.last_edit + "</pre>",
						});
					});
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				$scope.quotes = current_item ;
				controller_by_user();
			}, 500);
		});
	};
	// code 

	// TODO: quotes_singlesCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("error: page quotes_singles => custom controller");
			console.log(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})
