function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(220);
  //fills the next line
  fill(mouseX%255,mouseY%255,10)
  ellipse(mouseX,mouseY,100,100);
}
