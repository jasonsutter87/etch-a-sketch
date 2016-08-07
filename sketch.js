var xPos = 500;
var yPos = 500;

var canvas,
	context;


function keyDown(e) {
 var key = e.which || e.keyCode;
    if (key === 97) { 
      console.log("a")
      var canvas = document.getElementById("myCanvas");
	  var ctx = canvas.getContext("2d");
	  ctx.beginPath();
	  ctx.moveTo(xPos,yPos);
      ctx.strokeStyle = 'red';
      xPos -= 10
	  ctx.lineTo(xPos,yPos);
	  ctx.stroke();
      console.log([xPos, yPos])
      return xPos 
	}

	if (key === 100) { 
      console.log("d")
      var canvas = document.getElementById("myCanvas");
	  var ctx = canvas.getContext("2d");
	  ctx.beginPath();
	  ctx.moveTo(xPos,yPos);
	  ctx.strokeStyle = 'black';
      xPos += 10
	  ctx.lineTo(xPos,yPos);
	  ctx.stroke();
      console.log([xPos, yPos])
      return xPos 
	}

	if (key === 119) { 
      console.log("w")
      var canvas = document.getElementById("myCanvas");
	  var ctx = canvas.getContext("2d");
	  ctx.beginPath();
	  ctx.moveTo(xPos,yPos);
	  ctx.strokeStyle = 'green';
      yPos -= 10
	  ctx.lineTo(xPos,yPos);
	  ctx.stroke();
      console.log([xPos, yPos])
      return yPos 

	}

	if (key === 115) { 
      console.log("s")
      var canvas = document.getElementById("myCanvas");
	  var ctx = canvas.getContext("2d");
	  ctx.beginPath();
	  ctx.moveTo(xPos,yPos);
	  ctx.strokeStyle = 'white';
      yPos += 10
	  ctx.lineTo(xPos,yPos);
	  ctx.stroke();
      console.log([xPos, yPos])
      return yPos 
	}

	if (key === 13) {
      alert("Where am I? " + [xPos, yPos]) 
	}

	if (key === 114) { 
	  console.log("RESET!")
      var canvas = document.getElementById("myCanvas");
	  var ctx = canvas.getContext("2d");
	  delete ctx;
	  context.clearRect(0, 0, 1000, 1000);
	  xPos = 500;
	  yPos = 500;
	}
}


function newLine(){
	canvas = document.getElementById('myCanvas');
	context = canvas.getContext('2d');
	context.lineWidth = 6;
	context.lineCap = "round";
}



function init(){
	canvas = document.getElementById('myCanvas');
	context = canvas.getContext('2d');
	context.strokeStyle = 'red';
	context.moveTo(xPos,yPos);
	context.lineWidth = 6;
	context.lineCap = "round";

	window.addEventListener("keypress", keyDown, false);
}

window.addEventListener('load', init, false);