angular.module('northfield')
.controller('CartController', ['$scope', 'CartService', function ($s, Cart) {
  $s.lines = Cart.lines; $s.total = Cart.total;
  $s.change = Cart.change; $s.setQty = Cart.setQty; $s.remove = Cart.remove;
}]);
