app.controller('DashboardController', function($rootScope, $scope){
    $rootScope.member= {
        username: '',
		firstName: '',
		lastName: '',
		imgUrl:  '',
		country: '',
		bio: '',
		websiteUrl: '',
		github: '',
		twitterHandle: '',
		favoriteTags: [tag],
		
        
        accountCreated: date,
		upVotes: number,
		downVotes: number,
		reputation: number,
		questions: [questionId],
		answers: [answerId],
		comments: [commentId]
    }
	/**
	 * To edit the member object you must go through $rootScope.member
	 * $rootScope.member is a $firebaseObject from AngularFire 
	 * To see the methods at your disposal look here
	 * https://www.firebase.com/docs/web/libraries/angular/api.html#angularfire-firebaseobject
	 * 
	 * Don't forget to call $rootScope.member.$save() after making changes to the $rootScope.member object
	 * 
	 * */
	
});