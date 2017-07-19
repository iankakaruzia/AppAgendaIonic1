angular.module('app.controllers', [])
  
.controller('agendaCtrl', ['$scope', '$stateParams', '$ionicModal', 'agendaApi', '$ionicLoading', 
	function ($scope, $stateParams, $ionicModal, agendaApi, $ionicLoading) {
		var contatos = [];
		$scope.permitirExcluir = false;
		$scope.favorito = false;

		function obterContatos() {
			contatos = agendaApi.getContatos();
			$scope.contatos = contatos;

			return contatos;
		} 

		$scope.salvarContato = function(contato) {
			agendaApi.addContato(contato);
			obterContatos();

			$scope.closeModal();
		}

		$scope.excluirContato = function(contato) {
			agendaApi.deleteContato(contato);

			obterContatos();
		}

		$scope.filtrarContatosFavoritos = function() {
			contatos = obterContatos();

			if ($scope.favorito == true) {
				contatos = contatos.filter(function(contatos) {
					return contatos.favorito == true;
				});

				$scope.contatos = contatos;
			}
		}

		$scope.exibirAguarde = function() {
			$ionicLoading.show({template: '<p class="item-icon-center"><ion-spinner icon-"bubbles" class="spinner-calm"></ion-spinner></p>Aguarde, processando...'});
			setTimeout($ionicLoading.hide, 2000);
		}

		obterContatos();

		$scope.habilitarExclusao = function(){
			$scope.permitirExcluir = !$scope.permitirExcluir;
		}


		$scope.abrirTelaContato = function() {
			$scope.contato = {nome:'', telefone:'', favorito:false};
			$scope.openModal();
		}

		$scope.cancelarContato = function() {
			$scope.closeModal();
		}

		//Modal
		$ionicModal.fromTemplateUrl('contato.html', {scope: $scope, animation: 'slide-in-up'}).then(function(modal) {
	    	$scope.modal = modal;
	  	});

		$scope.openModal = function() {
		  $scope.modal.show();
		};

		$scope.closeModal = function() {
		  $scope.modal.hide();
		};

}])
   
.controller('sobreCtrl', ['$scope', '$stateParams', '$ionicNavBarDelegate', function ($scope, $stateParams, $ionicNavBarDelegate) {

	$ionicNavBarDelegate.showBackButton(false);

}])
 