const box = document.querySelector("#box");
let leftSide = 0;
let topSide = 0;
// function to move box

window.addEventListener("keyup", (e) => {
  console.log(e.key);

  if (e.key === "ArrowRight") {
    leftSide = leftSide + 20;
    box.style.left = `${leftSide}px`;
  } else if (e.key === "ArrowLeft") {
    leftSide = leftSide - 20;
    box.style.left = leftSide + "px";
  } else if (e.key === "ArrowUp") {
    topSide = topSide - 20;
    box.style.top = topSide + "px";
  } else if (e.key === "ArrowDown") {
    topSide = topSide + 20;
    box.style.top = topSide + "px";
  } else {
    console.log("invalid key press");
  }

  // switch () {
  //   case "ArrowRight":
  //     leftSide = leftSide + 20;
  //     box.style.left = leftSide + "px";
  //     break;

  //   default:
  //     break;
  // }
});
