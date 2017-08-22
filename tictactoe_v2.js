
function play() {
	do {
		//debugger;
			var userMove = 0; 
			var computerMove = 0;
			var isPlayerWin = false;
			var isComputerWin = false;
			var isDraw = false;
			var move = [['1','2','3'],['4','5','6'],['7','8','9']];
			var option;
			var moves = 0;
			var contGame = true;
			
			
			grid(move);
			plottingUserInput(userMove,move);
			grid(move);
			moves++;
			computerMove = randomizer(userMove);
			computerAttackFunction(computerMove, move);
			moves++;
			plottingUserInput(userMove,move);
			moves++;
		
		do{
		
			computerMove = attackFunction(move);
			computerAttackFunction(computerMove,move);
			moves++;

			computerWin = checkIfComputerWin(move);
			if(computerWin === true) {
				console.log("\t\t Computer Has Won! " + "\n");
				break;
			}
			plottingUserInput(userMove,move);
			moves++;
		
			if(moves == 9) {
				console.log("\n\t\t It's a draw." + "\n");
				break;
			}

			playerWin = checkIfPlayerWin(move);
			computerWin = checkIfComputerWin(move);
			draw = checkIfDraw(move);
			if(playerWin === true && computerWin === false && draw === false) {
				console.log("\n\t You have won the GAME!" + "\n");
				break;
			}else if(playerWin === false && computerWin === true && draw === false) {
				console.log("\n\t\t Computer has won." + "\n");
				break;
			}else if(playerWin === true && computerWin === true && draw === true) {
				console.log("\n\t\t It's a draw." + "\n");
				break;
			}

		}while(true);
		
		var contOption = true;
		do {
			option = optionAsk();
			if(option == 'y' || option =='Y'){
				contGame = true;
				contOption = false;
				break;
			}else if(option == 'n' || option == 'N') {
				console.log("\nYou have chosen no." + "\n");
				contGame = false;
				contOption = false;
				break;
			}else {
				console.log("\nInvalid input, please try again." + "\n");
			}
		}while(contOption);

	}while(contGame);
}

function grid(move) {
	console.clear();
	console.log("  **********************************************"+"\n"+"\n");
	console.log("\t  WELCOME TO THE GAME: Tic-Tac-Toe"+"\n"+"\n");
	console.log("  **********************************************");
	console.log("\t \n \n");
	console.log("\t HUMAN PLAYER (X)  VS.  COMPUTER (O)" + "\n" + "\n");
	console.log("\t\t      |     |     " + "\n");
	console.log("\t\t  "+move[0][0]+ "   |  "+move[0][1]+"   |  "+move[0][2]);
	console.log("\t\t _____|_____|_____" + "\n");
	console.log("\t\t      |     |     " + "\n");
	console.log("\t\t  "+move[1][0]+ "   |  "+move[1][1]+"   |  "+move[1][2]);
	console.log("\t\t _____|_____|_____" + "\n");
	console.log("\t\t      |     |     " + "\n");
	console.log("\t\t  "+move[2][0]+ "   |  "+move[2][1]+"   |  "+move[2][2]) ;
	console.log("\t\t      |     |     " + "\n");
}

function randomizer(userMove) {
	var randomNum = 0;
	var cont = true;
	do {
		randomNum = Math.floor(Math.random()*9) + 1;
		if(randomNum !== userMove) {
			cont = false;
		}
	}while(cont);
	return randomNum;
}

function getUserInput() {
	var userMove = 0;
	userMove = parseInt(prompt("\n       Please enter a number from '1' to '9': " + "\n"));
	return userMove;
}

function attackFunction(move) {
	var attackCoordinates = 0;

	var firstRowContainerForO = 0;
	var firstRowContainerForX = 0;
	var firstRowContainerEmpty = 0;

	var secondRowContainerForO = 0;
	var secondRowContainerForX = 0;
	var secondRowContainerEmpty = 0;

	var thirdRowContainerForO = 0;
	var thirdRowContainerForX = 0;
	var thirdRowContainerEmpty = 0;

	var firstColumnContainerForO = 0;
	var firstColumnContainerForX = 0;
	var firstColumnContainerEmpty = 0;

	var secondColumnContainerForO = 0;
	var secondColumnContainerForX = 0;
	var secondColumnContainerEmpty = 0;

	var thirdColumnContainerForO = 0;
	var thirdColumnContainerForX = 0;
	var thirdColumnContainerEmpty = 0;

	var leftToRightDiagonalContainerForO = 0;
	var leftToRightDiagonalContainerForX = 0;
	var leftToRightDiagonalContainerEmpty = 0;

	var rightToLeftDiagonalContainerForO = 0;
	var rightToLeftDiagonalContainerForX = 0;
	var rightToLeftDiagonalContainerEmpty = 0;

	for(var counter = 0; counter <= 2; counter++) {
		if(move[0][counter] === 'O'){
			firstRowContainerForO++;
		}else if(move[0][counter] === 'X'){
			firstRowContainerForX++;
		}else if(move[0][counter] !== 'O' && move[0][counter] !== 'X'){
			firstRowContainerEmpty++;
		}
	}

	if(firstRowContainerForX === 2 && firstRowContainerEmpty === 1){
		if(move[0][0] !== 'O' && move[0][0] !== 'X'){
			attackCoordinates = 1;
			return attackCoordinates;
		}else if(move[0][1] !== 'O' && move[0][1] !== 'X'){
			attackCoordinates = 2;
			return attackCoordinates;
		}else if(move[0][2] !== 'O' && move[0][2] !=='X'){
			attackCoordinates = 3;
			return attackCoordinates;
		}
	}

	for(var counter = 0; counter <=2; counter++) {
		if(move[1][counter] === 'O'){
			secondRowContainerForO++;
		}else if(move[1][counter] === 'X'){
			secondRowContainerForX++;
		}else if(move[1][counter] !== 'O' && move[1][counter] !== 'X'){
			secondRowContainerEmpty++;
		}
	}

	if(secondRowContainerForX === 2 && secondRowContainerEmpty === 1) {
		if(move[1][0] !== 'O' && move[1][0] !== 'X') {
			attackCoordinates = 4;
			return attackCoordinates;
		}else if(move[1][1] !== 'O' && move[1][1] !== 'X'){
			attackCoordinates = 5;
			return attackCoordinates;
		}else if(move[1][2] !== 'O' && move[1][2] !== 'X') {
			attackCoordinates = 6;
			return attackCoordinates;
		}
	}


	for(var counter = 0; counter <=2; counter++) {
		if(move[1][counter] === 'O'){
			thirdRowContainerForO++;
		}else if(move[1][counter] === 'X'){
			thirdRowContainerForX++;
		}else if(move[1][counter] !== 'O' && move[1][counter] !== 'X'){
			thirdRowContainerEmpty++;
		}
	}

	if(thirdRowContainerForX === 2 && thirdRowContainerEmpty === 1){
		if(move[2][0] !== 'O' && move[2][0] !== 'X'){
			attackCoordinates = 7;
			return attackCoordinates;
		}else if(move[2][1] !== 'O' && move[2][1] !== 'X'){
			attackCoordinates = 8;
			return attackCoordinates;
		}else if(move[2][2] !== 'O' && move[2][2] !== 'X'){
			attackCoordinates = 9;
			return attackCoordinates;
		}
	}

	for(var counter =0; counter<=2; counter++) {
		if(move[counter][0] === 'O'){
			firstColumnContainerForO++;
		}else if(move[counter][0] === 'X'){
			firstColumnContainerForX++;
		}else if(move[counter][0] !== 'O' && move[counter][0] !== 'X'){
			firstColumnContainerEmpty++;
		}
	}

	if(firstColumnContainerForX === 2 && firstColumnContainerEmpty === 1){
		if(move[0][0] !== 'O' && move[0][0] !== 'X'){
			attackCoordinates = 1;
			return attackCoordinates;
		}else if(move[1][0] !== 'O' && move[1][0] !== 'X'){
			attackCoordinates = 4;
			return attackCoordinates;
		}else if(move[2][0] !== 'O' && move[2][0] !== 'X'){
			attackCoordinates = 7;
			return attackCoordinates;
		}
	}


	for(var counter = 0; counter <= 2; counter++){
		if(move[counter][1] === 'O'){
			secondColumnContainerForO++;
		}else if(move[counter][1] === 'X'){
			secondColumnContainerForX++;
		}else if(move[counter][1] !== 'O' && move[counter][1] !== 'X'){
			secondColumnContainerEmpty++;
		}
	}

	if(secondColumnContainerForX === 2 && secondColumnContainerEmpty === 1){
		if(move[0][1] !== 'O' && move[0][1] !== 'X'){
			attackCoordinates = 2;
			return attackCoordinates;
		}else if(move[1][1] !== 'O' && move[1][1] !== 'X'){
			attackCoordinates = 5;
			return attackCoordinates;
		}else if(move[2][1] !== 'O' && move[2][1] !== 'X'){
			attackCoordinates = 8;
			return attackCoordinates;
		}
	}

	for(var counter = 0; counter <= 2; counter++){
		if(move[counter][2] === 'O'){
			thirdColumnContainerForO++;
		}else if(move[counter][2] === 'X'){
			thirdColumnContainerForX++;
		}else if(move[counter][2] !== 'O' && move[counter][2] !== 'X'){
			thirdColumnContainerEmpty++;
		}
	}

	if(thirdColumnContainerForX === 2 && thirdColumnContainerEmpty === 1){
		if(move[0][2] !== 'O' && move[0][2] !== 'X'){
			attackCoordinates = 3;
			return attackCoordinates;
		}else if(move[1][2] !== 'O' && move[1][2] !== 'X'){
			attackCoordinates = 6;
			return attackCoordinates;
		}else if(move[2][2] !== 'O' && move[2][2] !== 'X'){
			attackCoordinates = 9;
			return attackCoordinates;
		}
	}

	for(var counter = 0; counter <= 2; counter++){
		
		if(move[counter][counter] === 'O'){
			leftToRightDiagonalContainerForO++;
		}else if(move[counter][counter] === 'X'){
			leftToRightDiagonalContainerForX++;
		}else if(move[counter][counter] !== 'O' && move[counter][counter] !== 'X'){
			leftToRightDiagonalContainerEmpty++;
		}
	}

	if(leftToRightDiagonalContainerForX === 2 && leftToRightDiagonalContainerEmpty === 1){
		if(move[0][0] !== 'O' && move[0][0] !== 'X'){
			attackCoordinates = 1;
			return attackCoordinates;
		}else if(move[1][1] !== 'O' && move[1][1] !== 'X'){
			attackCoordinates = 5;
			return attackCoordinates;
		}else if(move[2][2] !== 'O' && move[2][2] !== 'X'){
			attackCoordinates = 9;
			return attackCoordinates;
		}
	}

	for(var counter = 0; counter <=2; counter++){
		if(counter === 0){
			if(move[counter][2] === 'O'){
				rightToLeftDiagonalContainerForO++;
			}else if(move[counter][2] === 'X'){
				rightToLeftDiagonalContainerForX++;
			}else if(move[counter][2] !== 'O' && move[counter][2] !== 'X'){
				rightToLeftDiagonalContainerEmpty++;
			}
		}else if(counter === 1){
			if(move[counter][1] === 'O'){
				rightToLeftDiagonalContainerForO++;
			}else if(move[counter][1] === 'X'){
				rightToLeftDiagonalContainerForX++;
			}else if(move[counter][1] !== 'O' && move[counter][1] !== 'X'){
				rightToLeftDiagonalContainerEmpty++;
			}
		}else if(counter === 2){
			if(move[counter][0] === 'O'){
				rightToLeftDiagonalContainerForO++;
			}else if(move[counter][0] === 'X'){
				rightToLeftDiagonalContainerForX++;
			}else if(move[counter][0] !== 'O' && move[counter][0] !== 'X'){
				rightToLeftDiagonalContainerEmpty++;
			}
		}
	}

	if(rightToLeftDiagonalContainerForX === 2 && rightToLeftDiagonalContainerEmpty === 1){
		if(move[0][2] !== 'O' && move[0][2] !== 'X'){
			attackCoordinates = 3;
			return attackCoordinates;
		}else if(move[1][1] !== 'O' && move[1][1] !== 'X'){
			attackCoordinates = 5;
			return attackCoordinates;
		}else if(move[2][0] !== 'O' && move[2][0] !== 'X'){
			attackCoordinates = 7;
			return attackCoordinates;
		}
	}


	var randomNum = 0;
	if(move[1][1] = 'O'){
		
		randomNum = Math.floor(Math.random()*9);
		for(var outerCounter = 0; outerCounter <= 2 ; outerCounter++){
			for(var innerCounter = 0; innerCounter <= 2 ; innerCounter++){
				if(move[outerCounter][innerCounter] === 'O'){
					attackCoordinates = attackCoordinates;
					return attackCoordinates;
				}else if(move[outerCounter][innerCounter] === 'X'){
					attackCoordinates = attackCoordinates;
					return attackCoordinates;
				}else if(move[outerCounter][innerCounter !== 'O'] && move[outerCounter][innerCounter] !== 'X'){
					attackCoordinates = randomNum;
					return attackCoordinates;
				}
			}
		}
		
	}

}


function checkIfPlayerWin(move) {
	var result;

	var firstRowContainerForO = 0;
	var firstRowContainerForX = 0;
	var firstRowContainerEmpty = 0;

	var secondRowContainerForO = 0;
	var secondRowContainerForX = 0;
	var secondRowContainerEmpty = 0;

	var thirdRowContainerForO = 0;
	var thirdRowContainerForX = 0;
	var thirdRowContainerEmpty = 0;

	var firstColumnContainerForO = 0;
	var firstColumnContainerForX = 0;
	var firstColumnContainerEmpty = 0;

	var secondColumnContainerForO = 0;
	var secondColumnContainerForX = 0;
	var secondColumnContainerEmpty = 0;

	var thirdColumnContainerForO = 0;
	var thirdColumnContainerForX = 0;
	var thirdColumnContainerEmpty = 0;

	var leftToRightDiagonalContainerForO = 0;
	var leftToRightDiagonalContainerForX = 0;
	var leftToRightDiagonalContainerEmpty = 0;

	var rightToLeftDiagonalContainerForO = 0;
	var rightToLeftDiagonalContainerForX = 0;
	var rightToLeftDiagonalContainerEmpty = 0;

	for(var counter = 0; counter <= 2; counter++){
		if(move[0][counter] === 'O'){
			firstRowContainerForO++;
		}else if(move[0][counter] === 'X'){
			firstRowContainerForX++;
		}else if(move[0][counter] !== 'O' && move[0][counter] !== 'X'){
			firstRowContainerEmpty++;
		}
	}

	if(firstRowContainerForO === 3){
		result = true;
		return result;
	}

	for(var counter = 0; counter <= 2; counter++){
		if(move[1][counter] === 'O'){
			secondRowContainerForO++;
		}else if(move[1][counter] === 'X'){
			secondRowContainerForX++;
		}else if(move[1][counter] !== 'O' && move[1][counter] !== 'X'){
			secondRowContainerEmpty++;
		}
	}

	if(secondRowContainerForX === 3){
		result = true;
		return result;
	}

	for(var counter = 0; counter <= 2; counter++){
		if(move[2][counter] === 'O'){
			thirdRowContainerForO++;
		}else if(move[2][counter] === 'X'){
			thirdRowContainerForX++;
		}else if(move[2][counter] !== 'O' && move[2][counter] !== 'X'){
			thirdRowContainerEmpty++;
		}
	}

	if(secondRowContainerForX === 3){
		result = true;
		return result;
	}

	for(var counter = 0; counter <= 2; counter++){
		if(move[counter][0] === 'O'){
			firstColumnContainerForO++;
		}else if(move[counter][0] === 'X'){
			firstColumnContainerForX++;
		}else if(move[counter][0] !== 'O' && move[counter][0] !== 'X'){
			firstColumnContainerEmpty++;
		}
	}

	if(firstColumnContainerForX === 3){
		result = true;
		return true;
	}

	for(var counter = 0; counter <= 2; counter++){
		if(move[counter][1] === 'O'){
			secondColumnContainerForO++;
		}else if(move[counter][1] === 'X'){
			secondColumnContainerForX++;
		}else if(move[counter][1] !== 'O' && move[counter][1] !== 'X'){
			secondColumnContainerEmpty++;
		}
	}

	if(secondColumnContainerForX === 3){
		result = true;
		return result;
	}

	for(var counter = 0; counter <= 2; counter++){
		if(move[counter][2] === 'O'){
			thirdColumnContainerForO++;
		}else if(move[counter][2] === 'X'){
			thirdColumnContainerForX++;
		}else if(move[counter][2] !=='O' && move[counter][2] !== 'X'){
			thirdColumnContainerEmpty++;
		}
	}

	if(thirdColumnContainerForX === 3){
		result = true;
		return result;	
	}

	for(var counter = 0; counter <= 2; counter++){
		
		if(move[counter][counter] === 'O'){
			leftToRightDiagonalContainerForO++;
		}else if(move[counter][counter] === 'X'){
			leftToRightDiagonalContainerForX++;
		}else if(move[counter][counter] !== 'O' && move[counter][counter] !== 'X'){
			leftToRightDiagonalContainerEmpty++;
		}
	}

	if(leftToRightDiagonalContainerForX === 3){
		result = true;
		return result;
	}

	for(var counter = 0; counter <=2; counter++){
		if(counter === 0){
			if(move[counter][2] === 'O'){
				rightToLeftDiagonalContainerForO++;
			}else if(move[counter][2] === 'X'){
				rightToLeftDiagonalContainerForX++;
			}else if(move[counter][2] !== 'O' && move[counter][2] !== 'X'){
				rightToLeftDiagonalContainerEmpty++;
			}
		}else if(counter === 1){
			if(move[counter][1] === 'O'){
				rightToLeftDiagonalContainerForO++;
			}else if(move[counter][1] ==='X'){
				rightToLeftDiagonalContainerForX++;
			}else if(move[counter][1] !== 'O' && move[counter][1] !== 'X'){
				rightToLeftDiagonalContainerEmpty++;
			}
		}else if(counter === 2){
			if(move[counter][0] === 'O'){
				rightToLeftDiagonalContainerForO++;
			}else if(move[counter][0] === 'X'){
				rightToLeftDiagonalContainerForX++;
			}else if(move[counter][0] !== 'O' && move[counter][0] !== 'X'){
				rightToLeftDiagonalContainerEmpty++;
			}
		}
	}


	if(rightToLeftDiagonalContainerForX === 3){
		result = true;
		return result;
	}
	

	return false;
	
}


function checkIfComputerWin(move) {

	var result;

	var firstRowContainerForO = 0;
	var firstRowContainerForX = 0;
	var firstRowContainerEmpty = 0;

	var secondRowContainerForO = 0;
	var secondRowContainerForX = 0;
	var secondRowContainerEmpty = 0;

	var thirdRowContainerForO = 0;
	var thirdRowContainerForX = 0;
	var thirdRowContainerEmpty = 0;

	var firstColumnContainerForO = 0;
	var firstColumnContainerForX = 0;
	var firstColumnContainerEmpty = 0;

	var secondColumnContainerForO = 0;
	var secondColumnContainerForX = 0;
	var secondColumnContainerEmpty = 0;

	var thirdColumnContainerForO = 0;
	var thirdColumnContainerForX = 0;
	var thirdColumnContainerEmpty = 0;

	var leftToRightDiagonalContainerForO = 0;
	var leftToRightDiagonalContainerForX = 0;
	var leftToRightDiagonalContainerEmpty = 0;

	var rightToLeftDiagonalContainerForO = 0;
	var rightToLeftDiagonalContainerForX = 0;
	var rightToLeftDiagonalContainerEmpty = 0;

	for(var counter = 0; counter <= 2; counter++){
		if(move[0][counter] === 'O'){
			firstRowContainerForO++;
		}else if(move[0][counter] === 'X'){
			firstRowContainerForX++;
		}else if(move[0][counter] !== 'O' && move[0][counter] !== 'X'){
			firstRowContainerEmpty++;
		}
	}

	if(firstRowContainerForO === 3){
		result = true;
		return result;
	}

	for(var counter = 0; counter <= 2; counter++){
		if(move[1][counter] === 'O'){
			secondRowContainerForO++;
		}else if(move[1][counter] === 'X'){
			secondRowContainerForX++;
		}else if(move[1][counter] !== 'O' && move[1][counter] !== 'X'){
			secondRowContainerEmpty++;
		}
	}

	if(secondRowContainerForO === 3){
		result = true;
		return result;
	}

	for(var counter = 0; counter <= 2; counter++){
		if(move[2][counter] === 'O'){
			thirdRowContainerForO++;
		}else if(move[2][counter] === 'X'){
			thirdRowContainerForX++;
		}else if(move[2][counter] !== 'O' && move[2][counter] !== 'X'){
			thirdRowContainerEmpty++;
		}
	}

	if(thirdRowContainerForO == 3){
		result = true;
		return result;
	}

	for(var counter = 0; counter <= 2; counter++){
		if(move[counter][0] === 'O'){
			firstColumnContainerForO++;
		}else if(move[counter][0] === 'X'){
			firstColumnContainerForX++;
		}else if(move[counter][0] !== 'O' && move[counter][0] !== 'X'){
			firstColumnContainerEmpty++;
		}
	}

	if(firstColumnContainerForO === 3){
		result = true;
		return true;
	}

	for(var counter = 0; counter <= 2; counter++){
		if(move[counter][1] === 'O'){
			secondColumnContainerForO++;
		}else if(move[counter][1] === 'X'){
			secondColumnContainerForX++;
		}else if(move[counter][1] !== 'O' && move[counter][1] !== 'X'){
			secondColumnContainerEmpty++;
		}
	}

	if(secondColumnContainerForO === 3){
		result = true;
		return result;
	}

	for(var counter = 0; counter <= 2; counter++){
		if(move[counter][2] === 'O'){
			thirdColumnContainerForO++;
		}else if(move[counter][2] === 'X'){
			thirdColumnContainerForX++;
		}else if(move[counter][2] !== 'O' && move[counter][2] !== 'X'){
			thirdColumnContainerEmpty++;
		}
	}

	if(thirdColumnContainerForO === 3){
		result = true;
		return result;	
	}

	for(var counter = 0; counter <= 2; counter++){
		
		if(move[counter][counter] === 'O'){
			leftToRightDiagonalContainerForO++;
		}else if(move[counter][counter] === 'X'){
			leftToRightDiagonalContainerForX++;
		}else if(move[counter][counter] !== 'O' && move[counter][counter] !== 'X'){
			leftToRightDiagonalContainerEmpty++;
		}
	}

	if(leftToRightDiagonalContainerForO === 3){
		result = true;
		return result;
	}

	for(var counter = 0; counter <=2; counter++){
		if(counter === 0){
			if(move[counter][2] === 'O'){
				rightToLeftDiagonalContainerForO++;
			}else if(move[counter][2] === 'X'){
				rightToLeftDiagonalContainerForX++;
			}else if(move[counter][2] !== 'O' && move[counter][2] !== 'X'){
				rightToLeftDiagonalContainerEmpty++;
			}
		}else if(counter === 1){
			if(move[counter][1] === 'O'){
				rightToLeftDiagonalContainerForO++;
			}else if(move[counter][1] === 'X'){
				rightToLeftDiagonalContainerForX++;
			}else if(move[counter][1] !== 'O' && move[counter][1] !== 'X'){
				rightToLeftDiagonalContainerEmpty++;
			}
		}else if(counter === 2){
			if(move[counter][0] === 'O'){
				rightToLeftDiagonalContainerForO++;
			}else if(move[counter][0] === 'X'){
				rightToLeftDiagonalContainerForX++;
			}else if(move[counter][0] !== 'O' && move[counter][0] !== 'X'){
				rightToLeftDiagonalContainerEmpty++;
			}
		}
	}

	if(rightToLeftDiagonalContainerForO === 3){
		result = true;
		return result;
	}
	

	return false;

}

function plottingUserInput(userMove, move) {
	var coordinates = [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]];

	var cont= true;
	do {
		userMove = parseInt(getUserInput());
		for(var outer=0 ; outer<9 ; outer++) {
		
			if(userMove === (outer+1)) {
				var spot = coordinates[outer];
				if(move[spot[0]][spot[1]] == 'O' || move[spot[0]][spot[1]] == 'X') {
					console.log("Looks like that slot is occupied. Please try again.")
					break;
				}else {
					move[spot[0]][spot[1]] = 'X';
					cont = false;
					break;
					
				}
			}
		}
	}while(cont);
	grid(move);
}

function computerRandomizer(computerMove,move) {
	console.log("\t\t Computer's turn" + "\n");
	console.log("Computer Move = " + computerMove);
	if(computerMove === 1){
		console.log("Computer Move = 1");
		move[0][0] = 'O';
	}else if(computerMove === 2){
		console.log("Computer Move = 2");
		move[0][1] = 'O';
	}else if(computerMove === 3){
		console.log("Computer Move = 3");
		move[0][2] = 'O';
	}else if(computerMove === 4){
		console.log("Computer Move = 4");
		move[1][0] = 'O';
	}else if(computerMove === 5){
		console.log("Computer Move = 5");
		move[1][1] = 'O';
	}else if(computerMove === 6){
		console.log("Computer Move = 6");
		move[1][2] = 'O';
	}else if(computerMove === 7){
		console.log("Computer Move = 7");
		move[2][0] = 'O';
	}else if(computerMove === 8){
		console.log("Computer Move = 8");
		move[2][1] = 'O';
	}else if(computerMove === 9){
		console.log("Computer Move = 9");
		move[2][2] = 'O';
	}
	grid(move);
}

function computerAttackFunction(computerMove, move) {
	console.log("\t\t Computer's turn" + "\n");
	console.log("Computer Move = " + computerMove);
	if(computerMove === 1){
		console.log("Computer Move = 1");
		move[0][0] = 'O';
	}else if(computerMove === 2){
		console.log("Computer Move = 2");
		move[0][1] = 'O';
	}else if(computerMove === 3){
		console.log("Computer Move = 3");
		move[0][2] = 'O';
	}else if(computerMove === 4){
		console.log("Computer Move = 4");
		move[1][0] = 'O';
	}else if(computerMove === 5){
		console.log("Computer Move = 5");''
		move[1][1] = 'O';
	}else if(computerMove === 6){
		console.log("Computer Move = 6");
		move[1][2] = 'O';
	}else if(computerMove === 7){
		console.log("Computer Move = 7");
		move[2][0] = 'O';
	}else if(computerMove === 8){
		console.log("Computer Move = 8");
		move[2][1] = 'O';
	}else if(computerMove === 9){
		console.log("Computer Move = 9");
		move[2][2] = 'O';
	}
	grid(move);
}

function optionAsk() {
	var option = ' ';
	option = prompt("\n\t 	Do you want to play again?" + "\n\t" + 
						"Type 'y' if yes or type 'n' if no." + "\n");
	return option;
}

function checkIfDraw(move) {
	var result;
	var checkMeter = 0;
	for(var outer = 0 ; outer<=2 ; outer++) {
		for(var inner = 0 ; inner<=2 ; inner++) {
			if(move[outer][inner] === 'X' || move[outer][inner] ==='O') {
				checkMeter++;
			}
		}
	}
	if(checkMeter === 9){
		result = true;
	}else {
		result = false;
	}
	return result;
}
