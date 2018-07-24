(function () {
    'use strict';
    var controllerId = 'admin';
    angular.module('app').controller(controllerId, ['common', 'GeneralActionService', '$scope', '$location', admin]);

    function admin(common, GeneralActionService, $scope, $location) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Admin';

        var errResponse = function (res) {
            console.log(res);
        }

        var response = function (res) {
            vm.post = res.data;
        }

        GeneralActionService.get("posts", response, errResponse);

        $scope.selectPst = function(item) {
            $location.path("/" + item);
        }

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Admin View'); });
        }
    }
})();