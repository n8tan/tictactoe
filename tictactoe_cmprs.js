//const ROW = 3;
//const COL = 3;

//Tic-Tac-Toe code but compressed

/*////////////////////////////////////////////////////////////////////////////////////////////////////|
|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|
|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|
|@@@@@@@@@\\\\\\\\\\\\\\\\\\\\\\\\\\@@\\\\\\\\\\\\\\\\\\\\@@@@@\\\\\\\\\\\\\\\\\\@@@@@@@@@@@@@@@@@@@@@|
|@@@@@@@@@\\\\\\\\\\\\\\\\\\\\\\\\\\@@\\\\\\\\\\\\\\\\\\\\@@@@\\\\\\\\\\\\\\\\\\\@@@@@@@@@@@@@@@@@@@@@|
|@@@@@@@@@@@@@@@@@@@\\\\\\\@@@@@@@@@@@@@@@@@@@\\\\\@@@@@@@@@@@\\\\\\@@@@@@@@@@@@@@@@\\\\\\\\\@@@@@@@@@|
|@@@@@@@@@@@@@@@@@@@\\\\\\\@@@@@@@@@@@@@@@@@@@\\\\\@@@@@@@@@@@\\\\\\@@@@@@@@@@@@@@@@\\\\\\\\\@@@@@@@@@|
|@@@@@@@@@@@@@@@@@@@\\\\\\\@@@@@@@@@@@@@@@@@@@\\\\\@@@@@@@@@@@\\\\\\@@@@@@@@@@@@@@@@\\\\\\\\\@@@@@@@@@|
|@@@@@@@@@@@@@@@@@@@\\\\\\\@@@@@@@@@@@@@@@@@@@\\\\\@@@@@@@@@@@\\\\\\@@@@@@@@@@@@@@@@\\\\\\\\\@@@@@@@@@|
|@@@@@@@@@@@@@@@@@@@\\\\\\\@@@@@@@@@@@\\\\\\\\\\\\\\\\\\\\@@@@\\\\\\\\\\\\\\\\\\\@@@@@@@@@@@@@@@@@@@@@|
|@@@@@@@@@@@@@@@@@@@\\\\\\\@@@@@@@@@@@\\\\\\\\\\\\\\\\\\\\@@@@\\\\\\\\\\\\\\\\\\\@@@@@@@@@@@@@@@@@@@@@|
|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|
|@@@@@@@@@\\\\\\\\\\\\\\\\\\\\\\\\\\@@@@@@@@\\\\\\\\\\@@@@@@@@@\\\\\\\\\\\\\\\\\\@@@@@@@@@@@@@@@@@@@@@|
|@@@@@@@@@\\\\\\\\\\\\\\\\\\\\\\\\\\@@@\\\\\\\\\\\\\\\\\\@@@@@\\\\\\\\\\\\\\\\\\\@@@@@@@@@@@@@@@@@@@@@|
|@@@@@@@@@@@@@@@@@@@\\\\\\\@@@@@@@@@@@\\\\\\@@@@@@@@\\\\\\@@@@\\\\\\@@@@@@@@@@@@@@@@\\\\\\\\\@@@@@@@@@|
|@@@@@@@@@@@@@@@@@@@\\\\\\\@@@@@@@@@@@\\\\\\@@@@@@@@\\\\\\@@@@\\\\\\@@@@@@@@@@@@@@@@\\\\\\\\\@@@@@@@@@|
|@@@@@@@@@@@@@@@@@@@\\\\\\\@@@@@@@@@@@\\\\\\@@@@@@@@\\\\\\@@@@\\\\\\@@@@@@@@@@@@@@@@\\\\\\\\\@@@@@@@@@|
|@@@@@@@@@@@@@@@@@@@\\\\\\\@@@@@@@@@@@\\\\\\\\\\\\\\\\\\\\@@@@\\\\\\@@@@@@@@@@@@@@@@\\\\\\\\\@@@@@@@@@|
|@@@@@@@@@@@@@@@@@@@\\\\\\\@@@@@@@@@@@\\\\\\@@@@@@@@\\\\\\@@@@\\\\\\\\\\\\\\\\\\\@@@@@@@@@@@@@@@@@@@@@|
|@@@@@@@@@@@@@@@@@@@\\\\\\\@@@@@@@@@@@\\\\\\@@@@@@@@\\\\\\@@@@\\\\\\\\\\\\\\\\\\\@@@@@@@@@@@@@@@@@@@@@|
|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|
|@@@@@@@@@\\\\\\\\\\\\\\\\\\\\\\\\\\@@\\\\\\\\\\\\\\\\\\\@@@@@\\\\\\\\\\\\\\\\\\@@@@@@@@@@@@@@@@@@@@@@|
|@@@@@@@@@\\\\\\\\\\\\\\\\\\\\\\\\\\@@\\\\\@@@@@@@@@\\\\\@@@@@\\\\\\@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|
|@@@@@@@@@@@@@@@@@@@\\\\\\\@@@@@@@@@@@\\\\\@@@@@@@@@\\\\\@@@@@\\\\\\@@@@@@@@@@@@@@@@\\\\\\\\\@@@@@@@@@|
|@@@@@@@@@@@@@@@@@@@\\\\\\\@@@@@@@@@@@\\\\\@@@@@@@@@\\\\\@@@@@\\\\\\\\\\\\\\\\\\@@@@\\\\\\\\\@@@@@@@@@|
|@@@@@@@@@@@@@@@@@@@\\\\\\\@@@@@@@@@@@\\\\\@@@@@@@@@\\\\\@@@@@\\\\\\\\\\\\\\\\\\@@@@\\\\\\\\\@@@@@@@@@|
|@@@@@@@@@@@@@@@@@@@\\\\\\\@@@@@@@@@@@\\\\\@@@@@@@@@\\\\\@@@@@\\\\\\@@@@@@@@@@@@@@@@\\\\\\\\\@@@@@@@@@|
|@@@@@@@@@@@@@@@@@@@\\\\\\\@@@@@@@@@@@\\\\\@@@@@@@@@\\\\\@@@@@\\\\\\@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|
|@@@@@@@@@@@@@@@@@@@\\\\\\\@@@@@@@@@@@\\\\\\\\\\\\\\\\\\\@@@@@\\\\\\\\\\\\\\\\\\\@@@@@@@@@@@@@@@@@@@@@|
|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|
|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|
|*////////////////////////////////////////////////////////////////////////////////////////////////////|
/*
	List of functions: 
		grid(move)
		randomizer(userMove)
		getUserInput()
		attackFunction(move)
		checkIfPlayerWin(move)
		checkIfComputerWin(move)
		plottingUserInput(userMove, move)
		secondPlottingUserInput(userMove, move)
		computerRandomizer(computerMove, move)
		computerAttackFunction(computerMove, move)
		optionAsk()
		checkIfDraw(move)
*/

function play() {

	do {
		//debugger;
		var userMove; 
		var computerMove;
		var isPlayerWin;
		var isComputerWin;
		var isDraw;
		var move = [['1','2','3'],['4','5','6'],['7','8','9']];
		var option;
		var moves = 0;
		var contGame = true;

		
		grid(move);
		userMove = getUserInput();
		plottingUserInput(userMove,move);
		moves++;
		computerMove = randomizer(userMove);
		computerAttackFunction(computerMove, move);
		moves++;
		secondPlottingUserInput(userMove,move);
		moves++;
		
		do{

			//debugger;
			computerMove = attackFunction(move,userMove);
			computerAttackFunction(computerMove,move);
			moves++;

			
			computerWin = checkIfComputerWin(move);
			if(computerWin === true) {
				console.log("\t\t Computer Has Won! " + "\n");
				break;
			}
			secondPlottingUserInput(userMove,move);
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
		do {
			randomNum = Math.floor(Math.random()*9);	
			if(randomNum === 0) {
				++randomNum;
			}
		}while(randomNum == Number(userMove));
		return randomNum;
	}

	function getUserInput() {
		var userMove = 0;
		do{
			userMove = parseInt(prompt("\n       Please enter a number from '1' to '9': " + "\n"));
		}while(userMove > 9 || userMove < 1);
		return userMove;
	}

	function attackFunction(move,userMove) {
		//debugger;
		var attackCoordinates = 0;
		//The JSON variable spots contains values that indicate whether a certain spot on the 3x3 grid has a
		//computer move, player move, or is empty.
		//Each of the keys is named with the word "spot" followed by the location of that "spot" based on the 3x3 grid.
		var spots =  {
			//top left
			spot00 :{ value:"" },
			//top middle 
			spot01: { value:"" },
			//top right
			spot02: { value:"" },
			//middle left
			spot10: { value:"" },
			//middle middle
			spot11: { value:"" },
			//middle right
			spot12: { value:"" },
			//bottom left			
			spot20: { value:"" },
			//bottom middle
			spot21: { value:"" },
			//bottom right
			spot22: { value:"" }
		}
		//Identifying current 'X' pieces
		for(var outerCount = 0; outerCount <=2; outerCount++) {
			for(var innerCount = 0; innerCount <=2 ; innerCount++) {
				if(move[outerCount][innerCount] === 'X') {
					spots["spot"+outerCount+innerCount].value = "Y"; 
				}else if(move[outerCount][innerCount] === 'O') {
					spots["spot"+outerCount+innerCount].value = "N"; 
				}else {
					spots["spot"+outerCount+innerCount].value = "E";
				}
			}
		}
		//Variable rowColDia is used to store the current values of each row, column and diagonal.
		var rowColDia = {
			row0 : { thread: "", count: 0 },
			row1 : { thread: "", count: 0 },
			row2 : { thread: "", count: 0 },
			col0 : { thread: "", count: 0 },
			col1 : { thread: "", count: 0 }, 
			col2 : { thread: "", count: 0 },
			dia0 : { thread: "", count: 0 },
			dia1 : { thread: "", count: 0 }
		}

		//The following code does this:
		//Group together the different values into a single string.
		//Then count the number of occurences for "Y" inside that String.
		rowColDia.row0.thread = spots.spot00.value+','+spots.spot01.value+','+spots.spot02.value;
		rowColDia.row0.count = num_occ(rowColDia.row0.thread.split(","),"Y","N");

		rowColDia.row1.thread = spots.spot10.value+','+spots.spot11.value+','+spots.spot12.value;
		rowColDia.row1.count = num_occ(rowColDia.row1.thread.split(","),"Y","N");

		rowColDia.row2.thread = spots.spot20.value+','+spots.spot21.value+','+spots.spot22.value;
		rowColDia.row2.count = num_occ(rowColDia.row2.thread.split(","),"Y","N");

		rowColDia.col0.thread = spots.spot00.value+','+spots.spot10.value+','+spots.spot20.value;
		rowColDia.col0.count = num_occ(rowColDia.col0.thread.split(","),"Y","N");

		rowColDia.col1.thread = spots.spot01.value+','+spots.spot11.value+','+spots.spot21.value;
		rowColDia.col1.count = num_occ(rowColDia.col1.thread.split(","),"Y","N");
		
		rowColDia.col2.thread = spots.spot02.value+','+spots.spot12.value+','+spots.spot22.value;
		rowColDia.col2.count = num_occ(rowColDia.col2.thread.split(","),"Y","N");

		rowColDia.dia0.thread = spots.spot00.value+','+spots.spot11.value+','+spots.spot22.value;
		rowColDia.dia0.count = num_occ(rowColDia.dia0.thread.split(","),"Y","N");

		rowColDia.dia1.thread = spots.spot02.value+','+spots.spot11.value+','+spots.spot20.value;
		rowColDia.dia1.count = num_occ(rowColDia.dia1.thread.split(","),"Y","N")

		//The following is how the computer decides what move to make. 
		//It first checks if the row, column or diagonal has a player move count equal to 2.
		//A count equal to 2 indicates that it has a spot that the computer should block to prevent the player from winning.
		//After that, it checks if the spot is empty because the computer might have already made a move there.
		//If the spot is empty, it finds the location of that empty spot.
		//The location of the empty spot determines the attackCoordinates.
		//However, the grid is labelled from 1 to 9. Not checking what row/column/diagonal the empty spot has can result in 
		//unusual bugs.
		for(var i=0; i<3; i++) {
			if(rowColDia["row"+i]["count"] === 2) {
				if(num_occ(rowColDia["row"+i]["thread"].split(","),"E","N") >= 1) {
					attackCoordinates = rowColDia["row"+i]["thread"].split(",").indexOf("E") + 1;
					switch(i) {
						case 1:
							if(attackCoordinates === 1) {
								attackCoordinates = 4;
							}else if(attackCoordinates === 2) {
								attackCoordinates = 5;
							}else {
								attackCoordinates = 6;
							}
						break;
							
						case 2:
							if(attackCoordinates === 1) {
								attackCoordinates = 7;
							}else if(attackCoordinates === 2) {
								attackCoordinates = 8;
							}else {
								attackCoordinates = 9;
							}
						break;
					}
					console.log("Attack Coordinates = " + attackCoordinates);
					if(attackCoordinates !== userMove){
						return attackCoordinates;
					}
				}
			}else if(rowColDia["col"+i]["count"] === 2) {
				console.log("Column Attack");
				if(num_occ(rowColDia["col"+i]["thread"].split(","),"E","N") >= 1) {
					attackCoordinates = rowColDia["col"+i]["thread"].split(",").indexOf("E") + 1;

					switch(i) {
						case 0:
							if(attackCoordinates === 1) {
								attackCoordinates = 1;
							}else if(attackCoordinates === 2) {
								attackCoordinates = 4;
							}else {
								attackCoordinates = 7;
							}
						break;
						case 1:
							if(attackCoordinates === 1) {
								attackCoordinates = 2;
							}else if(attackCoordinates === 2) {
								attackCoordinates = 5;
							}else {
								attackCoordinates = 8;
							}
						break;
							
						case 2:
							if(attackCoordinates === 1) {
								attackCoordinates = 3;
							}else if(attackCoordinates === 2) {
								attackCoordinates = 6;
							}else {
								attackCoordinates = 9;
							}
						break;
					}

					console.log("Attack Coordinates = " + attackCoordinates);
					if(attackCoordinates !== userMove){
						return attackCoordinates;
					}
				}
			}else if(i<2) {
				console.log("Diagonal Attack");
				if(rowColDia["dia"+i]["count"] === 2) {
					if(num_occ(rowColDia["dia"+i]["thread"].split(","), "E", "N") >= 1) {
						attackCoordinates = rowColDia["dia"+i]["thread"].split(",").indexOf("E") + 1;
						
						switch(i) {
							case 0:
								if(attackCoordinates === 1) {
									attackCoordinates = 1;
								}else if(attackCoordinates === 2) {
									attackCoordinates = 5;
								}else {
									attackCoordinates = 9;
								}
							break;
								
							case 1:
								if(attackCoordinates === 1) {
									attackCoordinates = 3;
								}else if(attackCoordinates === 2) {
									attackCoordinates = 5;
								}else {
									attackCoordinates = 7;
								}
							break;
						}
						
						if(attackCoordinates !== userMove){
							return attackCoordinates;
						}
					}
				}
			}
		}
		//The following is how the computer decides if the count for the player move is less than 2.
		//In other words, this part only runs if the computer cannot find a spot that it can 'block' the player.
		//First it gets a random number.
		//Then it checks if the spot pointed by the random number is empty.
		//If it is empty, it returns the the attack coordinates.
		var randomNum = 0;
		console.log("Random Move Thinking");
		//randomNum = Math.floor(Math.random()*9);
		do {
			randomNum = Math.floor(Math.random()*9);
			console.log(randomNum);
			switch(randomNum) {
				case 1:
					if(spots["spot00"].value === "E"){
						attackCoordinates = randomNum;
						return attackCoordinates;
					}
					break;
				case 2:
					if(spots["spot01"].value === "E"){
						attackCoordinates = randomNum;
						return attackCoordinates;
					}
					break;
				case 3:
					if(spots["spot02"].value === "E"){
						attackCoordinates = randomNum;
						return attackCoordinates;
					}
					break;
				case 4:
					if(spots["spot10"].value === "E"){
						attackCoordinates = randomNum;
						return attackCoordinates;
					}
					break;
				case 5:
					if(spots["spot11"].value === "E"){
						attackCoordinates = randomNum;
						return attackCoordinates;
					}
					break;
				case 6:
					if(spots["spot12"].value === "E"){
						attackCoordinates = randomNum;
						return attackCoordinates;
					}
					break;
				case 7:
					if(spots["spot20"].value === "E"){
						attackCoordinates = randomNum;
						return attackCoordinates;
					}
					break;
				case 8:
					if(spots["spot21"].value === "E"){
						attackCoordinates = randomNum;
						return attackCoordinates;
					}
					break;
				case 9:
					if(spots["spot22"].value === "E"){
						attackCoordinates = randomNum;
						return attackCoordinates;
					}
					break;

			}
		}while(true);

	}

	//This function checks the number of occurences in a string.
	//The input variable contains the String to be searched.
	//The target variable is the string that we want to look for. 
	//The substi vriable is the string that we want to temporarily replace so that
	//we may remove the already counted 'target' strings.
	function num_occ(input,target,substi) {
		var copy = input.slice();
		var num = 0;
	    for(var i=0; i<copy.length; i++) {
			var base = copy.indexOf(target);
			if(base!=-1) {
				num++
				copy[base] = substi;
	        }else {
	        	break;
			}
		}
		return num;
	}

	
	function checkIfPlayerWin(move) { 
		var result = false;

		var spots =  {
			//top left
			spot00 :{ value:"" },
			//top middle 
			spot01: { value:"" },
			//top right
			spot02: { value:"" },
			//middle left
			spot10: { value:"" },
			//middle middle
			spot11: { value:"" },
			//middle right
			spot12: { value:"" },
			//bottom left			
			spot20: { value:"" },
			//bottom middle
			spot21: { value:"" },
			//bottom right
			spot22: { value:"" }
		}

		for(var outerCount = 0; outerCount <=2; outerCount++) {
			for(var innerCount = 0; innerCount <=2 ; innerCount++) {
				if(move[outerCount][innerCount] === 'X') {
					spots["spot"+outerCount+innerCount].value = "Y"; 
				}else if(move[outerCount][innerCount] === 'O') {
					spots["spot"+outerCount+innerCount].value = "N"; 
				}else {
					spots["spot"+outerCount+innerCount].value = "E";
				}
			}
		}

		var rowColDia = {
			row0 : { thread: "", count: 0 },
			row1 : { thread: "", count: 0 },
			row2 : { thread: "", count: 0 },
			col0 : { thread: "", count: 0 },
			col1 : { thread: "", count: 0 }, 
			col2 : { thread: "", count: 0 },
			dia0 : { thread: "", count: 0 },
			dia1 : { thread: "", count: 0 }
		}

		rowColDia.row0.thread = spots.spot00.value+','+spots.spot01.value+','+spots.spot02.value;
		rowColDia.row1.thread = spots.spot10.value+','+spots.spot11.value+','+spots.spot12.value;
		rowColDia.row2.thread = spots.spot20.value+','+spots.spot21.value+','+spots.spot22.value;

		rowColDia.col0.thread = spots.spot00.value+','+spots.spot10.value+','+spots.spot20.value;
		rowColDia.col1.thread = spots.spot01.value+','+spots.spot11.value+','+spots.spot21.value;
		rowColDia.col2.thread = spots.spot02.value+','+spots.spot12.value+','+spots.spot22.value;

		rowColDia.dia0.thread = spots.spot00.value+','+spots.spot11.value+','+spots.spot22.value;
		rowColDia.dia1.thread = spots.spot02.value+','+spots.spot11.value+','+spots.spot20.value;

		if( num_occ(rowColDia.row0.thread.split(","),"Y","N") === 3 ) {
			result = true;
		}else if(num_occ(rowColDia.row1.thread.split(","),"Y","N") === 3) {
			result = true;
		}else if(num_occ(rowColDia.row2.thread.split(","),"Y","N") === 3) {
			result = true;
		}else if(num_occ(rowColDia.col0.thread.split(","),"Y","N") === 3) {
			result = true;
		}else if(num_occ(rowColDia.col1.thread.split(","),"Y","N") === 3) {
			result = true;
		}else if(num_occ(rowColDia.col2.thread.split(","),"Y","N") === 3) {
			result = true;
		}else if(num_occ(rowColDia.dia0.thread.split(","),"Y","N") === 3) {
			result = true;
		}else if(num_occ(rowColDia.dia1.thread.split(","),"Y","N") === 3) {
			result = true;
		}

		return result;
	}

	function checkIfComputerWin(move) {
		var result = false;

		var spots =  {
			//top left
			spot00 :{ value:"" },
			//top middle 
			spot01: { value:"" },
			//top right
			spot02: { value:"" },
			//middle left
			spot10: { value:"" },
			//middle middle
			spot11: { value:"" },
			//middle right
			spot12: { value:"" },
			//bottom left			
			spot20: { value:"" },
			//bottom middle
			spot21: { value:"" },
			//bottom right
			spot22: { value:"" }
		}

		for(var outerCount = 0; outerCount <=2; outerCount++) {
			for(var innerCount = 0; innerCount <=2 ; innerCount++) {
				if(move[outerCount][innerCount] === 'X') {
					spots["spot"+outerCount+innerCount].value = "Y"; 
				}else if(move[outerCount][innerCount] === 'O') {
					spots["spot"+outerCount+innerCount].value = "N"; 
				}else {
					spots["spot"+outerCount+innerCount].value = "E";
				}
			}
		}

		var rowColDia = {
			row0 : { thread: "", count: 0 },
			row1 : { thread: "", count: 0 },
			row2 : { thread: "", count: 0 },
			col0 : { thread: "", count: 0 },
			col1 : { thread: "", count: 0 }, 
			col2 : { thread: "", count: 0 },
			dia0 : { thread: "", count: 0 },
			dia1 : { thread: "", count: 0 }
		}

		rowColDia.row0.thread = spots.spot00.value+','+spots.spot01.value+','+spots.spot02.value;
		rowColDia.row1.thread = spots.spot10.value+','+spots.spot11.value+','+spots.spot12.value;
		rowColDia.row2.thread = spots.spot20.value+','+spots.spot21.value+','+spots.spot22.value;

		rowColDia.col0.thread = spots.spot00.value+','+spots.spot10.value+','+spots.spot20.value;
		rowColDia.col1.thread = spots.spot01.value+','+spots.spot11.value+','+spots.spot21.value;
		rowColDia.col2.thread = spots.spot02.value+','+spots.spot12.value+','+spots.spot22.value;

		rowColDia.dia0.thread = spots.spot00.value+','+spots.spot11.value+','+spots.spot22.value;
		rowColDia.dia1.thread = spots.spot02.value+','+spots.spot11.value+','+spots.spot20.value;

		if( num_occ(rowColDia.row0.thread.split(","),"N","Y") === 3 ) {
			result = true;
		}else if(num_occ(rowColDia.row1.thread.split(","),"N","Y") === 3) {
			result = true;
		}else if(num_occ(rowColDia.row2.thread.split(","),"N","Y") === 3) {
			result = true;
		}else if(num_occ(rowColDia.col0.thread.split(","),"N","Y") === 3) {
			result = true;
		}else if(num_occ(rowColDia.col1.thread.split(","),"N","Y") === 3) {
			result = true;
		}else if(num_occ(rowColDia.col2.thread.split(","),"N","Y") === 3) {
			result = true;
		}else if(num_occ(rowColDia.dia0.thread.split(","),"N","Y") === 3) {
			result = true;
		}else if(num_occ(rowColDia.dia1.thread.split(","),"N","Y") === 3) {
			result = true;
		}

		return result;
	}

	function plottingUserInput(userMove, move) {
		if(userMove == 1){
			move[0][0] = 'X';
		}else if(userMove == 2){
			move[0][1] = 'X';
		}else if(userMove == 3){
			move[0][2] = 'X';
		}else if(userMove == 4){
			move[1][0] = 'X';
		}else if(userMove == 5){
			move[1][1] = 'X';
		}else if(userMove == 6){
			move[1][2] = 'X';
		}else if(userMove == 7){
			move[2][0] = 'X';
		}else if(userMove == 8){
			move[2][1] = 'X';
		}else if(userMove == 9){
			move[2][2] = 'X';
		}
		grid(move);
	}

	function secondPlottingUserInput(userMove, move) {
		//console.log("Inside the secondPlottingUserInput");
		var coordinates = [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]];

		var cont= true;
		do {
			//console.log("Inside the do while loop of secondPlottingUserInput");
			userMove = parseInt(getUserInput());
			for(var outer=0 ; outer<9 ; outer++) {
				//console.log("Inside the for loop of secondPlottingUserInput");
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
		//console.log("Exiting the secondPlottingUserInput");
	}

	function computerAttackFunction(computerMove, move) {
		console.log("\t\t Computer's turn" + "\n");
		console.log("Computer Move = " + computerMove);
			if(computerMove == 1){
				console.log("Computer Move = 1");
				move[0][0] = 'O';
			}else if(computerMove == 2){
				console.log("Computer Move = 2");
				move[0][1] = 'O';
			}else if(computerMove == 3){
				console.log("Computer Move = 3");
				move[0][2] = 'O';
			}else if(computerMove == 4){
				console.log("Computer Move = 4");
				move[1][0] = 'O';
			}else if(computerMove == 5){
				console.log("Computer Move = 5");
				move[1][1] = 'O';
			}else if(computerMove == 6){
				console.log("Computer Move = 6");
				move[1][2] = 'O';
			}else if(computerMove == 7){
				console.log("Computer Move = 7");
				move[2][0] = 'O';
			}else if(computerMove == 8){
				console.log("Computer Move = 8");
				move[2][1] = 'O';
			}else if(computerMove == 9){
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
}
