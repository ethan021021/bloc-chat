(function () {
  function LandingCtrl(Room, $uibModal, $uibModalInstance) {
    this.rooms = Room.rooms;
    this.openModal = function(param) {
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: function($scope) {
          $scope.addRoom = function(roomName) {
            if (roomName) {
              Room.rooms.$add({name: roomName}).then(function(ref) {
                var id = ref.key;
                console.log("added record with id " + id);
                console.log(Room.rooms.$indexFor(id));
                modalInstance.dismiss();
              });
            } else {
              alert("Please enter a chatroom name!");
            }
          };
          $scope.closeModal = function() {
            modalInstance.dismiss();
          };
        }
      });
    };
  }

  angular
    .module('blocChat')
    .controller('LandingCtrl', ['Room', '$uibModal', LandingCtrl]);
})();
