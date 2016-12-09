(function(){
    'use strict';

    angular.module('accueil')
        .service('accueilService', ['$q', 'restService', accueilService]);


    function accueilService($q, restService) {

        return {
            loadPosts: function () {
                return restService.call('GET', 'posts', {});
            },
            sendEmail: function(data, success, error)  {
                data = (typeof data === 'undefined') ? {} : data;
                return restService.call('POST', "email", data).success(success).error(error);
            }
        };
    }

})();
