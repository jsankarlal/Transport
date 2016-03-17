var tranzApp = angular.module('tranzApp',[]);

tranzApp.controller('tabsController',['$scope', function($scope) {
	$scope.name = "Rajesh";
	$scope.tab = 1;
	$scope.modalDisplay = false;
	$scope.timeLimit = 0;
	$scope.adhocList = [15,18,20,21,23];
	$scope.cnrButton = true;
	$scope.ride = {
			type: "drop",
			time:'6.15pm',
			cabNumber: "TN19 K 5761",
			driverName: "Muthu Krishnan",
			contactNumber: 9962234889,
			laneNumber:22,
			startingPoint:{
				location:"Nevile Tower LS",
				latitude:23456.89,
				longtitude:12345.67
			},
			boardingPoint:{
				location:"Nevile Tower LS",
				latitude:23456.89,
				longtitude:12345.67
			},
			currentLocation:{
				location:"Nevile Tower LS",
				latitude:23456.89,
				longtitude:12345.67
			},
			destination: {
				location:"Urapakkam school Bus Stop",
				latitude:23456.89,
				longtitude:12345.67
			}
		};
	$scope.ride1 = {
			type: "pickup",
			time:'7.35am',
			cabNumber: "TN19 K 5761",
			driverName: "Muthu Krishnan",
			contactNumber: 9962234889,
			startingPoint:{
				location:"Guduvanchery",
				latitude:23456.89,
				longtitude:12345.67
			},
			boardingPoint:{
				location:"Urapakkam school Bus Stop",
				latitude:23456.89,
				longtitude:12345.67
			},
			currentLocation:{
				location:"Guduvanchery",
				latitude:23456.89,
				longtitude:12345.67
			},
			destination: {
				location:"Nevile Tower LS",
				latitude:23456.89,
				longtitude:12345.67
			}
		};
	
	$scope.homeTab = function() {
		$scope.tab = 1;
	};
	$scope.navigateTab = function() {
		$scope.tab = 2;
	};
	$scope.shiftTab = function() {
		$scope.tab = 4;
	};
	$scope.adhocTab = function() {
		$scope.tab = 3;
	};
	$scope.historyTab = function() {
		$scope.tab = 5;
	};
	
	
	$scope.boarded = function() {
		console.log("boarded");
	};
	
	$scope.renderNavigation = function() {
		$scope.tab = 2;
	};
	
	$scope.reached = function() {
		console.log("reached");
	};
	$scope.nextAdhocDrops= function(){
		  return function(adhoc){
	    	var d = new Date();
	    	timeLimit = d.getHours()+2;
	      return adhoc > timeLimit;
	    }
	}
	$scope.bookAdhoc= function(adhoc) {
		console.log("cab is booked for "+adhoc+"pm   Drop");
		$scope.cnrButton = false;
	};
	$scope.cabNotRequired = function() {
		$("#myModal").modal('show');
	};
	
	$scope.confirmCNR = function() {
		console.log("Drop has been Cancelled Successfully");
		$scope.cnrButton = false;
	};
	
	$scope.closeCNRmodal = function() {
		console.log("close modal");
	};
	
}]);

tranzApp.filter('greet', function() {
	 return function(name) {
	    return 'Welcome, ' + name + '!';
	  };
	})