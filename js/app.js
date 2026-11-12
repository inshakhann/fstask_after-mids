// MODULE: root module, routes and filters
angular.module('northfield', ['ngRoute'])
.config(['$routeProvider', function ($r) {
  $r.when('/',         { templateUrl: 'views/home.html',     controller: 'HomeController' })
    .when('/cart',     { templateUrl: 'views/cart.html',     controller: 'CartController' })
    .when('/checkout', { templateUrl: 'views/checkout.html', controller: 'CheckoutController' })
    .when('/login',    { templateUrl: 'views/login.html',    controller: 'LoginController' })
    .when('/signup',   { templateUrl: 'views/signup.html',   controller: 'SignupController' })
    .otherwise({ redirectTo: '/' });
}])
.filter('stars', function () {
  return function (n) { n = n || 0; return '★'.repeat(n) + '☆'.repeat(5 - n); };
});
