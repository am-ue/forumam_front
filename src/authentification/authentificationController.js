(function () {

    angular
        .module('authentification')
        .controller('authentificationController', [
            '$rootScope', '$scope', '$location', 'authentificationService','$state', 'urls', '$sce', '$window',
            authentificationController
        ]);

    function authentificationController($rootScope, $scope, $location, authentificationService, $state, urls, $sce,$window) {
        //console.log('authentificationController');

        $scope.login_url = $sce.trustAsResourceUrl(urls.ADMIN + '/login');
        $scope.currentPath = $location.path().split('/')[1];
        $scope.company = {};
        $scope.user = {};
       /* Footer qui remonte lorsque l'écran est grand */
        var height_windowElement = angular.element($window).height() ;
        var connexion_area = angular.element(document.querySelector("#conexion_area"));
        var height_header = angular.element(document.getElementsByClassName("main_head")).outerHeight();
        var height_footer = angular.element(document.getElementsByClassName("main_footer")).outerHeight();
        var height_connexion_area = height_windowElement - (height_header + height_footer);
        connexion_area[0].style.height = height_connexion_area + 'px';
        /* fin traitement footer */

        /* afficher block connexion */
        $scope.showConnexion = function (event) {
            $state.go('connexion', {}, {reload: true});
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
            $state.go('inscription', {}, {reload: true});
        };

        $scope.displaySignup = function () {
            var connexionTitle = angular.element(document.getElementsByClassName("title_connexion"));
            connexionTitle.removeClass("active");
            var espace_inscription = angular.element(document.querySelector("#espace_inscription"));
            espace_inscription.show();
            var espace_connexion = angular.element(document.querySelector("#espace_connexion"));
            espace_connexion.hide();
            return false;
        };

        if ($scope.currentPath && $scope.currentPath == 'inscription') {
            var inscriptionTitle = angular.element(document.getElementsByClassName("title_inscription"));
            inscriptionTitle.addClass("active");
            $scope.displaySignup();
        } else {
            var connexionTitle = angular.element(document.getElementsByClassName("title_connexion"));
            connexionTitle.addClass("active");
            $scope.displayLogin();
        }

        $scope.signin = function () {

        };

        $scope.signup = function (company, user) {
            $scope.formErrors = undefined;
            $scope.errors = undefined;
            $scope.success = undefined;

            $scope.submitted = true;
            if ($scope.inscriptionForm.$invalid) {
                return;
            }
            $scope.company = company;
            formData = new FormData();
            formData.append('company[name]', $scope.company.name);
            formData.append('company[website]', $scope.company.website);
            formData.append('company[summary]', $scope.company.summary);
            formData.append('user[first_name]', $scope.user.first_name);
            formData.append('user[last_name]', $scope.user.last_name);
            formData.append('user[phone]', $scope.user.phone);
            formData.append('user[email]', $scope.user.email);
            formData.append('user[password]', $scope.user.password);
            formData.append('user[password_confirmation]', $scope.user.password_confirmation);
            console.log("formData", formData);
            authentificationService.signup(formData, function (res) {
                console.log("signup result", res);
                if (angular.isObject(res) && res.code === 200) {
                    $scope.success = res.message;
                }
            }, function (res) {
                console.log("signup errors", res);
                if (angular.isObject(res.errors) && res.code === 422) {
                    $scope.formErrors = res.errors;
                    console.log('$scope.formErrors', $scope.formErrors);
                } else {
                    $scope.errors = res.errors;
                }
            })
        };
    }

})
();
