angular.module('northfield')
.controller('NavController', ['$scope', '$location', 'AuthService', 'CartService', function ($s, $loc, Auth, Cart) {
  $s.user = Auth.user; $s.count = Cart.count;
  $s.logout = function () { Auth.logout(); $loc.path('/'); };
}])
.controller('ToastController', ['$scope', 'ToastService', function ($s, T) { $s.t = T; }]);
