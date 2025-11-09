app.controller('registerController', function($scope, apiService, $location){
    $scope.user={};
    $scope.message="";

    $scope.register=function(){
        apiService.register($scope.user).then(function(r){
            if(r.data.status=='success'){
                $scope.message="Registration successful! Redirecting to login...";
                setTimeout(()=>{ $location.path('/login'); $scope.$apply(); }, 1500);
            } else {
                $scope.message=r.data.message;
            }
        });
    }
});
