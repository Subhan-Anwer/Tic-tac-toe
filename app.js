let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turnX = "X";

// const disableBoxes = () => {
//     boxes.forEach((box) => {
//         box.innerText = "";
//     })
// }

const winPatterns = [
    [0, 1, 2], // horizontal  1
    [3, 4, 5], // horizontal  2
    [6, 7, 8], // horizontal  3
    [0, 3, 6], // vertical    1
    [1, 4, 7], // vertical    2
    [2, 5, 8], // vertical    3
    [0, 4, 8], // diagonal from top-left to bottom-right
    [2, 4, 6]  // diagonal from top-right to bottom-left
];

const reset = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    })
}

const checkWinner = () => {
    for (let pattern of winPatterns) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val && pos2Val && pos3Val != "" &&
            pos1Val === pos2Val && pos2Val === pos3Val && pos1Val === "X") 
        {
            alert("Player 1 Wins, Congrats! (X)");
            reset();
        }
        else if (pos1Val && pos2Val && pos3Val != "" && 
            pos1Val === pos2Val && pos2Val === pos3Val && pos1Val === "O") 
        {
            alert("Player 2 Wins, Congrats! (O)");
            reset();
        }
}}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX) {
            box.innerText = "X";
            turnX = false;
        } else {
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        checkWinner();
    })
});

resetBtn.addEventListener("click", () => {
    reset();
})

