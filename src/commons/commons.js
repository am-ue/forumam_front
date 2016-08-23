(function () {
    var commons = angular.module('commons', []);

    commons.controller('BodyController', ["$scope", "$location", "$rootScope","$state", BodyController]);

    function BodyController($scope, $location, $rootScope,$state) {
        if ($location.path() == '/' || $location.path() == '') {
            $location.path('accueil');
        }

        $rootScope.selectedCategory = null;
        $rootScope.search = '';

        $scope.$on('$stateChangeSuccess', function ($currentRoute, $previousRoute) {
            console.log('Current route name: ' + $location.path());
            $('html,body').stop().animate({ scrollTop: 0 },600);
            $rootScope.targetUrl = $location.path().split('/')[1];
        });

        $scope.targetPage = function (path) {
            $location.path(path);
        };

        $scope.targetPageMobile = function (path) {
            $scope.targetPage(path);
            $scope.menuBtn();
        };

        /*  scrollToEffect : To animate the default scrolling to any of he main sections*/
        $scope.stickNavLinks = function (event) {
            event.preventDefault();
            var _this = $(event.currentTarget);
            var targetLinkOffset = $(_this.attr('data-href')).offset().top - 62;
            _this.addClass('active');

            /*$('html,body');*/
            $('html,body').stop().animate({scrollTop: targetLinkOffset}, 1200);
        };

        $scope.scroll_btm = function (event) {
            event.preventDefault();
            var _this = $(event.currentTarget);
            var targetLinkOffset = $(_this.attr('data-href')).offset().top - 62;
            _this.addClass('active');

            /*$('html,body');*/
            $('html,body').stop().animate({scrollTop: targetLinkOffset}, 1200);
        };
        /* End scrollToEffect */

        $scope.menuBtn = function () {
            //var _this = $(event.currentTarget);
            var menu_btn = angular.element(document.getElementsByClassName("menu_btn"));
            if (menu_btn.hasClass('is-active')) {
                menu_btn.removeClass('is-active');
            } else {
                menu_btn.addClass('is-active');
            }
        };


    }
})
();
