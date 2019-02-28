let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector("#result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
    const choice = ["r","p","s"];
    const randomNumber = Math.floor(Math.random()*3);
    return choice[randomNumber];
}


function game(userChoice){
    const compChoice = getComputerChoice();
    
    switch(userChoice+compChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,compChoice);
            break;
        
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,compChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            tie(userChoice,compChoice);
            break;
    }
} 

function convertTOWord(choice){
    return (choice === "r" ? "Rock" : choice === "p" ? "Paper" : choice === "s" ? "Scissor" : "")
        
}

function win(userChoice,compChoice){
    userScore++;
    userScore_span.innerHTML =userScore;
    compScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = convertTOWord(userChoice) +" "+smallUserWord + " beats " +convertTOWord (compChoice) + " "+smallCompWord;
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("green-glow")}, 300);
}


function lose(userChoice,compChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = convertTOWord(userChoice) +" "+smallUserWord + " loses to " +convertTOWord (compChoice) + " "+smallCompWord;
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("red-glow")}, 300);
}

function tie(userChoice,compChoice){
    
    userScore_span.innerHTML =userScore;
    compScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = "Its a Draw";
    document.getElementById(userChoice).classList.add("grey-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("grey-glow")}, 300);
}

function main(){
    rock_div.addEventListener('click',function(){
        game("r");
    })

    paper_div.addEventListener('click',function(){
        game("p");
    })

    scissor_div.addEventListener('click',function(){
        game("s");
    })
}

main()