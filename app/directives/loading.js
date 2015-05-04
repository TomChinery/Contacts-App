var loading = angular.module('loading', []);

loading.directive('loading', ['$http', function ($http) {

  return {
    restrict: "A",
    link: function (scope, element, attr) {

      scope.isLoading = function () {
        return $http.pendingRequests.length > 0;
      };

      scope.$watch(scope.isLoading, function (waiting) {
        if ( waiting ) {
          element.show();
        } else {
          element.hide();
        }
      });
    }
  }

}]);
