let main = document.querySelector('.game-component')
let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset")
let newGamebtn = document.querySelector("#new-game")
let message = document.querySelector(".message")
let text = document.querySelector(".winner-msg")


let playerO = true;
let playerX ;

//every possible winning conditions
const winCondition = [[0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6]];


//main function for game operation
boxes.forEach((box)=>{ 
    box.addEventListener("click", ()=>{                                                                
        if(playerO){
            box.innerText="O";
            playerO = false;

        }else{
            box.innerText="X";
            playerO=true;
        }
        box.disabled=true;
        checkwinner();
    })
})

//displays the winner
const showWinner = (winner) =>{
    text.innerText = `Player ${winner} is the winner`
    message.classList.remove('hide')
    main.classList.add('hide')
    reset.classList.add('hide')
}

//checks if there are any winnner
const checkwinner = () => {
    for (let condition of winCondition) {
        let a = boxes[condition[0]].innerText;
        let b = boxes[condition[1]].innerText;
        let c = boxes[condition[2]].innerText;
        
        if(a != "" && b != "" && c != "" ){
            if(a===b && b===c){
                showWinner(a)
                //disbale every boxes after we get a winner
                disableBoxes()

            }
        }
    }
}

//disbale every boxes
const disableBoxes = () =>{
    for ( box of boxes) {
        box.disabled = true;
    }
}

//enables every boxes
const enableBoxes = () =>{
    for ( box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () =>{
    enableBoxes()
    message.classList.add('hide');
}

const newGame = () => {
    resetGame();
    main.classList.remove('hide')
    reset.classList.remove('hide')
}

reset.addEventListener("click", resetGame)
newGamebtn.addEventListener('click', newGame)