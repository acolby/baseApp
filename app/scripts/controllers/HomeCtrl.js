'use strict';

angular.module('app')
	.controller('HomeCtrl', ['$scope',
		function($scope) {

			$scope.greeting = 'hello world';

		}]);