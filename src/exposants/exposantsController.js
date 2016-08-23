(function () {

    angular
        .module('exposants')
        .controller('exposantsController', [
            '$rootScope', '$scope', '$location', 'exposantsService', '$q', '$stateParams', '$timeout', '$state',
            exposantsController
        ]);

    function exposantsController($rootScope, $scope, $location, exposantsService, $q, $stateParams, $timeout,$state) {
        console.log('exposantsController');

        $rootScope.getExposantsPromise = $q.defer();
        exposantsService.loadAllCompanies().success(function (data) {
                $rootScope.getExposantsPromise.resolve();
                $rootScope.exposants = data;
            })
            .error(function (error) {
                $rootScope.getExposantsPromise.resolve();
                console.error(error);
            });

        $scope.idExposant = $stateParams.param;

        $scope.getExposant = function (idExposant) {
            var currentExposant = _.findWhere($rootScope.exposants, {'id': parseInt(idExposant)});
            return currentExposant ? currentExposant : null;
        };

        $scope.showExposant = function (index) {
            $rootScope.currentExposant = $rootScope.exposants[index];
            $state.reload();
            $location.path("listExposants/" + $rootScope.currentExposant.id);
        };

        $rootScope.getExposantsPromise.promise.then(function () {
            if ($scope.idExposant && $scope.idExposant != '') {
                $rootScope.currentActualite = $scope.getExposant($scope.idExposant);
                var exposantsItems = $('.exposants_liste li a');
                exposantsItems.removeClass('active');

                $timeout(function () {
                    var _body = $('body');
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
                return false;
            }
        });

        exposantsService.loadAllCategories().success(function (data) {
                $scope.categories = data;
            })
            .error(function (error) {
                console.error(error);
            });

        $scope.resetSearch = function () {
            $scope.selectedCategory = null;
            $scope.search = '';
        }
    }

})
();
