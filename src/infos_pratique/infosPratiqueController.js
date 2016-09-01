(function () {

    angular
        .module('infosPratique')
        .controller('infosPratiqueController', [
            '$rootScope', '$scope', '$q', 'exposantsService',
            infosPratiqueController
        ]);

    function infosPratiqueController($rootScope, $scope, $q, exposantsService) {
        console.log('infosPratiqueController');
        $scope.categories = [];
        $scope.exposantsViews = [];
        $rootScope.getListExposantsPromise = $q.defer();
        /* Init map */
        $rootScope.loadMapPlan();

        $scope.planSwitcher = function (event) {
            var presentionBlock = $('.plan_switcher_area > button');
            presentionBlock.removeClass('active');
            var _this = $(event.currentTarget);
            //_this.addClass('active');
            //$('.plan_switcher_content > div').hide();
            $(_this.attr('data-target')).show()
        };

        $scope.exposantsByAlpha = function (event) {
            $scope.planSwitcher(event);
            $scope.exposants = $scope.exposants.sort(function (a, b) {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            });
            $scope.getListViews($scope.exposants);
        };

        $scope.exposantsByCategory = function (event) {
            $scope.planSwitcher(event);
            $scope.exposants = $scope.exposants.sort(function (a, b) {
                if (a.category.id < b.category.id) return -1;
                if (a.category.id > b.category.id) return 1;
                return 0;
            });

            $scope.getListViews($scope.exposants);
        };

        $scope.getListViews = function (data) {
            var sizeColumn = Math.floor(data.length / 5);
            var reste = data.length % 5;
            $scope.exposantsViews = [];
            var currentStartIndex = 0;
            for (var i = 0; i < 5; i++) {
                $scope.exposantsViews.push(data.slice(currentStartIndex, currentStartIndex + sizeColumn + (i <= reste + 1 ? 1 : 0)));
                currentStartIndex = currentStartIndex + sizeColumn + (i <= reste + 1 ? 1 : 0);
            }
            return $scope.exposantsViews;
        };

        $rootScope.getListExposantsPromise.promise.then(function () {
            $scope.exposantsByAlpha($scope.exposants);
        });
        if (!$rootScope.exposants || $rootScope.exposants.length < 0) {
            exposantsService.loadAllCompanies().success(function (data) {
                    $rootScope.exposants = angular.copy(data);
                    $scope.exposants = angular.copy(data);
                    $rootScope.getListExposantsPromise.resolve();
                })
                .error(function (error) {
                    $rootScope.getListExposantsPromise.resolve();
                    console.error(error);
                });
        } else {
            $scope.exposants =angular.copy($rootScope.exposants);
            $scope.exposantsByAlpha($scope.exposants);
        }

    }

})
();
