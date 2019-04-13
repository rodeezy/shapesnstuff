d= document.createElement("div");
document.body.appendChild(d);
d.style.cssText = "background-color: red; border-radius: 50%; height: 50px; width: 50px; position: absolute; top: 0px; left: 0px;";

left = null;
up = null;
right = null;
down = null;
currentShape = "circle"

onkeydown = z => {
  if (z.key == "ArrowRight" && right == null){
    right=setInterval(function(){d.style.left = parseInt(d.style.left.replace("px",""))+2+"px"},1);
  } else if (z.key == "ArrowLeft" && left == null){
    left=setInterval(function(){d.style.left = parseInt(d.style.left.replace("px",""))-2+"px"},1);
  } else if (z.key == "ArrowUp" && up == null){
    up=setInterval(function(){d.style.top = parseInt(d.style.top.replace("px",""))-2+"px"},1);
  } else if (z.key == "ArrowDown" && down == null){
    down=setInterval(function(){d.style.top = parseInt(d.style.top.replace("px",""))+2+"px"},1);
  } else if (z.key == " "){
    currentShape === "circle" ? makeSquare() : makeCircle()
  }
}

onkeyup = z => {
  if (z.key == "ArrowRight"){
    clearInterval(right);
    right = null;
  } else if (z.key == "ArrowLeft"){
    clearInterval(left);
    left = null;
  } else if (z.key == "ArrowUp"){
    clearInterval(up);
    up = null;
  } else if (z.key == "ArrowDown"){
    clearInterval(down);
    down = null;
  }
}

function makeSquare() {
  d.style.borderRadius = "0"
  currentShape = "square"
}
function makeCircle() {
  d.style.borderRadius = "50%"
  currentShape = "circle"
}