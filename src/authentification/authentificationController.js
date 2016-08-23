(function () {

    angular
        .module('authentification')
        .controller('authentificationController', [
            '$rootScope', '$scope', '$location', 'authentificationService',
            authentificationController
        ]);

    function authentificationController($rootScope, $scope, $location, authentificationService) {
        console.log('authentificationController');

        $scope.currentPath = $location.path().split('/')[1];
        $scope.company={};

        /* afficher block connexion */
        $scope.showConnexion = function (event) {
            var _this = $(event.currentTarget);
            _this.addClass("active");
            $scope.displayLogin();
        };

        $scope.displayLogin = function () {
            var inscriptionTitle = angular.element(document.getElementsByClassName("title_inscription"));
            inscriptionTitle.removeClass("active");
            var espace_inscription = angular.element(document.querySelector("#espace_inscription"));
            espace_inscription.hide();
            var espace_connexion = angular.element(document.querySelector("#espace_connexion"));
            espace_connexion.show();
            return false;
        };

        /* afficher block inscription */
        $scope.showInscription = function (event) {
            var _this = $(event.currentTarget);
            _this.addClass("active");
            $scope.displaySingup();
        };

        $scope.displaySingup = function () {
            var connexionTitle = angular.element(document.getElementsByClassName("title_connexion"));
            connexionTitle.removeClass("active");
            var espace_inscription = angular.element(document.querySelector("#espace_inscription"));
            espace_inscription.show();
            var espace_connexion = angular.element(document.querySelector("#espace_connexion"));
            espace_connexion.hide();
            return false;
        };

        if ($scope.currentPath && $scope.currentPath == 'signup') {
            var inscriptionTitle = angular.element(document.getElementsByClassName("title_inscription"));
            inscriptionTitle.addClass("active");
            $scope.displaySingup();
        } else {
            var connexionTitle = angular.element(document.getElementsByClassName("title_connexion"));
            connexionTitle.addClass("active");
            $scope.displayLogin();
        }

        $scope.signin = function () {

        };

        $scope.signup = function (company) {
            $scope.company = company;
            formData = new FormData();
            formData.append('name',  $scope.company.name);
            formData.append('nameRespo',  $scope.company.nameRespo);
            formData.append('password',  $scope.company.password);
            formData.append('email',  $scope.company.email);
            formData.append('phone',  $scope.company.phone);
            formData.append('facturation',  $scope.company.facturation);
            //console.log("formData",formData);
            authentificationService.signup(formData, function (res) {
                $scope.success = res.success;
            }, function (res) {
                console.log(" res.error", res.errors);
                if(!angular.isObject(res.errors)){
                    $scope.errors = res.errors;
                }else{
                    $scope.formErrors = res.errors;
                }
            })
        };
    }

})
();
