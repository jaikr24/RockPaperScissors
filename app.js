let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let selection;
let result = document.querySelector("#result-str");
let resultBox = document.querySelector(".result-box");

let selectionList = ["rock", "paper", "scissors"];

let playerScore = document.querySelectorAll("#players-score");
let computerScore = document.querySelectorAll("#computer-score");

rock.addEventListener("click", () => {
    selection = "rock";
    check();
});

paper.addEventListener("click", () => {
    selection = "paper";
    check();
});

scissors.addEventListener("click", () => {
    selection = "scissors";
    check();
});

function check() {
    let comp = selectionList[(Math.floor(Math.random() * selectionList.length))];
    if (selection === comp) {
        result.textContent = "It is a Draw";
        result.setAttribute("class", "draw-class");
    } else if (selection === "rock" && comp === "paper") {
        result.textContent = "You Lost";
        result.setAttribute("class", "lost-class");
        computerScore[0].innerText = Number(computerScore[0].innerText) + 1;
    } else if (selection === "paper" && comp === "scissors") {
        result.textContent = "You Lost";
        result.setAttribute("class", "lost-class");
        computerScore[0].innerText = Number(computerScore[0].innerText) + 1;
    } else if (selection === "scissors" && comp === "rock") {
        result.textContent = "You Lost";
        result.setAttribute("class", "lost-class");
        computerScore[0].innerText = Number(computerScore[0].innerText) + 1;
    } else {
        result.textContent = "You Won";
        result.setAttribute("class", "win-class");
        playerScore[0].innerText = Number(playerScore[0].innerText) + 1;
    }
}