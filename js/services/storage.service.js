angular.module('northfield').service('StorageService', function () {
  this.load = function (key, def) {
    try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : def; } catch (e) { return def; }
  };
  this.save = function (key, val) { localStorage.setItem(key, JSON.stringify(val)); };
  this.remove = function (key) { localStorage.removeItem(key); };
});
