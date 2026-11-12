// Demo only: passwords are base64-encoded, NOT secure.
angular.module('northfield').service('AuthService', ['StorageService', function (S) {
  var self = this;
  self.user = function () { return S.load('session', null); };
  self.signup = function (name, email, pass) {
    var users = S.load('users', []); email = email.trim().toLowerCase();
    if (users.some(function (u) { return u.email === email; })) return { ok: false, error: 'That email is already registered. Try logging in.' };
    users.push({ name: name.trim(), email: email, pass: btoa(pass) }); S.save('users', users);
    S.save('session', { name: name.trim(), email: email });
    return { ok: true };
  };
  self.login = function (email, pass) {
    email = email.trim().toLowerCase();
    var u = S.load('users', []).filter(function (x) { return x.email === email && x.pass === btoa(pass); })[0];
    if (!u) return { ok: false, error: 'Email or password is incorrect.' };
    S.save('session', { name: u.name, email: u.email });
    return { ok: true };
  };
  self.logout = function () { S.remove('session'); };
}]);
