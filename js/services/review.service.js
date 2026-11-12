angular.module('northfield').service('ReviewService', ['StorageService', function (S) {
  var seed = [
    { pid: 1, name: 'Amina', rating: 5, text: 'Lovely weight in the hand.' },
    { pid: 3, name: 'Daniel', rating: 4, text: 'Soft and warm, a bit large.' }
  ];
  var self = this;
  self.all = function () { return S.load('reviews', seed); };
  self.forProduct = function (id) { return self.all().filter(function (r) { return r.pid === id; }); };
  self.add = function (r) { var a = self.all(); a.unshift(r); S.save('reviews', a); };
  self.average = function (id) {
    var r = self.forProduct(id);
    return r.length ? Math.round(r.reduce(function (s, x) { return s + x.rating; }, 0) / r.length) : 0;
  };
}]);
