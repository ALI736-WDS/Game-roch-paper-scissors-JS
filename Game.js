const choices = ["rock", "paper", "scissors"] ;

const userChoice = prompt("Choose roch, paper, scissors") ;
if(userChoice)
	{
		console.log(`You choose ${userChoice}`) ;
	} else
		{
			console.log("You cheated") ;
		}

const randomNumber = Math.floor(Math.random() * 3) ; // tolid adad beine 0 ta 2: 0 1 2
//console.log(randomNumber) ;
const computerChoice = choices[randomNumber] ;
console.log(`Computer chosses ${computerChoice}`) ;

if(userChoice === computerChoice)
	{
		console.log("it's a tie") ;
	}else if(userChoice === "rock")
		{
			if(computerChoice === "scissors")
			{
			console.log("You win!") ;
			}else{
			console.log("You lose!") ;
		}
		}else if(userChoice === "paper")
			{
				if(computerChoice === "rock")
					{
						console.log("You win!") ;
					}else{
						console.log("You lose!") ;
					}
			}else if(userChoice === "scissors")
				{
					if(computerChoice === "paper")
						{
							console.log("You win!") ;
						}else{
							console.log("You lose!")
						}
				}