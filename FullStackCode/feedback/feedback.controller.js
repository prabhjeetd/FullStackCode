(function () {
    'use strict';

    angular
        .module('app')
        .controller('FeedBackController', FeedBackController);

    FeedBackController.$inject = ['$http','$location', '$rootScope', 'AuthenticationService'];
    function FeedBackController($http,$location, $rootScope, AuthenticationService) {
        var vm = this;
        vm.listOfFeedbacks = {};
        initController();
        vm.showMessage = "";
        vm.feedback = feedback;
        vm.addfeedback = addfeedback;
        vm.newAddFeedback = newAddFeedback;
        function initController() 
        {
            //feedback();
            vm.showList = false;
            vm.showFeedBackForm = false;
            vm.newfeedback = {
                FromEmployee: "",
                ToEmployee: "",
                Feedback: ""


            };


        }

        function addfeedback() {
            vm.showFeedBackForm = true;
            vm.showList = false;
}
        function newAddFeedback()
        {
            var feedback1 = {
                FromEmployee: vm.newfeedback.FromEmployee,
                ToEmployee: vm.newfeedback.ToEmployee,
                Feedback: vm.newfeedback.Feedback


            };


            console.log(feedback1);

            $http.post('/api/FeedBack/CreateFeedBack', feedback1).then(function (fedback) {
                if (fedback.data)
                {
                    vm.showMessage = "Feed back submitted succesfully";
                    $location.path('/feedback')

}
                //console.log(feedback.data);

                    

            });



}
        function feedback()
        {
            vm.showFeedBackForm = false;
            var response;
            $http.get('/api/Users/GetFeedBacks')
                .then(function (user) {
                    if (user.data !== null) {
                        vm.showList = true;

                        vm.listOfFeedbacks = user.data;

                    } else {
                        vm.listOfFeedbacks = { success: false, message: 'Cannot fetch feedbacks' };
                    }
                    // callback(response);
                });
         //   vm.listOfFeedbacks = response;
                    console.log(vm.listOfFeedbacks);
        }
       
    }

})();