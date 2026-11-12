angular.module('northfield').service('CartService', ['StorageService', 'ProductService', function (S, P) {
  var self = this;
  self.items = function () { return S.load('cart', []); };
  var put = function (c) { S.save('cart', c); };
  self.add = function (id) {
    var c = self.items(), i = c.filter(function (x) { return x.id === id; })[0];
    if (i) i.qty++; else c.push({ id: id, qty: 1 }); put(c);
  };
  self.setQty = function (id, q) {
    q = parseInt(q, 10); if (isNaN(q)) return;
    put(self.items().map(function (x) { if (x.id === id) x.qty = q; return x; }).filter(function (x) { return x.qty > 0; }));
  };
  self.change = function (id, d) {
    var i = self.items().filter(function (x) { return x.id === id; })[0]; if (i) self.setQty(id, i.qty + d);
  };
  self.remove = function (id) { put(self.items().filter(function (x) { return x.id !== id; })); };
  self.clear = function () { put([]); };
  self.count = function () { return self.items().reduce(function (s, i) { return s + i.qty; }, 0); };
  self.lines = function () {
    return self.items().map(function (i) { var p = P.get(i.id); return { product: p, qty: i.qty, total: p.price * i.qty }; });
  };
  self.total = function () { return self.lines().reduce(function (s, l) { return s + l.total; }, 0); };
}]);
