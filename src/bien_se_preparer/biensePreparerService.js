(function(){
    'use strict';

    angular.module('biensePreparer')
        .service('biensePreparerService', ['restService', biensePreparerService]);

    function biensePreparerService(restService) {

        return {
            loadConfigVariables: function () {
                return restService.call('GET', 'config-variables', {});
            }
        };
    }

})();
