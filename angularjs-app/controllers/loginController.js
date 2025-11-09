app.controller('loginController', function($scope, apiService, $location){
    $scope.user={};
    $scope.message="";

    $scope.login=function(){
        apiService.login($scope.user).then(function(r){
            if(r.data.status=='success'){
                $scope.message="Login successful!";
                localStorage.setItem('user', JSON.stringify(r.data.user));
                $location.path('/dashboard');
                $scope.$apply();
            } else {
                $scope.message=r.data.message;
            }
        });
    }
});

