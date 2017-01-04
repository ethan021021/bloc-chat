(function () {
  function LandingCtrl($scope, Room, Message, $cookies, $uibModal) {
    var ctrl = this;
    this.rooms = Room.rooms;
    this.fetchMessages = function(roomName) {
      ctrl.messages = Message.getByRoomId(roomName);
      ctrl.currentRoom = roomName;
    };
    this.sendMessage = function(message) {
      Message.send({
        content: message,
        createdAt: Date.now(),
        roomUDID: ctrl.currentRoom,
        user: $cookies.get('currentUser')
      });
      $scope.message = '';
      window.scrollTo(0,document.body.scrollHeight);
      console.log(document.body.scrollHeight);
    }
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
    .controller('LandingCtrl', ['$scope', 'Room', 'Message', '$cookies', '$uibModal', LandingCtrl]);
})();
