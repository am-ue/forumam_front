(function () {

    angular
        .module('accueil')
        .controller('accueilController', [
            '$rootScope', '$scope', '$location', 'accueilService',
            accueilController
        ]);

    function accueilController($rootScope, $scope, $location, accueilService) {
        console.log('accueilController');

        $scope.actualites = [
            {
                title: 'J-3 avant le Salon !',
                type: 2,
                description: 'Découvrez l’avant première du Forum Arts & Métiers...',
                image: 'assets/img/news_img01.jpg'
            },
            {
                title: 'Préparez votre venue',
                type: 2,
                description: 'L’application mobile vous ouvre l\'accès à une myriade de services...',
                image: 'assets/img/HB.jpg'
            },
            {
                title: 'Retour sur la 35e édition',
                type: 1,
                description: 'Renouveau pour le Forum : communication, identité visuelle... le « must have » !',
                image: 'assets/img/news_img01.jpg'
            },
            {
                title: 'Le Career Center',
                type: 2,
                description: 'Plateforme internet accessible à tous les étudiants des Arts & Métiers...',
                image: 'assets/img/news_img01.jpg'
            },
            {
                title: 'Le Career Center',
                type: 2,
                description: 'Renouveau pour le Forum : communication, identité visuelle... le « must have » !',
                image: 'assets/img/news_img01.jpg'
            }
        ];

        $scope.types_actualites = {
            1: {
                id: 1,
                name: 'article',
                class: '',
                icon: 'assets/img/article_icn.png',
                description: ''
            },
            2: {
                id: 2,
                name: 'video',
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

        //TODO
        $scope.headerBar = function () {
            if ($(window).scrollTop() >= 50) {
                $('.page_cover').addClass('scrolled');
            } else {
                $('.page_cover').removeClass('scrolled');
            }
        };

        $scope.scroll = function () {
            var home_page = angular.element(document.getElementsByClassName("home_page"));
            if (home_page.length) {
                var presentationSection = angular.element(document.querySelector("#presentation_area"));
                var newsSection = angular.element(document.querySelector("#news_area"));
                var spacesSection = angular.element(document.querySelector("#spaces_area"));
                var infoPraticSection = angular.element(document.querySelector("#info_pratic_area"));
                var contactSection = angular.element(document.querySelector("#contact_area"));
                var stickNavLinks = $('.stick_nav li a');
                var _thisWindow = $(window);

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
        };
        /*To Make specific fixed menu items active according to the main section shoed in the screen*/
        //$(window).scroll($scope.scroll());
        //$(window).scroll($scope.h eaderBar());
        /*End scroll*/

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
            console.log('showArticle index ', index);
            $scope.currentActualite = $scope.actualites[index];
            $scope.currentIndex = index;
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

    }

})
();
