(function() {
  function ModalCtrl($uibModal) {
    this.ethan = "Ethan";
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModal', ModalCtrl]);
})();
