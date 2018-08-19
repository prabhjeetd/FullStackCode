(function () {
    'use strict';

    angular
        .module('app')
        .factory('AuthenticationService', AuthenticationService);

    AuthenticationService.$inject = ['$http', '$cookies', '$rootScope', '$timeout'];
    function AuthenticationService($http, $cookies, $rootScope, $timeout) {
        var service = {};

        service.Login = Login;
        service.GetListOfFeedbacks = GetListOfFeedbacks;
        service.SetCredentials = SetCredentials;
        service.ClearCredentials = ClearCredentials;

        return service;

        function Login(userName, password) {

           
                var response;
         return   $http.post('/api/Users/GetByUsername', { UserName: userName, Password: password, IsAdmin :false})
                    .then(function (user) {
                        if (user.data !== null) {
                         return   response = user.data;
                        } else {
                           return response = { success: false, message: 'Username or password is incorrect' };
                        }
                        //callback(response);
                    });



        }

        function GetListOfFeedbacks()
        {

            var response;
            $http.get('/api/Users/GetFeedBacks')
                .then(function (user) {
                    if (user.data !== null) {
                       return response = user.data;
                    } else {
                      return  response = { success: false, message: 'Cannot fetch feedbacks' };
                    }
                   // callback(response);
                });


        }

        function SetCredentials(username, password) {

            $rootScope.globals = {
                currentUser: {
                    username: username,
                    authdata: password
                }
            };
//var cookieExp = new Date();
//            cookieExp.setDate(cookieExp.getDate() + 7);
//            $cookies.putObject('globals', $rootScope.globals, { expires: cookieExp });
        }

        function ClearCredentials() {
            $rootScope.globals = {};
            $cookies.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic';
        }
    }

    
})();