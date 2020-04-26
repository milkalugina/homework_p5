function setup() {
  let cnv = createCanvas(350, 400, WEBGL);
  cnv.class('sketch_3');
  frameRate(12);
}

function draw() {
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  background(255);
  let colxMap = map(mouseX, 0, width, 255, 0);
  let dxMap = map(mouseX, 0, width, 20, 1000);

  // translate(width / 2, height / 2);
  for (let i = 0; i < 50; i++) {
    translate(0, 0, i * -0.25);
    createBubble(0, 0, 20 * i + dxMap, random(1, 4), random(0, colxMap))
  }
}

function createBubble(x, y, d, s, r) {
  strokeWeight(s);
  noFill();
  stroke(r, 0, 0);
  // сначала написать без рандома и постепенно накручивать
  ellipse(x + random(-1, 1), y + random(-1, 1), d);
}
