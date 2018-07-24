(function () {
    'use strict';
    var controllerId = 'postDescription';
    angular.module('app').controller(controllerId, ['common', 'GeneralActionService', '$scope', '$routeParams', postDescription]);

    function postDescription(common, GeneralActionService, $scope, $routeParams) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var vm = this;

            var errResponse2 = function (res) {
                console.log(res);
            }

            var response2 = function (res) {
                vm.postSelect = res.data;
            }

        GeneralActionService.get("posts/" + $routeParams.Id, response2, errResponse2);

            var errResponseComments = function (res) {
                console.log(res);
            }

            var responseComments = function (res) {
                vm.postComments = res.data;
            }

        GeneralActionService.get("posts/" + $routeParams.Id+"/comments", responseComments, errResponseComments);


        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Admin View'); });
        }
    }
})();