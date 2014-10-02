angular.module('maga-library', [])
.directive('isAuthorized', ['roleService', function (roleService) {
	return {
		restrict: 'A',
		scope: {
			forRoles: '=',
			yourRoles: '=' 
		},
		link: function ($scope, iElement) {
			switch (iElement[0].tagName.toLowerCase()) {
				case 'button':
					if (!roleService.isInRole($scope.forRoles, $scope.yourRoles)) {
						isDisabled(iElement);
					}
					break;

				case 'input':
					if (!roleService.isInRole($scope.forRoles, $scope.yourRoles)) {
						isDisabled(iElement);
					}
					break;

				case 'textarea':
					if (!roleService.isInRole($scope.forRoles, $scope.yourRoles)) {
						isDisabled(iElement);
					}
					break;

				case 'form':
					if (!roleService.isInRole($scope.forRoles, $scope.yourRoles)) {
						isFormDisabled(iElement);
					}
					break;

				default:
					if (!roleService.isInRole($scope.forRoles, $scope.yourRoles)) {
						isRemoved(iElement);
					}
					break;
			}

			function isFormDisabled(el) {
				el.find('input').attr('disabled', 'disabled');
				el.find('button').attr('disabled', 'disabled');
				el.find('textarea').attr('disabled', 'disabled');
			}

			function isDisabled(el) {
				el.attr('disabled', 'disabled');
			}

			function isReadonly(el) {
				el.attr('readonly', 'readonly');
			}

			function isRemoved(el) {
				el.remove();
			}

		}
	};

}])
.factory('roleService', [function () {
	function ret() {
		this.isInRole = function (forRoles, yourRoles) {
			var r = false;
			angular.forEach(yourRoles, function (yourRole) {
					angular.forEach(forRoles, function (forRole) {
						if (yourRole === forRole) {
							r = true;
							return;
						}
					});
			});

			return r;
		}
	};

	return new ret();
}]);