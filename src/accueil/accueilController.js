(function () {

    angular
        .module('accueil')
        .controller('accueilController', [
            '$rootScope', '$scope', '$location', 'accueilService',
            accueilController
        ]);

    function accueilController($rootScope, $scope, $location, accueilService) {
        console.log('accueilController');

        $rootScope.types_actualites = {
            'article': {
                id: 1,
                name: 'article',
                class: '',
                icon: 'assets/img/article_icn.png',
                description: ''
            },
            'video': {
                id: 2,
                name: 'vidéo',
                class: 'video_article',
                icon: 'assets/img/video_icn.png',
                description: ''
            }
        };

        $scope.presentionHeight = function () {
            var presentionBlock = angular.element(document.getElementsByClassName("presentation_area"));
            if (presentionBlock.length) {
                var windowHeight = $(window).outerHeight();
                var presentationBlockoffset = presentionBlock.offset().top;
                var presentationHeight = windowHeight - presentationBlockoffset;
                presentionBlock.css('height', presentationHeight);
            }
        };
        $scope.presentionHeight();

        /* Load mapPlan */
        $scope.loadMapPlan = function () {
            var mapBlock = angular.element(document.querySelector('#map_plan'));
            if (mapBlock.length) {
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

        $scope.loadMapPlan();
        /* End Load mapPlan */

        $scope.showArticle = function (index) {
            $rootScope.currentActualite = $scope.actualites[index];
            var newsItems = $('.news_list > li > a');
            if (newsItems.length) {
                var articleAsidePopin = angular.element(document.getElementsByClassName("article_body"));
                articleAsidePopin.addClass('active');
                var newsSection = angular.element(document.querySelector('#news_area'));
                var targetLinkOffset = newsSection.offset().top - 62;
                $('html,body').stop().animate({scrollTop: targetLinkOffset}, 600);
                return false;
            }
        };

        $scope.hideArticle = function () {
            var newsItems = $('.news_list > li > a');
            if (newsItems.length) {
                var articleAsidePopin = angular.element(document.getElementsByClassName("article_body"));
                articleAsidePopin.removeClass('active');
                return false;
            }
        };

        accueilService.loadAll()
            .success(function (data) {
                $scope.actualites = data;
            })
            .error(function (error) {
            console.error(error);
        });


    }

})
();
