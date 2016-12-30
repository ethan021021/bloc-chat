(function() {
  function ModalCtrl($uibModal, Room) {
    this.ethan = "Ethan";
    this.addRoom = function(roomName) {
      console.log(roomName);
    };
  }

  app
  .controller('ModalCtrl', ['Room', '$uibModal', ModalCtrl]);
})();
