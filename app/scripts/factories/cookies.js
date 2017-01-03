(function() {
  function Cookies($cookies, $uibModal) {
    var currentUser = $cookies.get('currentUser');
    if (!currentUser || currentUser === '') {
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/newuser.html',
        backdrop: 'static',
        keyboard: false,
        controller: function($scope) {
          $scope.addUser = function(name) {
            if (name) {
              $cookies.put('currentUser', name);
              modalInstance.dismiss();
              return
            }
            alert('You need to enter a correct name!');
          };
        }
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', Cookies]);
})();
