(function () {

    angular
        .module('authentification')
        .controller('authentificationController', [
            '$rootScope', '$scope', '$location', 'authentificationService',
            authentificationController
        ]);

    function authentificationController($rootScope, $scope, $location,authentificationService) {
        console.log('authentificationController');

        /* afficher block connexion */
        $scope.showConnexion =  function(event){
            var inscriptionTitle = angular.element(document.getElementsByClassName("title_inscription"));
            inscriptionTitle.removeClass("active");
            var _this = $(event.currentTarget);
            _this.addClass("active");
            var espace_inscription = angular.element(document.querySelector("#espace_inscription"));
            espace_inscription.hide();
            var espace_connexion =   angular.element(document.querySelector("#espace_connexion"));
            espace_connexion.show();
            return false;
        };

        /* afficher block inscription */
        $scope.showInscription =  function(event){
            var connexionTitle = angular.element(document.getElementsByClassName("title_connexion"));
            connexionTitle.removeClass("active");
            var _this = $(event.currentTarget);
            _this.addClass("active");
            var espace_inscription = angular.element(document.querySelector("#espace_inscription"));
            espace_inscription.show();
            var espace_connexion =   angular.element(document.querySelector("#espace_connexion"));
            espace_connexion.hide();
            return false;
        }
    }

})
();
