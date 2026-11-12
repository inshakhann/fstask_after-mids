angular.module('northfield')
.controller('CheckoutController', ['$scope', '$location', '$rootScope', 'AuthService', 'CartService', 'OrderService',
function ($s, $loc, $root, Auth, Cart, Orders) {
  var u = Auth.user();
  if (!u) { $root.next = '/checkout'; $loc.path('/login'); return; }
  $s.lines = Cart.lines; $s.total = Cart.total; $s.user = u;
  $s.f = { name: u.name, email: u.email, payment: 'Cash on delivery' };
  $s.payments = ['Cash on delivery', 'Card (demo, not charged)'];
  $s.orderId = null;
  $s.place = function () {
    if ($s.form.$invalid || !Cart.items().length) return;
    $s.orderId = Orders.place(u);
  };
}]);
