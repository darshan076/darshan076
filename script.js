let boxes = document.querySelectorAll(".box"); // select all boxes
let winner = document.querySelector(".winner"); // select winner line
let resetbtn = document.querySelector(".resetbtn"); // select reset button

let turnX = true;   // first turn of X
let click = 0;     // count click for draw

// make winning patten
let win = [
    [0, 1, 2],  
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// undo disable button when new game start
const disable = () => {
    for(box of boxes){
        box.disabled = true;
    }
}

//restart new game
const reset = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
        turnX = true;
        winner.innerText = "";
        click = 0;
    }
}

// give value to box One By One
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnX){
            box.innerText = "X"; 
            box.style.color = "#f8f9fa";
            turnX = false;
        }else{
            box.innerText = "0";
            box.style.color = "#e9ecef";
            turnX = true;
        }
        box.disabled = true;
        click++;
        check();
    });
});

// check wheter patten is match or not.
function check(){
    for(let patten of win){
        let patt1 = boxes[patten[0]].innerText; //get value of first patten 
        let patt2 = boxes[patten[1]].innerText; //get value of second patten
        let patt3 = boxes[patten[2]].innerText; //get value of third patten
        
        if(patt1 !== "" && patt2 !== "" && patt3 !== ""){   // check box is empty or not
            if(patt1 == patt2 && patt2 == patt3){   // check all box have same value
                winner.innerText = `congraculations! winner is ${patt1}.`
                disable();  
            }
            if(click == 9){
                winner.innerText = "Game Is Draw. Start New Game."
            }
        }
    }
}
        
resetbtn.addEventListener("click", reset); // reset button
