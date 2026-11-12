angular.module('northfield').service('ToastService', ['$timeout', function ($timeout) {
  var self = this; self.msg = '';
  self.show = function (m) { self.msg = m; $timeout(function () { self.msg = ''; }, 2000); };
}]);
