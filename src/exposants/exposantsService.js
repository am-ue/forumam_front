(function(){
    'use strict';

    angular.module('exposants')
        .service('exposantsService', ['$q', 'restService', exposantsService]);


    function exposantsService($q, restService) {

        return {
            loadAllCompanies: function () {
                return restService.call('GET', 'companies', {});
            },
            loadAllCategories: function () {
                return restService.call('GET', 'categories', {});
            }
        };
    }

})();
