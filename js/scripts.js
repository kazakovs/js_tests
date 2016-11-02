var c = document.getElementById("myCanvas");

function fillCanvasWithHLines(canvas, numberLines){
	ctx = canvas.getContext("2d");
	w=canvas.width;
	h=canvas.height;
	step = h/numberLines;
	ctx.beginPath();
	for (i = 1; i <= numberLines; i++) {
		ctx.moveTo(0, i*step-5);
		ctx.lineTo(w, i*step-5);
	}
	ctx.stroke();
}

function fillCanvasWithVLines(canvas, numberLines){
	ctx = canvas.getContext("2d");
	w=canvas.width;
	h=canvas.height;
	step = w/numberLines;
	ctx.beginPath();
	for (i = 1; i <= numberLines; i++) {
		ctx.moveTo(i*step-5, 0);
		ctx.lineTo(i*step-5, h);
	}
	ctx.stroke();
}

function fillCanvasWithText(canvas, numberLines, text, fontName){
	ctx = canvas.getContext("2d");
	w=canvas.width;
	h=canvas.height;
	step = h/numberLines;
	ctx.font=step+"px "+fontName;
	for (i = 1; i <= numberLines; i++) {
		ctx.fillText(text, 0, i*step-5);
	};
}

function redraw(){
	ctx = c.getContext("2d");
	ctx.clearRect(0,0, c.width, c.height);
	if(document.getElementById('h_chkbox').checked){
		fillCanvasWithHLines(c, 10);
	}
	if(document.getElementById('v_chkbox').checked){
		fillCanvasWithVLines(c, 10);
	}
	text=document.getElementById('textArea').value;
	console.log('Text' + text);
	if(text){
		fillCanvasWithText(c, 10, text, 'Georgia');
	}
}

