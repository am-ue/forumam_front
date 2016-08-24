'use strict';


app.directive('article', function ($compile, $rootScope, $templateRequest) {
    return {
        restrict: "EA",
        templateUrl: 'src/directives/views/detailsArticle.html',
        scope: {
            actualite: '=actualiteData'
        },
        link: function (scope, element, attrs) {
        },
        controller: function ($rootScope, $scope, $element,$window) {
            $scope.types_actualites = $rootScope.types_actualites;
            $scope.hideArticle = function () {
                $rootScope.hideArticle();
            };

            $scope.goYoutube = function (youtube_id) {
                $window.open("http://www.youtube.com/v/" + youtube_id, '_blank');
            };

        }
    }
});