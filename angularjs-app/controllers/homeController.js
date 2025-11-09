app.controller('homeController', function($scope, apiService){
    $scope.products=[];
    apiService.getProducts({}).then(r=>{$scope.products=r.data.products;});
});
