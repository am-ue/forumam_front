(function () {

    angular
        .module('exposants')
        .controller('exposantsController', [
            '$rootScope', '$scope', '$location', 'exposantsService','$filter',
            exposantsController
        ]);

    function exposantsController($rootScope, $scope, $location, exposantsService,$filter) {
        console.log('exposantsController');

        $scope.showExposant = function (index, event) {
            $scope.currentExposant = $scope.companies[index];
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

        exposantsService.loadAllCompanies().success(function (data) {
                $scope.companies = data;
            })
            .error(function (error) {
                console.error(error);
            });

        exposantsService.loadAllCategories().success(function (data) {
                $scope.categories = data;
            })
            .error(function (error) {
                console.error(error);
            });

        $scope.resetSearch = function(){
            $scope.selectedCategory = null;
            $scope.search = '';
        }
    }

})
();
