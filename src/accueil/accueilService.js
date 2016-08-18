(function(){
    'use strict';

    angular.module('accueil')
        .service('accueilService', ['$q', 'restService', accueilService]);


    function accueilService($q, restService) {

        return {
            loadAll: function () {
                return restService.call('GET', 'actualites', {});
            }
        };
    }

})();
