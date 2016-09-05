(function(){
    'use strict';

    angular.module('authentification')
        .service('authentificationService', ['restService', authentificationService]);


    function authentificationService(restService) {

        return {

            signup : function(data, success, error)  {
                data = (typeof data === 'undefined') ? {} : data;
                return restService.call('POST', "signup", data).success(success).error(error);
            }
        };
    }

})();
