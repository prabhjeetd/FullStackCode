(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
    function LoginController($location, AuthenticationService, FlashService) {
        var vm = this;

        vm.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password).then( function (response) {
                if (response != null) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    //return response;
                    if(response.UserName=="admin")
                    {
                        $location.path("/register")
                    }
                    else
                    {
                        $location.path("/feedback");
                    }

                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });

         
        };
    }

})();
