(function () {
    'use strict';

    app.service('restService', ['$q', '$http', '$rootScope','urls', restService]);

    /**
     * Users DataService
     * Uses embedded, hard-coded data model; acts asynchronously to simulate
     * remote data service call(s).
     *
     * @returns {{loadAll: Function}}
     * @constructor
     */
    function restService($q, $http, $rootScope,urls) {
        var url = urls.BASE ;
        var canceler = $q.defer();
        return {
            call: function (method, serviceURI, params, config, callBackFunction) {
                method = method.toUpperCase();
                angular.forEach(params, function (data, index) {
                    if ((data === "") || (data === undefined)) {
                        delete params[index];
                    }
                });
                var promise;
                if (method && method === "POST" || method && method === "PUT") {
                    config = (typeof config === 'undefined') ? {} : config;
                    config['timeout'] = canceler.promise;
                }
                if (method && method === "POST") {
                    console.log('promise Init Post');
                    promise = $http.post(url + serviceURI, params, config);
                } else if (method && method === "GET") {
                    console.log('promise Init Get');
                    params['timeout'] = canceler.promise;
                    promise = $http.get(url + serviceURI, params);
                } else if (method && method === "PUT") {
                    console.log('promise Init PUT');
                    params['timeout'] = canceler.promise;
                    promise = $http.put(url + serviceURI, params, config);
                } else if (method && method === "DELETE") {
                    console.log('promise Init DELETE');
                    params['timeout'] = canceler.promise;
                    promise = $http.delete(url + serviceURI, params);
                }

                if (callBackFunction !== undefined) {
                    return promise.then(callBackFunction, function () {
                    }, function (progress) {
                        // Log the progress as it comes in.
                        console.log("Request progress: " + Math.round(progress * 100) + "%");
                    });
                } else {
                    return promise;
                }
            },
            cancel: function () {
                console.log("user canceled request");
                $rootScope.userCancel = true;
                canceler.resolve();
                canceler = $q.defer();
            }
        };
    }

})();
