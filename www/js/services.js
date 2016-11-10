angular.module("telugu_jokes.services", [])
.directive("ngSoundtouch", function(){
	/** required: cordova-plugin-velda-devicefeedback **/
	return {
			controller: function($scope, $element, $attrs){
			$element.bind("touchend", onTouchEnd);
			function onTouchEnd(event)
			{
				if (window.plugins && window.plugins.deviceFeedback){
					window.plugins.deviceFeedback.acoustic();
				}
			};
		}
	};
})
.directive("runAppSms", function(){
	/** required: cordova-plugin-whitelist, cordova-plugin-inappbrowser **/
	return {
			controller: function($scope, $element, $attrs){
			$element.bind("click", runApp);
			function runApp(event)
			{
				var phoneNumber = $attrs.phone || "08123456789";
				var textMessage = window.encodeURIComponent($attrs.message) || "Hello";
				var urlSchema = "sms:" + phoneNumber + "?body=" + textMessage;
				window.open(urlSchema,"_system","location=yes");
			};
		}
	};
})
.directive("runAppCall", function(){
	/** required: cordova-plugin-whitelist, cordova-plugin-inappbrowser **/
	return {
			controller: function($scope, $element, $attrs){
			$element.bind("click", runApp);
			function runApp(event)
			{
				var phoneNumber = $attrs.phone || "08123456789";
				var urlSchema = "tel:" + phoneNumber ;
				window.open(urlSchema,"_system","location=yes");
			};
		}
	};
})
.directive("runAppEmail", function(){
	/** required: cordova-plugin-whitelist, cordova-plugin-inappbrowser **/
	return {
			controller: function($scope, $element, $attrs){
			$element.bind("click", runApp);
			function runApp(event)
			{
				var EmailAddr = $attrs.email || "info@ihsana.com";
				var textSubject = $attrs.subject || "";
				var textMessage = window.encodeURIComponent($attrs.message) || "";
				var urlSchema = "mailto:" + EmailAddr + "?subject=" + textSubject + "&body=" + textMessage;
				window.open(urlSchema,"_system","location=yes");
			};
		}
	};
})
.directive("runAppWhatsapp", function(){
	/** required: cordova-plugin-whitelist, cordova-plugin-inappbrowser **/
	return {
			controller: function($scope, $element, $attrs){
			$element.bind("click", runApp);
			function runApp(event)
			{
				var textMessage = window.encodeURIComponent($attrs.message) || "";
				var urlSchema = "whatsapp://send?text=" + textMessage;
				window.open(urlSchema,"_system","location=yes");
			};
		}
	};
})
.directive("runAppLine", function(){
	/** required: cordova-plugin-whitelist, cordova-plugin-inappbrowser **/
	return {
			controller: function($scope, $element, $attrs){
			$element.bind("click", runApp);
			function runApp(event)
			{
				var textMessage = window.encodeURIComponent($attrs.message) || "";
				var urlSchema = "line://msg/text/" + textMessage;
				window.open(urlSchema,"_system","location=yes");
			};
		}
	};
})
.directive("runAppTwitter", function(){
	/** required: cordova-plugin-whitelist, cordova-plugin-inappbrowser **/
	return {
			controller: function($scope, $element, $attrs){
			$element.bind("click", runApp);
			function runApp(event)
			{
				var textMessage = window.encodeURIComponent($attrs.message) || "";
				var urlSchema = "twitter://post?message=" + textMessage;
				window.open(urlSchema,"_system","location=yes");
			};
		}
	};
})
.directive("runOpenURL", function(){
	/** required: cordova-plugin-whitelist, cordova-plugin-inappbrowser **/
	return {
			controller: function($scope, $element, $attrs){
			$element.bind("click", runApp);
			function runApp(event)
			{
				var $href = $attrs.href || "http://ihsana.com/";
				window.open($href,"_system","location=yes");
			};
		}
	};
})
.directive("runAppBrowser", function(){
	/** required: cordova-plugin-whitelist, cordova-plugin-inappbrowser **/
	return {
			controller: function($scope, $element, $attrs){
			$element.bind("click", runApp);
			function runApp(event)
			{
				var $href = $attrs.href || "http://ihsana.com/";
				window.open($href,"_blank","closebuttoncaption=Done");
			};
		}
	};
})
.directive("runWebview", function(){
	/** required: cordova-plugin-whitelist, cordova-plugin-inappbrowser **/
	return {
			controller: function($scope, $element, $attrs){
			$element.bind("click", runApp);
			function runApp(event)
			{
				var $href = $attrs.href || "http://ihsana.com/";
				window.open($href,"_self");
			};
		}
	};
})
				
.directive("zoomView", function($compile,$ionicModal, $ionicPlatform){
	return {
			link: function link($scope, $element, $attrs){
				
				$element.attr("ng-click", "showZoomView()");
				$element.removeAttr("zoom-view");
				$compile($element)($scope);
				$ionicPlatform.ready(function(){
					var zoomViewTemplate = "";
					zoomViewTemplate += "<ion-modal-view class=\"zoom-view\">";
					zoomViewTemplate += "<ion-header-bar class=\"bar bar-header light bar-balanced-900\">";
					zoomViewTemplate += "<div class=\"header-item title\"></div>";
					zoomViewTemplate += "<div class=\"buttons buttons-right header-item\"><span class=\"right-buttons\"><button ng-click=\"closeZoomView()\" class=\"button button-icon ion-close button-clear button-dark\"></button></span></div>";
					zoomViewTemplate += "</ion-header-bar>";
					zoomViewTemplate += "<ion-content>";
					zoomViewTemplate += "<ion-scroll zooming=\"true\" direction=\"xy\" style=\"width:100%;height:100%;position:absolute;top:0;bottom:0;left:0;right:0;\">";
					zoomViewTemplate += "<img ng-src=\"{{ngSrc}}\" style=\"width:100%!important;display:block;width:100%;height:auto;max-width:400px;max-height:700px;margin:auto;padding:10px;\"/>";
					zoomViewTemplate += "</ion-scroll>";
					zoomViewTemplate += "</ion-content>";
					zoomViewTemplate += "</ion-modal-view>";
					$scope.zoomViewModal = $ionicModal.fromTemplate(zoomViewTemplate,{
						scope: $scope,
						animation: "slide-in-up"
					});
					
					$scope.showZoomView = function(){
						$scope.zoomViewModal.show();
						$scope.ngSrc = $attrs.zoomSrc;
					};
					$scope.closeZoomView= function(){
						$scope.zoomViewModal.hide();
					};
				});
		}
	};
})
