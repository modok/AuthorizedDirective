angular.module('Sample', ['maga-library'])
.controller('mainCtrl', ['$scope'
	, function ($scope) {
		$scope.forRoles = {
			admin: ['admin'],
			user: ['user'],
			both: ['user', 'admin']
		};
		$scope.yourRoles = ['admin'];
	}]);