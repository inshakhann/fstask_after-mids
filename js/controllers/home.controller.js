angular.module('northfield')
.controller('HomeController', ['$scope', 'ProductService', 'CartService', 'ReviewService', 'AuthService', 'ToastService',
function ($s, P, Cart, R, Auth, T) {
  $s.products = P.all(); $s.categories = P.categories(); $s.filter = '';
  $s.selected = null; $s.form = { rating: 5 };
  $s.avg = R.average;
  $s.recent = function () { return R.all().slice(0, 4); };
  $s.productName = function (id) { return P.get(id).name; };
  $s.add = function (id) { Cart.add(id); T.show('Added to cart'); };
  $s.select = function (p) {
    $s.selected = p; $s.reviews = R.forProduct(p.id);
    var u = Auth.user(); $s.form = { rating: 5, name: u ? u.name : '' };
  };
  $s.postReview = function () {
    R.add({ pid: $s.selected.id, name: $s.form.name, rating: +$s.form.rating, text: $s.form.text });
    $s.form.text = ''; $s.reviews = R.forProduct($s.selected.id); T.show('Review posted');
  };
}]);
