'use strict';


app.directive('exposant', function ($compile, $rootScope, $templateRequest) {
    return {
        restrict: "EA",
        templateUrl: 'src/directives/views/detailsExposant.html',
        scope: {
            exposant: '=exposantData'
        },
        link: function (scope, element, attrs) {
        },
        controller: function ($rootScope, $scope, $element,$state) {

            $scope.hideExposant = function () {
                $rootScope.hideExposant();
            };

            $scope.showPost = function (id) {
                $state.go('actualites', { id: id });
            };

        }
    }
});
