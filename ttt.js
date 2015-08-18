var playCounter = 0;
var currentMove = "X";

$('.box').click(function(){
	if (currentMove === "O") {
		$(this).addClass('player-o');
		$(this).data("player", currentMove);
	}	else {
		$(this).addClass('player-x');
		$(this).data("player", currentMove);
	}

	isWinner()
	swapPlayer()
});

var swapPlayer = function () {
	if (playCounter % 2 === 0) {
		currentMove = "O";
	} else {
		currentMove = "X";
	}
	playCounter++;
};

 
$('.replyButton').on('click',function() {
		;
	});

var isWinner = function() {
	var firstBox = $('#A1').data('player')
	var secondBox = $('#A2').data('player')
	var thirdBox = $('#A3').data('player')
	var fourthBox = $('#A4').data('player')
	var fifthBox = $('#A5').data('player')
	var sixthBox = $('#A6').data('player')
	var seventhBox = $('#A7').data('player')
	var eighthBox = $('#A8').data('player')
	var ninthBox = $('#A9').data('player')

	// Store box four, five and sixs data-player
	// Make a new if statement to check if they are all the same


	if (firstBox === secondBox && secondBox === thirdBox && thirdBox !== undefined) {
		alert(currentMove + "is the Winner")
	} else if ( fourthBox === fifthBox && sixthBox === fifthBox && sixthBox !== undefined ) {
		alert(currentMove + "is the Winner")
	} else if ( seventhBox === eighthBox && eighthBox === ninthBox && ninthBox !== undefined) {
		alert(currentMove + "is the winner")
	} else if (firstBox === fourthBox && seventhBox === fourthBox && seventhBox !== undefined) {
		alert(currentMove + "is the winner")
	} else if (secondBox === fifthBox && eighthBox === fifthBox && eighthBox !== undefined) {
		alert(currentMove + "is the winner")
	} else if ( thirdBox === sixthBox && ninthBox === ninthBox && ninthBox !== undefined) {
		alert(currentMove + "is the winner")
	} else if (thirdBox === fifthBox && seventhBox === fifthBox && seventhBox !== undefined) {
		alert(currentMove + "is the winner")
	} else if (firstBox === fifthBox && ninthBox === fifthBox && ninthBox !== undefined) {
		alert(currentMove + "is the winner")
	}

	// Store the data player attributes in variables
	// For each .box

}




