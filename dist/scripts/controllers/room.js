(function () {
  function LandingCtrl(Room) {
    this.rooms = Room;
  }

  angular
    .module('blocChat')
    .controller('LandingCtrl', ['Room', LandingCtrl]);
})();
