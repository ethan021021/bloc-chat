(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref("rooms");
    var rooms = $firebaseArray(ref);

    return {
      all: rooms,
      rooms: rooms
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
