angular.module("AppController", []).controller("AppController", AppController);

function AppController($scope, $timeout, $mdSidenav){
  $scope.message = "Hi";

  $scope.toggleLeft = function() {
    $mdSidenav('left').toggle();
  };
};