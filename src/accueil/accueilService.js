(function(){
    'use strict';

    angular.module('accueil')
        .service('accueilService', ['$q', 'restService', accueilService]);


    function accueilService($q, restService) {

        return {
            loadAll: function () {
                return restService.call('GET', 'actualites', {});
            },
            sendEmail: function(data, success, error)  {
                data = (typeof data === 'undefined') ? {} : data;
                return restService.call('POST', "auth/signup", data).success(success).error(error);
            }
        };
    }

})();
