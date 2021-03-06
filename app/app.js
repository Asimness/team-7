angular.module("lacc", ['ui.router', 'angularFileUpload'])

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
        .otherwise('/homepage');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: './templates/login.html',
			controller: "loginController"
        })
		.state('register', {
            url: '/register/:type',
            templateUrl: './templates/register.html',
			controller: "loginController"
        })
        .state('homepage',{
        	url: '/homepage',
        	templateUrl: './templates/homepage.html',
        	controller: "homepageController"
        })
        .state('Nominator_Form',{
        	url: '/Nominator_Form',
        	templateUrl: './templates/Nominator_Form.html',
            controller: 'nominatorController'
        })
        .state('firstpage',{
        	url: '/firstpage',
        	templateUrl: './templates/firstpage.html'
        })
		.state('grader', {
			url: '/graderpage',
			templateUrl: './templates/grader.html',
			controller: "graderController"
		})
		.state('studentForm', {
			url: '/studentform',
			templateUrl: './templates/student_form.html',
			controller: "studentFormController"
		})
		.state('dashboard', {
			url: '/dashboard',
			templateUrl: './templates/dashboard.html',
			controller: "dashboardController"
		})
		.state('academicRubric', {
		        url: '/academicrubric',
		        templateUrl: './templates/academicRubric.html',
		        controller: "graderController"
		})
		.state('ratestudent', {
		        url: '/ratestudent/:id',
		        templateUrl: './templates/ratestudent.html',
		        controller: "graderController"
		})
	.state('artsRubric', {
                        url: '/artsrubric',
                        templateUrl: './templates/artsRubric.html',
                        controller: "academicRubricController"
                })
	.state('athleticRubric', {
                        url: '/athleticrubric',
                        templateUrl: './templates/athleticRubric.html',
                        controller: "academicRubricController"
                })
	.state('STEMRubric', {
                        url: '/stemrubric',
                        templateUrl: './templates/STEMRubric.html',
                        controller: "academicRubricController"
                })
	.state('communityServiceRubric.html', {
                        url: '/communityservicerubric',
                        templateUrl: './templates/communityServiceRubric.html',
                        controller: "academicRubricController"
                })

		;
}])

.run(['$rootScope', function($rootScope) {
	var userinfo = window.localStorage.getItem("userinfo");
	if(userinfo) {
		$rootScope.userr = JSON.parse(userinfo);
	}
}])

.controller('main', ['$scope', "$state", "$rootScope", function($scope, $state, $rootScope) {
}])


;
