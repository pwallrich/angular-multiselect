angular.module('app', ['am.multiselect'])

.controller('appCtrl', ['$scope', function($scope){
    $scope.list = [];
    for(var i = 0; i < 10; i++){
        $scope.list.push(i);
    }
    $scope.selectedList = $scope.list[10];
}]);
