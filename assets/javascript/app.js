window.onload = function() {
	startGame()
$("#submit").click(submit);
};

function startGame() {
	startTimer();
	countdown();
$("#score").html("Score: " + score);


}

var timeCount = 61;
var timeRunning = false;
var intervalId;
var score = 0;
var right = 0;
var wrong = 0;




function startTimer() {

	if (!timeRunning) {
	intervalId = setInterval(countdown,1000);
	timeRunning = true;
	}
}
function countdown() {

	timeCount--;
	$("#timer").html(timeCount);
	if (timeCount < 1) {
		$("#timer").html("Time's Up!")
		stopTimer();
		gameover();
	}
}

function stopTimer() {
	clearInterval(intervalId);
	timeRunning = false;
}

function submit() {

	clearInterval(intervalId);
	timeRunning = false;
	return [$("#rightwrong").html("Right: " + right + "    Wrong: " + wrong)];

var	answers = ["c", "a", "d", "b", "a"]

var an1 = ($("input[@name=q1]:checked").val() != "c"); 
           
var an2 = ($("input[@name=q2]:checked").val() != "a");  

var an3 = ($("input[@name=q3]:checked").val() != "d");  

var an4 = ($("input[@name=q4]:checked").val() != "b");  

var an5 = ($("input[@name=q5]:checked").val() != "a");

	if (an1.value == answers[0]) {
		right++;
	}

	else {
		wrong++;
	}
}

function gameover() {
	return [$("#rightwrong").html("Right: " + right + "    Wrong: " + wrong)];
}
