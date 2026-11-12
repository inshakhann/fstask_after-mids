angular.module('northfield').service('OrderService', ['StorageService', 'CartService', function (S, Cart) {
  this.place = function (user) {
    var id = 'NG-' + Date.now().toString().slice(-6), orders = S.load('orders', []);
    orders.push({ id: id, user: user.email, items: Cart.items(), total: Cart.total(), date: new Date().toISOString() });
    S.save('orders', orders); Cart.clear();
    return id;
  };
}]);
