(function () {
    var commons = angular.module('commons', []);

    commons.controller('BodyController', ["$scope", "$location", "$rootScope", BodyController]);

    function BodyController($scope, $location, $rootScope) {
        if ($location.path() == '/' || $location.path() == '') {
            $location.path('accueil');
        }

        $scope.$on('$stateChangeSuccess', function ($currentRoute, $previousRoute) {
            console.log('Current route name: ' + $location.path());
            $scope.targetUrl = $location.path().split('/')[1];

        });


        //TODO
        $scope.headerBar = function () {
            var page_cover = angular.element(document.getElementsByClassName("page_cover"));
            if ($(window).scrollTop() >= 50) {
                page_cover.addClass('scrolled');
            } else {
                page_cover.removeClass('scrolled');
            }
        };
        $scope.scroll = function () {
            var home_page = angular.element(document.getElementsByClassName("home_page"));
            var info_pratic_page = angular.element(document.getElementsByClassName("info_pratic_page"));
            var biensepreparer_page = angular.element(document.getElementsByClassName("biensepreparer_page"));
            var stickNavLinks = $('.stick_nav li a');
            var _thisWindow = $(window);
            if (home_page.length) {
                var presentationSection = angular.element(document.querySelector("#presentation_area"));
                var newsSection = angular.element(document.querySelector("#news_area"));
                var spacesSection = angular.element(document.querySelector("#spaces_area"));
                var infoPraticSection = angular.element(document.querySelector("#info_pratic_area"));
                var contactSection = angular.element(document.querySelector("#contact_area"));

                if (_thisWindow.scrollTop() >= presentationSection.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    //$('.stick_nav li a[href=#' + presentationSection.attr('id') + ']').addClass("active");
                }
                if (_thisWindow.scrollTop() >= newsSection.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    //$('.stick_nav li a[href=#' + newsSection.attr('id') + ']').addClass("active");
                }
                if (_thisWindow.scrollTop() >= spacesSection.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    //$('.stick_nav li a[href=#' + spacesSection.attr('id') + ']').addClass("active");
                }
                if (_thisWindow.scrollTop() >= infoPraticSection.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    //$('.stick_nav li a[href=#' + infoPraticSection.attr('id') + ']').addClass("active");
                }
                if (_thisWindow.scrollTop() >= contactSection.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    //$('.stick_nav li a[href=#' + contactSection.attr('id') + ']').addClass("active");
                }
            }

            if (info_pratic_page.length) {
                var forumPlanSection = angular.element(document.querySelector("#forum_plan_area"));
                var infoPraticSectionBiensepreparer = angular.element(document.querySelector("#biensepreparer_area"));
                if (_thisWindow.scrollTop() >= forumPlanSection.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    //$('.stick_nav li a[href=#' + forumPlanSection.attr('id') + ']').addClass("active");
                }
                if (_thisWindow.scrollTop() >= infoPraticSectionBiensepreparer.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    //$('.stick_nav li a[href=#' + infoPraticSectionBiensepreparer.attr('id') + ']').addClass("active");
                }
            }

            if (biensepreparer_page.length) {
                var biensepreparerSection = angular.element(document.querySelector("#biensepreparer_area"));
                var carreSection = angular.element(document.querySelector("#carre_area"));
                var programmeSection = angular.element(document.querySelector("#programme_area"));
                if (_thisWindow.scrollTop() >= biensepreparerSection.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    //$('.stick_nav li a[href=#' + biensepreparerSection.attr('id') + ']').addClass("active");
                }
                if (_thisWindow.scrollTop() >= carreSection.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    //$('.stick_nav li a[href=#' + carreSection.attr('id') + ']').addClass("active");
                }
                if (_thisWindow.scrollTop() >= programmeSection.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    //$('.stick_nav li a[href=#' + programmeSection.attr('id') + ']').addClass("active");
                }
            }
        };

        /*To Make specific fixed menu items active according to the main section shoed in the screen*/
        //$(window).scroll($scope.scroll());
        //$(window).scroll($scope.headerBar());
        /*End scroll*/

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

        $scope.menuBtn = function (event) {
            var _this = $(event.currentTarget);
            if (_this.hasClass('is-active')) {
                _this.removeClass('is-active');
            } else {
                _this.addClass('is-active');
            }
        };


    }
})
();
