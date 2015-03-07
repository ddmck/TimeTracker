angular.module("NewTasks", []).controller("NewTasksController", NewTasksController);

function NewTasksController($scope){
  $scope.task = {};
  $scope.tasks = [];

  $scope.submit = function(task){
    $scope.tasks.push(task);
    $scope.task = null;
  }
}