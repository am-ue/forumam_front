(function () {

    angular
        .module('exposants')
        .controller('exposantsController', [
            '$rootScope', '$scope', '$location', 'exposantsService',
            exposantsController
        ]);

    function exposantsController($rootScope, $scope, $location, exposantsService) {
        console.log('exposantsController');

        $scope.exposants = [
            {
                title: 'Novo Nordisk',
                description: 'Description de l’exposant',
                image: 'assets/img/novonordisk_logo.png'
            },
            {
                title: 'Novo Nordisk1',
                description: 'Description de l’exposant',
                image: 'assets/img/leroymerlin_logo(02).png'
            },
            {
                title: 'Novo Nordisk2',
                description: 'Description de l’exposant en une phrase',
                image: 'assets/img/lorial_logo.png'
            },
            {
                title: 'Novo Nordisk3',
                description: 'Description de l’exposant',
                image: 'assets/img/lilly_logo.png'
            },
            {
                title: 'Novo Nordisk4',
                description: 'Description de l’exposant',
                image: 'assets/img/nestle_logo.png'
            },
            {
                title: 'Novo Nordisk5',
                description: 'Description de l’exposant',
                image: 'assets/img/novonordisk_logo.png'
            },
            {
                title: 'Novo Nordisk6',
                description: 'Description de l’exposant',
                image: 'assets/img/novonordisk_logo.png'
            },
            {
                title: 'Novo Nordisk7',
                description: 'Description de l’exposant',
                image: 'assets/img/novonordisk_logo.png'
            },
            {
                title: 'Novo Nordisk8',
                description: 'Description de l’exposant',
                image: 'assets/img/novonordisk_logo.png'
            },
            {
                title: 'Novo Nordisk9',
                description: 'Description de l’exposant',
                image: 'assets/img/novonordisk_logo.png'
            }
        ];

        $scope.showExposant = function (index, event) {
            console.log('showExposant index ', index);
            //debugger;
            $scope.currentExposant = $scope.exposants[index];
            $scope.currentIndex = index;
            var exposantsItems = $('.exposants_liste li a');
            if (exposantsItems.length) {
                var _body = $('body');
                if (_body.hasClass('exposant_opened')) {
                    _body.removeClass('exposant_opened')
                } else {
                    _body.addClass('exposant_opened')
                }
                exposantsItems.removeClass('active');

                var _this = $(event.currentTarget);
                _this.addClass('active');

                $('html,body').stop().animate({scrollTop: 0}, 300);
                return false;
            }
        };
    }

})
();
