app.controller('productController', function($scope, apiService){
    $scope.products=[]; $scope.filteredProducts=[];
    $scope.searchText=""; $scope.minPrice=0; $scope.maxPrice=100000;

    apiService.getProducts({}).then(r=>{
        $scope.products=r.data.products;
        $scope.filteredProducts=$scope.products;
    });

    $scope.filterProducts=function(){
        $scope.filteredProducts=$scope.products.filter(p=>
            p.name.toLowerCase().includes($scope.searchText.toLowerCase()) &&
            p.price >= $scope.minPrice && p.price <= $scope.maxPrice
        );
    }
});
