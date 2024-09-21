var x = 0;
var y = 60;
var boxSize = 20;

function setup() {
  createCanvas(480, 480);
  strokeWeight(2);
}

function draw() {
  background(175, 231, 250); // blue background
  draw8By8BoundingBox(x, y, boxSize); // grid to help layout pic
  noStroke(); // Turn off outline

  // Orange flower outline
  fill(232, 145, 25); // Set to orange
  rect(x + 2 * boxSize, y + 0 * boxSize, boxSize, boxSize);
  rect(x + 3 * boxSize, y + 0 * boxSize, boxSize, boxSize);
  rect(x + 4 * boxSize, y + 0 * boxSize, boxSize, boxSize);
  rect(x + 5 * boxSize, y + 0 * boxSize, boxSize, boxSize);

  rect(x + 1 * boxSize, y + 1 * boxSize, boxSize, boxSize);
  rect(x + 6 * boxSize, y + 1 * boxSize, boxSize, boxSize);

  rect(x + 0 * boxSize, y + 2 * boxSize, boxSize, boxSize);
  rect(x + 7 * boxSize, y + 2 * boxSize, boxSize, boxSize);

  rect(x + 1 * boxSize, y + 3 * boxSize, boxSize, boxSize);
  rect(x + 6 * boxSize, y + 3 * boxSize, boxSize, boxSize);

  rect(x + 2 * boxSize, y + 4 * boxSize, boxSize, boxSize);
  rect(x + 3 * boxSize, y + 4 * boxSize, boxSize, boxSize);
  rect(x + 4 * boxSize, y + 4 * boxSize, boxSize, boxSize);
  rect(x + 5 * boxSize, y + 4 * boxSize, boxSize, boxSize);

  // Yellow flower inside
  fill(232, 228, 24); // Set to yellow
  rect(x + 2 * boxSize, y + 1 * boxSize, boxSize, boxSize);
  rect(x + 3 * boxSize, y + 1 * boxSize, boxSize, boxSize);
  rect(x + 4 * boxSize, y + 1 * boxSize, boxSize, boxSize);
  rect(x + 5 * boxSize, y + 1 * boxSize, boxSize, boxSize);

  rect(x + 1 * boxSize, y + 2 * boxSize, boxSize, boxSize);
  rect(x + 6 * boxSize, y + 2 * boxSize, boxSize, boxSize);

  rect(x + 2 * boxSize, y + 3 * boxSize, boxSize, boxSize);
  rect(x + 3 * boxSize, y + 3 * boxSize, boxSize, boxSize);
  rect(x + 4 * boxSize, y + 3 * boxSize, boxSize, boxSize);
  rect(x + 5 * boxSize, y + 3 * boxSize, boxSize, boxSize);

  // FLower eyes
  fill(255); // Set to white
  rect(x + 3 * boxSize, y + 2 * boxSize, boxSize, boxSize);
  rect(x + 5 * boxSize, y + 2 * boxSize, boxSize, boxSize);
  fill(0); // Set to black
  rect(x + 2 * boxSize, y + 2 * boxSize, boxSize, boxSize);
  rect(x + 4 * boxSize, y + 2 * boxSize, boxSize, boxSize);

  // Flower stem
  fill(18, 158, 6);
  rect(x + 2 * boxSize, y + 5 * boxSize, boxSize, boxSize);
  rect(x + 4 * boxSize, y + 5 * boxSize, boxSize, boxSize);
  rect(x + 6 * boxSize, y + 5 * boxSize, boxSize, boxSize);

  rect(x + 3 * boxSize, y + 6 * boxSize, boxSize, boxSize);
  rect(x + 4 * boxSize, y + 6 * boxSize, boxSize, boxSize);
  rect(x + 5 * boxSize, y + 6 * boxSize, boxSize, boxSize);

  rect(x + 4 * boxSize, y + 7 * boxSize, boxSize, boxSize);

  // x += 1; what does this do?
}
