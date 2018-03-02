var loanapp = angular.module("ms3app", []);

loanapp.controller('ms3Ctrl',function($scope, $rootScope, $http, $window) {

			$scope.Success_Msg = false;
			
			$scope.submitApplcn = function() {
				
				$http({
						url : 'http://localhost:8081/convert',
						//method : 'POST',
						params : {
								fNumber : $scope.firstNumber,
								sNumber : $scope.secondNumber
							}
					}).success(function (data) {
						alert(data);						
						$scope.Success_Msg = true;
						$scope.responseMsg = data.message;
					}).error(function (data, status, headers, config) {
						$scope.Success_Msg = true;
						$scope.responseMsg = data.message;	
				});				
			}
			
		});

