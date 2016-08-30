"use strict";

var enkort = angular.module('enkort', [
'ui.router',
'ngMaterial'
]);

enkort.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home/login');

	$stateProvider
	.state('home', {
		url: '/home',
		views:{
			"header": {
        		templateUrl: "../../module/home/header.html"
        	},
        	"footer": {
        		templateUrl: "../../module/home/footer.html"
        	}
		},
        abstract: true
    }).state('home.login', {
		url: '/login',
		views:{
			"content": {
        		templateUrl: "../../module/home/login.html"
        	}
		}
    });
}
