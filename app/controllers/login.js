var database = firebase.database();

angular.module("lacc")

.controller('loginController', ['$scope', "$state", "$rootScope", "$stateParams", function($scope, $state, $rootScope, $stateParams) {
    $scope.login = function() {
		var email = $scope.user.email;
		var password = $scope.user.password;
		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(function(data) {
			console.log(data);
		})
		.catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // ...
		});

	};

	$scope.signupType = $stateParams.type;

	$scope.signup = function() {
		var email = $scope.user.email;
		var firstname = $scope.user.firstname || "Test";
		var lastname = $scope.user.lastname || "Last";
		var password = $scope.user.password;
		var user_type = $stateParams.type ?  $stateParams.type+"s" : $scope.user.user_type;
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(function() {
				var userId = firebase.auth().currentUser.uid;
				return database.ref().child("users/" +userId).set({
					firstname: firstname,
					email: email,
					lastname: lastname,
					user_type: user_type
				})
				.catch(function(err) {
					console.error(err);
				});
			})
			.then(function() {
				console.log("done");
			})
			.catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// ...
			});
	};
}])

;


///
var nominees = {
	student: []
};

var student = {
	profile: 'sdfs',
	profile_status: 'asdf'
};
