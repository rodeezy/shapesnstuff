line = null;
startX = null;
startY = null;

onmousedown = x => {
		startY = x.clientY;
		startX = x.clientX;
    line = document.createElement("div");
    line.style.position = "absolute";
    line.style.top = startY+"px";
    line.style.left = startX+"px";
		line.style.height = "2px";
		line.style.width = "1px";
		line.style.backgroundColor="black"
    document.body.appendChild(line);
}

onmousemove = x => {
	if (line != null) {
    	line.style.width = Math.sqrt(Math.abs(x.clientY - startY)**2 + Math.abs(x.clientX - startX)**2)+"px";
      line.style.transform = "rotate(" + (Math.atan((x.clientY - startY)/(x.clientX - startX))/Math.PI*360) + "deg)";
    }
}

onmouseup = x => {
    line = null;
    startX = null;
    startY = null;
}