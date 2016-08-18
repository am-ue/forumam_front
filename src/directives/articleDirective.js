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
        controller: function ($rootScope, $scope, $element) {
            $scope.types_actualites = $rootScope.types_actualites;
            $scope.hideArticle = function () {
                var newsItems = $('.news_list > li > a');
                if (newsItems.length) {
                    var articleAsidePopin = angular.element(document.getElementsByClassName("article_body"));
                    articleAsidePopin.removeClass('active');
                    $rootScope.currentActualite = null;
                    return false;
                }
            };

        }
    }
});