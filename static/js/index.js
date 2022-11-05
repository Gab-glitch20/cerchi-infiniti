let w = 600;
let h = 600;

function setup() {
	createCanvas(w, h);
	background(200);
	frameRate(1000);
}

function draw() {
	let d = random(60, 90);
	let x = random(d / 2, w);
	let y = random(d / 2, h);

	let r = random(0, 256);
	let g = random(0, 256);
	let b = random(0, 256);
	let alpha = random(0, 256);

	fill(r, g, b, alpha);
	noStroke();
	circle(x, y, d);

	console.log(frameCount);
	if (frameCount === 1000) {
		background(200);
		frameCount=0
	}
}
