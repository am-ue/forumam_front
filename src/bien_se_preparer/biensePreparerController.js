(function () {

    angular
        .module('biensePreparer')
        .controller('biensePreparerController', [
            '$rootScope', '$scope', '$location', 'biensePreparerService',
            biensePreparerController
        ]);

    function biensePreparerController($rootScope, $scope, $location, biensePreparerService) {
        //console.log('biensePreparerController');
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
    }

})
();
