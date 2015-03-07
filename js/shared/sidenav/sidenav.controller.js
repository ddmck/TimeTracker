angular.module("SideNav", []).controller("SideNavController", SideNavController);

function SideNavController($scope, $timeout, $mdSidenav){
  $scope.close = function() {
    $mdSidenav('left').close()
  };
}