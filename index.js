/*

1 controle speed of box with slider
2 return the box when it goes out of the range

*/
const slider = document.getElementById("slider");
const box = document.querySelector("#box");
let srcResolution = `${1366 * 768}PPI `;
let leftSide = 0;
let topSide = 0;
let move = Number(prompt("Enter a number from 1 to 20"));

// function to move box
if (move <= 20 && move >= 0) {
  if (box.value > leftSide) {
    alert("cant go more");
  }
  window.addEventListener("keydown", (e) => {
    console.log(e.key);

    // if (e.key === "ArrowRight") {
    //   leftSide = leftSide + 20;
    //   box.style.left = `${leftSide}px`;
    // } else if (e.key === "ArrowLeft") {
    //   leftSide = leftSide - 20;
    //   box.style.left = leftSide + "px";
    // } else if (e.key === "ArrowUp") {
    //   topSide = topSide - 20;
    //   box.style.top = topSide + "px";
    // } else if (e.key === "ArrowDown") {
    //   topSide = topSide + 20;
    //   box.style.top = topSide + "px";
    // } else {
    //   console.log("invalid key press");
    // }

    switch (e.key) {
      case "ArrowRight":
        leftSide += move;
        box.style.left = `${leftSide}px`;
        break;

      case "ArrowLeft":
        leftSide -= move;
        box.style.left = leftSide + "px";
        break;

      case "ArrowDown":
        topSide += move;
        box.style.top = topSide + "px";
        break;

      case "ArrowUp":
        topSide -= move;
        box.style.top = topSide + "px";
        break;

      default:
        break;
    }
    box.innerHTML = `left = ${leftSide} <br> top = ${topSide}`;
  });
} else {
  alert("You have entered a wrong number");
}
