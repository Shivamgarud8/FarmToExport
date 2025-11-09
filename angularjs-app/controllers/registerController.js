FarmToExport.controller('registerController', function($scope) {
    $scope.register = function() {
        if($scope.username && $scope.email && $scope.password){
            alert("Registered successfully: " + $scope.username);
        } else {
            alert("Fill all registration fields!");
        }
    };
});
