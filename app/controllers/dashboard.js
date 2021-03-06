angular.module("lacc")

.controller("dashboardController", ["$scope", "$rootScope", "$timeout", function($scope, $rootScope, $timeout) {


	var ref = database.ref("users");
	// Attach an asynchronous callback to read the data at our posts reference
	ref.on("value", function(snapshot) {
	  var info = snapshot.val();
	  var userss = [];
	  for(var user in info) {
		  if(info[user].user_type == "students") {
			  info[user].id = user;
			  userss.push(info[user]);
		  }
	  }
	  console.log(userss);

	  $timeout(function() {
		  $scope.listofusers = userss;
	  }, 0);

	  $rootScope.people = info;
	}, function (errorObject) {
	  console.log("The read failed: " + errorObject.code);
	  $scope.invalid = true;
	  // <div ng-show="invalid">Incorrect username or password</div>
	});
}]);
