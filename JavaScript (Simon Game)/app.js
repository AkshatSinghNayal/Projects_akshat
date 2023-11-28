let gameSeq = [];
let userSeq = [];

let btns = ["box1", "box2", "box3", "box4"]; // As in the css box1 reffer to as red and box2 reffers to as green similarly follows rgby values

let heading = document.querySelector("h3");
let started = false;
let level = 0;

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;
    lvlup();
  }
});

function btnflash(button) {
  button.classList.add("flash");
  setTimeout(function () {
    button.classList.remove("flash");
  }, 400);
}

function userflash(button) {
  button.classList.add("userflash");
  setTimeout(function () {
    button.classList.remove("userflash");
  }, 250);
}

function lvlup() {
  userSeq=[];
  level++;
  heading.innerText = `Level-${level}`;

  let randomindex = Math.floor(Math.random(btns) * 3); // this is for the random no. generator for the index of btn array
  let randomcolor = btns[randomindex]; // this line of code is for to get the perticular index value genrated by the randomindex
  let randombutton = document.querySelector(`.${randomcolor}`); // this line of code is for creating the variable name randombutton and giving the value of the index as a class and adding the class through passing the value to the btnflash function
  // console.log(randomindex);
  // console.log(randomcolor);
  // console.log(randombutton);
  gameSeq.push(randomcolor);
  console.log(gameSeq);
  btnflash(randombutton);
}

function checkAns(idx){
  // let idx = level -1 ;
  if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length===gameSeq.length){
      setTimeout(lvlup,1000);
    }
  } else {
    heading.innerHTML = `Game Over !! Your score was <b>${level}</b> <br> Press Any Key To Start This Game ...`;
    started=false;
    level=0;
    userSeq=[];
    gameSeq=[];
  }

}


function buttonPress() {
  console.log(this);
  let btn = this; // this is not global button this is a btn inside a fucntion named buttonPress ("Akshat Singh Nayal")
  userflash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  // console.log(userSeq);
  checkAns(userSeq.length-1);
}

let btnclicked = document.querySelectorAll(".btn"); // btn is the class in which colors are there
for (btnsall of btnclicked) btnsall.addEventListener("click", buttonPress);
  