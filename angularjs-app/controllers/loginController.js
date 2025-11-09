FarmToExport.controller('loginController', function($scope) {
    $scope.login = function() {
        if($scope.username && $scope.password){
            alert("Logged in as " + $scope.username);
        } else {
            alert("Enter username and password");
        }
    };
});
