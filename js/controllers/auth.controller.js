angular.module('northfield')
.controller('LoginController', ['$scope', '$location', '$rootScope', 'AuthService', function ($s, $loc, $root, Auth) {
  $s.f = {}; $s.error = '';
  $s.submit = function () {
    var r = Auth.login($s.f.email, $s.f.pass);
    if (!r.ok) { $s.error = r.error; return; }
    var n = $root.next; $root.next = null; $loc.path(n || '/');
  };
}])
.controller('SignupController', ['$scope', '$location', '$rootScope', 'AuthService', function ($s, $loc, $root, Auth) {
  $s.f = {}; $s.error = '';
  $s.submit = function () {
    var r = Auth.signup($s.f.name, $s.f.email, $s.f.pass);
    if (!r.ok) { $s.error = r.error; return; }
    var n = $root.next; $root.next = null; $loc.path(n || '/');
  };
}]);
