
$(document).ready(function(){
	var count = 0;
	var userGuess = null;
	var randomNum = Math.floor((Math.random() * 100) + 1);
	var guessArray = [];
	console.log(randomNum);

	//Starts New Game
	$('.new').click(function() {
		newGame();
	});

	var newGame = function () {
		$('#guessList').children().remove();
		count = 0;
		$('#count').text(count);
		$('#feedback').text('Make your Guess!');
		randomNum = Math.floor((Math.random() * 100) + 1);
	}

	$('#guessButton').click(function(event) {
		event.preventDefault();

		userGuess = $('#userGuess').val();
		if (userGuess > 100 || userGuess < 1 || isNaN(userGuess)) {
			$('#feedback').text('Oops! Make sure to enter a number between 1-100. Try agian!');
			$('#userGuess').val(" ");
		}
		else {
		count++;
		$('#count').text(count);
		checkAnswer();
		}
	});

	//Check to See if users guess is correct
	var checkAnswer = function () {
		$('#userGuess').val(" ");
		$('#guessList').append('<li>' + userGuess + '</li>');

		if (userGuess == randomNum) {
			$('#feedback').text('Correct! Try agian.')
		}

		else if (Math.abs(randomNum - userGuess) < 6) {
			$('#feedback').text('Burning Hot!');
		}

		else if (Math.abs(randomNum - userGuess) < 16 && Math.abs(randomNum - userGuess) > 5) {
			$('#feedback').text('Hot');
		}

		else if (Math.abs(randomNum - userGuess) < 25 && Math.abs(randomNum - userGuess) > 15) {
			$('#feedback').text('Warm');
		}

		else if (Math.abs(randomNum - userGuess) < 51 && Math.abs(randomNum - userGuess) > 24) {
			$('#feedback').text('cold');
		}

		else {
			$('#feedback').text('Ice Cold');
		}

	}

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
});


