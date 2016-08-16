'use strict';


app.directive('article', function ($compile, $rootScope, $templateRequest) {
    return {
        restrict: "EA",
        templateUrl: 'src/directives/views/detailsArticle.html',
        scope: {
            actualite: '=actualiteData',
            indexArticle: '=indexarticleData'
        },
        link: function (scope, element, attrs) {
        },
        controller: function ($rootScope, $scope, $element) {

            $scope.hideArticle = function (index) {
                console.log('hideArticle index ', index);
                var newsItems = $('.news_list > li > a');
                if (newsItems.length) {
                    var articleAsidePopin = angular.element(document.getElementsByClassName("article_" + index));
                    articleAsidePopin.removeClass('active');
                    return false;
                }
            };

        }
    }
});
