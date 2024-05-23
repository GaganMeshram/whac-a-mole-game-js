window.onload = function () {
  setGame();
};
function setGame() {
  // set up grid of 3x3 div

  for (let i = 0; i < 9; i++) {
    let tile = document.createElement("div");
    tile.id = i.toString();
    document.getElementById("board").appendChild(tile);
  }
  setInterval(SetMole, 1000);
  setInterval(setPirana, 2000);
}

function randomNumber() {
  let num = Math.floor(Math.random() * 9);
  return num.toString();
  // console.log(num)
}

let currentMole;
let currentPiraha;

function SetMole() {
  if (currentMole) {
    currentMole.innerHTML = "";
  }
  let mole = document.createElement("img");
    mole.src = "./monty-mole.png";
    let num = randomNumber()
  if (currentPiraha && currentPiraha.id == num) {
    return;
  }
  currentMole = document.getElementById(num);
  currentMole.appendChild(mole);
}

function setPirana() {
  if (currentPiraha) {
    currentPiraha.innerHTML = "";
  }
  let pirana = document.createElement("img");
    pirana.src = "./piranha-plant.png";
    let num = randomNumber();
    
  if (currentMole && currentMole.id == num) {
    return;
  }
  currentPiraha = document.getElementById(num);
  currentPiraha.appendChild(pirana);
}
