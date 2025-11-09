var app = angular.module('farmApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {templateUrl:'views/home.html', controller:'homeController'})
    .when('/products', {templateUrl:'views/products.html', controller:'productController'})
    .when('/product/:id', {templateUrl:'views/product_detail.html', controller:'productDetailController'})
    .when('/login', {templateUrl:'views/login.html', controller:'loginController'})
    .when('/register', {templateUrl:'views/register.html', controller:'registerController'})
    .when('/cart', {templateUrl:'views/cart.html', controller:'cartController'})
    .otherwise({redirectTo:'/'});
});
