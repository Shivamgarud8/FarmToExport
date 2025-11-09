app.controller('cartController', function($scope, apiService){
    $scope.cart = JSON.parse(localStorage.getItem('cart') || '[]');

    $scope.total = function(){
        return $scope.cart.reduce((sum,p)=>sum + p.price*p.quantity,0);
    }

    $scope.removeItem = function(index){
        $scope.cart.splice(index,1);
        localStorage.setItem('cart', JSON.stringify($scope.cart));
    }

    $scope.placeOrder = function(){
        var order = {user_id:1, cart:$scope.cart}; // Replace with logged-in user
        apiService.placeOrder(order).then(r=>{
            alert(r.data.message);
            $scope.cart=[];
            localStorage.setItem('cart', JSON.stringify($scope.cart));
        });
    }
});
