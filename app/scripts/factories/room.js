(function() {
  function Room($firebaseArray) {
    var ref = firebase.database();
    var rooms = $firebaseArray(ref.ref('rooms'));

    return {
      rooms: rooms
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
