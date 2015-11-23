/**
 * This is one of the controllers for the app
 * 
 * It will: 1. start the workout 2. show the work in progress and show the
 * progress indicator 3. After the time elapses for an exercise, show the next
 * exercise. 4. Repeat this process till all exercises are over.
 * 
 */

// Declare and register the controller to the 7minWorkout module
angular.module('7minWorkout').controller('WorkoutController', function($scope) {
	var restExercise;
	var workoutPlan;
	
	function Exercise(args) {
	    this.name = args.name;
	    this.title = args.title;
	    this.description = args.description;
	    this.image = args.image;
	    this.related = {};
	    this.related.videos = args.videos;
	    this.nameSound = args.nameSound;
	    this.procedure=args.procedure;
	}
	
	function WorkoutPlan(args) {
	    this.exercises = [];
	    this.name = args.name;
	    this.title = args.title;
	    this.restBetweenExercise = args.restBetweenExercise;
	};
	
	var init = function () {
		startWorkout();
	};	
	init();
	
	var startWorkout = function () {
		workoutPlan = createWorkout();
		restExercise = {
		        details: new Exercise({
		            name: "rest",
		            title: " Relax!",
		            description: " Relax a bit!",
		          image: "img/rest.png",

		        }),
		        duration: workoutPlan.restBetweenExercise
		    };
		    startExercise(workoutPlan.exercises.shift());
	};
	
	var createWorkout = function () {
	     var workout = new WorkoutPlan({
	         name: "7minWorkout",
	         title: "7 Minute Workout",
	         restBetweenExercise: 10
	     });

	     workout.exercises.push({
	         details: new Exercise({
	             name: "jumpingJacks",
	             title: "Jumping Jacks",
	             description: "Jumping Jacks.",
	             image: "img/JumpingJacks.png",
	             videos: [],
	             variations: [],
	             procedure: ""
	         }),
	         duration: 30
	     });
	    // (TRUNCATED) Other 11 workout exercise data.
	     return workout;
	  }
});