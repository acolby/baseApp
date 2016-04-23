'use strict';

angular.module('app')
	.controller('RootCtrl', ['$scope',
		function($scope) {

			$scope.greeting = 'hello world';

		}]);