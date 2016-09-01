(function () {

    angular
        .module('exposants')
        .controller('exposantsController', [
            '$rootScope', '$scope', '$location', 'exposantsService', '$q', '$stateParams', '$timeout', '$state',
            exposantsController
        ]);

    function exposantsController($rootScope, $scope, $location, exposantsService, $q, $stateParams, $timeout, $state) {
        $rootScope.getExposantsPromise = $q.defer();
        exposantsService.loadAllCompanies().success(function (data) {
                $rootScope.getExposantsPromise.resolve();
                $rootScope.exposants = data;
            })
            .error(function (error) {
                $rootScope.getExposantsPromise.resolve();
                console.error(error);
            });

        $scope.idExposant = $stateParams.id;

        $scope.getExposant = function (idExposant) {
            $scope.exposant = {};
            $scope.exposant = _.findWhere($rootScope.exposants, {'id': parseInt(idExposant)});
            return $scope.exposant ? $scope.exposant : null;
        };

        $scope.showExposant = function (id) {
            $state.go('exposants', {id: id}, {notify: false});
            $scope.displayModalExposant(id);
        };

        $scope.displayModalExposant = function (id) {
            $rootScope.currentExposant = $scope.getExposant(id);
            if ($rootScope.currentExposant) {
                var exposantsItems = $('.exposants_liste li a');
                exposantsItems.removeClass('active');

                $timeout(function () {
                    var _body = angular.element(document.getElementsByTagName("body"));
                    if (_body.hasClass('exposant_opened')) {
                        _body.removeClass('exposant_opened')
                    } else {
                        _body.addClass('exposant_opened')
                    }
                }, 500);

                $('html,body').stop().animate({scrollTop: 0}, 300);
                // Add div for control hide modal
                angular.element(document.getElementsByClassName("cover")).css('display', 'block');
            }
        };

        $rootScope.getExposantsPromise.promise.then(function () {
            if ($scope.idExposant && $scope.idExposant != '') {
                $scope.displayModalExposant($scope.idExposant);
            }
        });

        exposantsService.loadAllCategories().success(function (data) {
                $scope.categories = data;
                $scope.categories.unshift({
                    "id": null,
                    "name":"Domaines d’activité"
                });
            })
            .error(function (error) {
                console.error(error);
            });

        $scope.resetSearch = function () {
            $scope.selectedCategory = null;
            $scope.search = '';
        };

        $scope.$watch('selectedCategory', function (newValue, oldValue) {
            $rootScope.selectedCategory = $scope.selectedCategory;
        });

        $scope.$watch('search', function (newValue, oldValue) {
            $rootScope.search = $scope.search;
        });

    }

})
();
