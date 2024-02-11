const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const checkWinner = (player, computer) => {
	if (player === computer) {
		return "draw";
		// console.log("Its Tied");
	} else if (player === "rock") {
		// const res = computer === "scissors" ? "player" : "computer";
		// return res;
		//destructer
		return computer === "scissors" ? "player" : "computer";
	} else if (player === "paper") {
		return computer === "rock" ? "player" : "computer";
	} else {
		return computer === "paper" ? "player" : "computer";
	}
}

const showResult = (result) => {
	if (result === "player") {
		console.log("You Win");
		playerScore++;
	}
	else if (result === "computer") {
		console.log("You lose");
		computerScore++;
	} else {
		console.log("it's tie");
	}

	console.log(`Your Score ${playerScore}`);
	console.log(`Computer's Score ${computerScore}`);
	console.log(`........................`);
}

const play = () => {
	const playerChoice = prompt("Choose rock, paper, scissors");
	// if (playerChoice === "paper" ||
	// 	playerChoice === "rock" ||
	// 	playerChoice === "scissors"
	// ) {

	// bekhatere toLowerCase agar cancel bezanim error mide
	//shart typeof bara in gozashte shode ke agar cancel ro zadim error nade va "You cheated" ejra beshe
	// if (choices.indexOf(typeof playerChoice === "string" && playerChoice.toLowerCase()) !== -1) {  // !== -1 : yani faghat index 0,1,2
	//agar bekhaim code sade tar beshe az optional chaning estefade mikonim(?) ke agar playerChoice undefine budT baghie ham undefine beshe
	if (choices.indexOf(playerChoice) !== -1) {  // !== -1 : yani faghat index 0,1,2
		console.log(`You choose ${playerChoice}`);
	} else {
		console.log("You cheated");
		return;
	}

	// const randomNumber = Math.floor(Math.random() * 3); // tolid adad beine 0 ta 2: 0 1 2
	const randomNumber = Math.floor(Math.random() * choices.length); // tolid adad beine 0 ta 2: 0 1 2
	//console.log(randomNumber) ;
	const computerChoice = choices[randomNumber];
	console.log(`Computer choses ${computerChoice}`);

	const gameResult = checkWinner(playerChoice, computerChoice);
	showResult(gameResult);
	play();

	// if (playerScore === 5) {
	// 	console.log("Player is Win");
	// 	console.log("Finish Game");
	// }
	// if (computerScore === 5) {
	// 	console.log("Computer is Win");
	// 	console.log("Finish Game");
	// }
	//ke bad az etmam bazi dobare ejra beshe (poshte sare ham)
};

play();



// if (player === computer) {
// 	return "draw";
// 	// console.log("Its Tied");
// } else if (player === "rock") {
// 	if (computer === "scissors") {
// 		return "Player win.";
// 		// console.log("Player win.")
// 	} else {
// 		return "Computer win.";
// 		// console.log("Computer win.")
// 	}
// } else if (player === "paper") {
// 	if (computer === "rock") {
// 		return "Player win.";
// 		// console.log("Player win.")
// 	} else {
// 		return "Computer win.";
// 		// console.log("Computer win.")
// 	}
// } else if (player === "scissors") {
// 	if (computer === "paper") {
// 		return "Player win.";
// 		// console.log("Player win.")
// 	} else {
// 		return "Computer win.";
// 		// console.log("Computer win.")
// 	}
// }