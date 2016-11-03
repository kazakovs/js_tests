var c = document.getElementById("myCanvas");
var lineHOffset = 5;
var lineVOffset = 5;
var letterHOffset = 2;
var h = document.getElementById("canvasArea").offsetHeight;
var w = h/1.414;
c.height = h;
c.width = w;

function fillCanvasWithHLines(canvas, numberLines){
	ctx = canvas.getContext("2d");
	w=canvas.width;
	h=canvas.height;
	step = h/numberLines;
	ctx.beginPath();
	for (i = 1; i <= numberLines; i++) {
		ctx.moveTo(0, i*step-lineHOffset);
		ctx.lineTo(w, i*step-lineHOffset);
	}
	ctx.stroke();
}

function fillCanvasWithVLines(canvas, numberLines){
	ctx = canvas.getContext("2d");
	w=canvas.width;
	h=canvas.height;
	step = h/numberLines;
	ctx.beginPath();
	for (i = 1; i <= numberLines; i++) {
		ctx.moveTo(i*step-lineVOffset, 0);
		ctx.lineTo(i*step-lineVOffset, h);
	}
	ctx.stroke();
}

function fillCanvasWithObliqueLines(canvas) {
	ctx = canvas.getContext("2d");
	w=canvas.width;
	h=canvas.height;
	ratio = 0.128571429;
	ctx.beginPath();

	ctx.strokeStyle="#1010ff";

	for(i=1; i<1/ratio/Math.cos(65/180*3.14); i++){
			x = i*w*ratio;
			y = 0;
			console.log("x: " + x + " y: " +y);
			ctx.moveTo(x, y);
			x = 0;
			y = i*w*ratio/Math.cos(65/180*3.14);
			console.log("x: " + x + " y: " +y);
			ctx.lineTo(x, y)
	}
	ctx.stroke();

}

function fillCanvasWithText(canvas, numberLines, text, fontName){
	ctx = canvas.getContext("2d");
	w=canvas.width;
	h=canvas.height;
	step = h/numberLines;
	ctx.font=step+"px "+fontName;

	for (i = 1; i <= numberLines;) {
		words = text.split("\n");
		for(te in words){
			ctx.fillStyle = "#000000";
			ctx.fillText(words[te], 2, i*step-7);
			for (j=1; j<=w/10; j++) {
				ctx.fillStyle = "#f5f5f5";
				ctx.fillText(words[te], 2+ j*w/10, i*step - 7);
			}
			i++;
		}
	}
	ctx.fillStyle = "#000000";
	ctx.strokeStyle = "#000000"
}

function redraw(){
	ctx = c.getContext("2d");
	ctx.clearRect(0,0, c.width, c.height);
	text=document.getElementById('textArea').value;
	lines = document.getElementById("linesCount").value;
	if(!lines)lines=15;
	console.log('Text' + text);
	if(text){
		fillCanvasWithText(c, lines, text, 'Georgia');
	}
	if(document.getElementById('h_chkbox').checked){
		fillCanvasWithHLines(c, lines);
	}
	if(document.getElementById('v_chkbox').checked){
		fillCanvasWithVLines(c, lines);
	}
	if(document.getElementById('o_chkbox').checked){
		fillCanvasWithObliqueLines(c);
		ctx.strokeStyle="#f0f0ff";
	}


}
