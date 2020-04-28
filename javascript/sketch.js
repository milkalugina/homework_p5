const s = p => {
  let dotX = 0
  let dotY = 0

  let col = {
    r: 0,
    g: 0,
    b: 0
  }

  p.setup = function() {

    let cnv = p.createCanvas(350, 400);
    cnv.class('sketch_1');
    p.background(255);
  };

  p.draw = function() {
    dotX= random(0, width);
    dotY = random(0, height);
    col.r = random(0, 255);
    col.g = random(0, 255);
    col.b = random(0, 255);
  };

  p.draw = function() {
    dotX= p.random(0, p.width);
    dotY = p.random(0, p.height);
    col.r = p.random(0, 255);
    col.g = p.random(0, 255);
    col.b = p.random(0, 255);

    if (p.dotX > 300) {
      col.g =0
    }

    p.noStroke();
    p.fill(col.r, col.g, col.b, 150);
    p.ellipse(dotX, dotY, 20, 20);
  }
  p.mousePressed = function() {
    p.background(255)
  }
}
new p5(s);

// const canvas_container2 = sketch_2 => {
//   let box = {
//     x: 0,
//     y: 0
//   }
//
//   let extraCanvas;
//
//   sketch_2.setup = function() {
//     let cnv = sketch_2.createCanvas(350, 400);
//     cnv.class('sketch_2');
//     sketch_2.background(255);
//     let extraCanvas = sketch_2.createGraphics(350, 400);
//   }
//
//   sketch_2.draw = function() {
//     if (sketch_2.mouseIsPressed) {
//       extraCanvas.fill(255, 0, 0);
//       extraCanvas.ellipse(mouseX, mouseY, 50);
//     }
//     image(extraCanvas, 0, 0);
//   }
//
// }
//
// new p5(canvas_container2);
