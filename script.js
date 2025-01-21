let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector("#msg");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container")


let truno = false;

const winpatterns =[
          [0, 1, 2],
          [0, 3, 6],
          [0, 4, 8],
          [1, 4, 7],
          [2, 5, 8],
          [2, 4, 6],
          [3, 4, 5],
          [6, 7, 8], 
        ];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (truno)
        {
            box.innerText = "O";
            truno = false;
        }
        else
        {
            box.innerText = "X";
            truno = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

const disableBoxes = () =>{
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        msgcontainer.classList.add("hide");
    }
};

const checkwinner = () => {
    for (let pattern of winpatterns) 
    {
        if(boxes[pattern[0]].innerText === "X"&&boxes[pattern[1]].innerText === "X"&&boxes[pattern[2]].innerText === "X")
        {
          console.log("X is the winner");
          msg.innerText = "X is the winner";
          msgcontainer.classList.remove("hide");
          disableBoxes();
        }
        if(boxes[pattern[0]].innerText === "O"&&boxes[pattern[1]].innerText === "O"&&boxes[pattern[2]].innerText === "O")
        {
          console.log("0 is the winner");
          msg.innerText = "0 is the winner";
          msgcontainer.classList.remove("hide");
          disableBoxes();
        }
    }
}
 

const resetGame = () => {
    truno = false;
    enableBoxes();

};

newbtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

