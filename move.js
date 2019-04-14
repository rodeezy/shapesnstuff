d= document.createElement("div");
document.body.appendChild(d);
d.style.cssText = "background-color: rgb(255,0,1); border-radius: 50%; height: 50px; width: 50px; position: absolute; top: 0px; left: 0px;";

left = null;
up = null;
right = null;
down = null;
colorRight = null;
colorLeft = null;

function currentShape() {
  if (d.style.borderRadius === "50%"){
    return "circle"
  }
  return "square"
}
colorChangeMode = false;

onkeydown = z => {
  if (!colorChangeMode) {
    if (z.key == "ArrowRight" && right == null){
      right=setInterval(function(){d.style.left = parseInt(d.style.left.replace("px",""))+2+"px"},1);
    } else if (z.key == "ArrowLeft" && left == null){
      left=setInterval(function(){d.style.left = parseInt(d.style.left.replace("px",""))-2+"px"},1);
    } else if (z.key == "ArrowUp" && up == null){
      up=setInterval(function(){d.style.top = parseInt(d.style.top.replace("px",""))-2+"px"},1);
    } else if (z.key == "ArrowDown" && down == null){
      down=setInterval(function(){d.style.top = parseInt(d.style.top.replace("px",""))+2+"px"},1);
    } else if (z.key == " "){
      currentShape() === "circle" ? makeSquare() : makeCircle();
    } else if (z.key == "c"){
      colorChangeMode = true;
    }
  } else {
    if (z.key == "ArrowRight" && colorRight == null){
      colorRight = setInterval(colorShiftRight,1);
    } else if (z.key == "ArrowLeft" && colorLeft == null){
      colorLeft = setInterval(colorShiftLeft,1);
    }
  }
}

onkeyup = z => {
  if (!colorChangeMode) {
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
  } else {
    if (z.key == "c"){
      colorChangeMode = false;
      if (colorRight != null){
        clearInterval(colorRight);
        colorRight = null;
      }
      if (colorLeft != null){
        clearInterval(colorLeft);
        colorLeft = null;
      }
    } else if (z.key == "ArrowRight"){
      clearInterval(colorRight);
      colorRight = null;
    } else if (z.key == "ArrowLeft"){
      clearInterval(colorLeft);
      colorLeft = null;
    }
  }
}

function makeSquare() {
  d.style.borderRadius = "0"
}
function makeCircle() {
  d.style.borderRadius = "50%"
}

function extractRed() {
  return parseInt(d.style.backgroundColor.split("(")[1].split(",")[0])
}

function extractGreen() {
  return parseInt(d.style.backgroundColor.split(",")[1])
}

function extractBlue() {
  return parseInt(d.style.backgroundColor.split(",")[2].split(")")[0])
}

function createRgb(red, green, blue) {
  return "rgb("+([red,green,blue].join(","))+")";
}

function colorShiftRight() {
  let red = extractRed();
  let blue = extractBlue();
  let green = extractGreen();
  if (red === 255){
    if (green === 0){
      blue += 1;
      if (blue === 255) {
        red -= 1;
      }
    } else {
      green -= 1;
    }
  } else if (blue === 255){
    if (red === 0){
      green += 1;
      if (green == 255){
        blue -= 1;
      }
    } else {
      red -= 1;
    }
  } else {
    if (blue === 0){
      red +=1
    } else {
      blue -= 1
    }
  }
  d.style.backgroundColor = createRgb(red, green, blue);
}
function colorShiftLeft() {
  let red = extractRed();
  let blue = extractBlue();
  let green = extractGreen();
  if (red === 255){
    if (blue === 0){
      green += 1;
      if (green === 255) {
        red -= 1;
      }
    } else {
      blue -= 1;
    }
  } else if (green === 255){
    if (red === 0){
      blue += 1;
      if (blue == 255){
        green -= 1;
      }
    } else {
      red -= 1;
    }
  } else {
    if (green === 0){
      red +=1
    } else {
      green -= 1
    }
  }
  d.style.backgroundColor = createRgb(red, green, blue);
}

