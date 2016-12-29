(function () {
  function LandingCtrl(Room, $uibModal) {
    this.rooms = Room.rooms;
    this.openModal = function(param) {
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl as modal'
      });
    };
  }

  angular
    .module('blocChat')
    .controller('LandingCtrl', ['Room', '$uibModal', LandingCtrl]);
})();
