(function () {

    angular
        .module('biensePreparer')
        .controller('biensePreparerController', [
            '$rootScope', '$scope', '$location', 'biensePreparerService','$q', '_', '$sce',
            biensePreparerController
        ]);

    function biensePreparerController($rootScope, $scope, $location, biensePreparerService, $q,  _, $sce) {
        $rootScope.getTextesPromise = $q.defer();

        if (!$rootScope.textes || $rootScope.textes.length < 0) {
            biensePreparerService.loadConfigVariables()
                .success(function (data) {
                    $rootScope.getTextesPromise.resolve();
                    $rootScope.textes = _.reduce(data, function (obj, texte) {
                        obj[texte.key] = $sce.trustAsHtml(texte.value);
                        return obj;
                    }, {});
                })
                .error(function (error) {
                    $rootScope.getTextesPromise.resolve();
                    console.error('ConfigVariables', error);
                });
        }

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
