(function() {
'use strict';

    angular
        .module('app', [])
        .controller('HomeController', HomeController);

    HomeController.inject = ['$log'];
    function HomeController($log) {
        var vm = this;
        vm.title = "Hello World";
        

        activate();

        ////////////////

        function activate() { }
    }
})();