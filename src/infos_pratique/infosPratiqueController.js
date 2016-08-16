(function () {

    angular
        .module('infosPratique')
        .controller('infosPratiqueController', [
            '$rootScope', '$scope', '$location', 'infosPratiqueService',
            infosPratiqueController
        ]);

    function infosPratiqueController($rootScope, $scope, $location, infosPratiqueService) {
        console.log('infosPratiqueController');

        $scope.planSwitcher = function(event){
            var presentionBlock = $('.plan_switcher_area > button');
            var _this = $(event.currentTarget);
            presentionBlock.removeClass('active');
            _this.addClass('active');

            $('.plan_switcher_content > div').hide();
            //$('.plan_switcher_content > div').hide()
            $(_this.attr('data-target')).show()
        };

    }

})
();
