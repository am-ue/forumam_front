(function () {

    angular
        .module('exposants')
        .controller('exposantsController', [
            '$rootScope', '$scope', '$location', 'exposantsService', '$q', '$stateParams', '$timeout', '$state',
            exposantsController
        ]);

    function exposantsController($rootScope, $scope, $location, exposantsService, $q, $stateParams, $timeout, $state) {
        //console.log('exposantsController');

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
            $state.go('exposants', {id: id}, {reload: true});
        };

        $rootScope.getExposantsPromise.promise.then(function () {
            if ($scope.idExposant && $scope.idExposant != '') {
                $rootScope.currentExposant = $scope.getExposant($scope.idExposant);
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
                    //TODO
                    //var target_news_area = angular.element(document.querySelector("#target_news_area"));
                    //var _this = $(event.currentTarget);
                    //_this.addClass('active');

                    $('html,body').stop().animate({scrollTop: 0}, 300);
                    // Add div for control hide modal
                    angular.element(document.getElementsByClassName("cover")).css('display', 'block');
                }
            }
        });

        exposantsService.loadAllCategories().success(function (data) {
                $scope.categories = data;
                $scope.categories.unshift({
                    "id": null,
                    "name":"All"
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
