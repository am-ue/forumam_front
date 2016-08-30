(function () {
    var commons = angular.module('commons', []);

    commons.controller('BodyController', ["$scope", "$location", "$rootScope", "$state", BodyController]);

    function BodyController($scope, $location, $rootScope, $state) {
        if ($location.path() == '/' || $location.path() == '') {
            $location.path('accueil');
        }

        $rootScope.selectedCategory = null;
        $rootScope.search = '';

        $scope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
            console.log('Current route name: ' + $location.path());
            $rootScope.targetUrl = $location.path().split('/')[1];
            var _body = angular.element(document.getElementsByTagName("body"));
            $rootScope.previousState = from.name;
            $rootScope.currentState = to.name;
            //console.log('Previous state: ' + $rootScope.previousState);
            //console.log('Current state: ' + $rootScope.currentState);
            // Au changement de page, on scroll en haut de la page.
            if ($rootScope.previousState == 'actualites' && $rootScope.currentState == 'accueil') {
                $('html,body').stop().animate({scrollTop: $('#news_area').offset().top - 60}, 600);
            } else {
                $('html,body').stop().animate({scrollTop: 0}, 600);
            }
            _body.removeClass('page_cover');
            if ($rootScope.targetUrl === 'listeexposants' || ($rootScope.targetUrl.indexOf('exposants') !== -1)) {
                _body.addClass('exposants_page_cover');
            } else {
                _body.removeClass('exposants_page_cover');
                _body.removeClass('exposant_opened');
            }
        });

        $scope.targetPage = function (path) {
            $state.go(path, {target_area: ''}, {reload: true});
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

        $rootScope.hideArticle = function () {
            var cover = angular.element(document.getElementsByClassName("cover")).css('display', 'none');
            var newsItems = $('.news_list > li > a');
            if (newsItems.length) {
                var articleAsidePopin = angular.element(document.getElementsByClassName("article_body"));
                articleAsidePopin.removeClass('active');
                $rootScope.currentActualite = null;
            }
            $state.go('accueil', {}, {notify: false});
        };

        $rootScope.hideExposant = function () {
            var cover = angular.element(document.getElementsByClassName("cover")).css('display', 'none');
            var _body = $('body');
            var BodyScrollTop = _body.scrollTop();
            var exposantsItems = $('.exposants_liste li a');
            if (exposantsItems.length) {
                _body.removeClass('exposant_opened');
                $('html,body').stop().animate({scrollTop: BodyScrollTop}, 300);
            }
            $state.go('listeexposants', {}, {reload: true});
        };

        $rootScope.hideModals = function () {
            if ($rootScope.targetUrl == 'accueil' || $rootScope.targetUrl == 'actualites') {
                $rootScope.hideArticle();
            } else if ($rootScope.targetUrl == 'exposants' || $rootScope.targetUrl == 'listeexposants') {
                $rootScope.hideExposant();
            }
        };

        /* Load mapPlan */
        $rootScope.loadMapPlan = function () {
            var mapBlock = angular.element(document.querySelector('#map_plan'));
            if (mapBlock.length && typeof google === 'object' && typeof google.maps === 'object') {
                var myLatlng = new google.maps.LatLng(48.844559, 2.434568);
                var styleArray =
                    [
                        {
                            "featureType": "administrative.land_parcel",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.sports_complex",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#8e2862"
                                },
                                {
                                    "saturation": "76"
                                },
                                {
                                    "visibility": "on"
                                },
                                {
                                    "weight": "0.62"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "visibility": "off"
                                },
                                {
                                    "saturation": "0"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#f39200"
                                },
                                {
                                    "weight": "0.43"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#f5f5f5"
                                },
                                {
                                    "visibility": "on"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#d3d3d3"
                                }
                            ]
                        }
                    ]
                var mapOptions = {
                    zoom: 14,
                    center: myLatlng,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    disableDefaultUI: true,
                    styles: styleArray,
                    scrollwheel: false,
                    draggable: false
                };
                var map = new google.maps.Map(document.getElementById("map_plan"), mapOptions);


                //add a custom marker to the map
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(48.836291, 2.434390),
                    map: map,
                    visible: true,
                    icon: 'assets/img/default_marker.png',
                });
            }
        };
        /* End Load mapPlan */


    }
})
();
