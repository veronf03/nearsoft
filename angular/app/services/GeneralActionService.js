(function () {
    'use strict';

    var serviceId = 'GeneralActionService';
    angular.module('app').factory(serviceId, ['common', '$http', '$location', GeneralActionService]);

    function GeneralActionService(common, $http, $location) {

        var $q = common.$q;

        var service = {
            save: save,
            modify: modify,
            remove: remove,
            get: get
        };

        return service;

        //GET
        function get(controllerName, then, handleError) {
            var deferred = $q.defer();
            var request = $http({
                method: 'GET',
                url: "http://localhost:50000/" + controllerName
            });

            return request.then(function (response) {
                console.log(controllerName);
                then(response);
            },
                function (error) {
                    console.error(error);
                });
        }

        //PUT
        function modify(route, data, then, handleError) {
            var request = $http({
                method: "PUT",
                url: route,
                data: JSON.stringify(data)
            });

            return request.then(function (response) {
                then(response);
            },
                function (response) {
                    console.error(response);
                });
        }

        function remove(route, okResp, errorResp) {
            var request = $http({
                headers: { 'Content-Type': 'application/json;charset=utf-8' },
                method: "DELETE",
                url: route
            });

            return request.then(function (response) {
                okResp(response);
            },
                function (error) {
                    errorResp(Error);
                });
        }
        //POST
        function save(route, data, okResp, errorResp) {
            var request = $http({
                method: "POST",
                url: route,
                data: JSON.stringify(data)
            });

            return request.then(function (response) {
                okResp(response);
            },
                function (error) {
                    errorResp(Error);
                });
        }
    }
})();
