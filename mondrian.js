function setup() {
  createCanvas(400, 400);
  strokeCap(SQUARE);
  noStroke();
}

function draw() {
  background(240);
  noStroke();
  // Red Square
  fill(212, 0, 0);
  rect(365, 0, 35, 40);
  
  //Red Square 2
  fill(212, 0, 0)
  rect(190, 260, 90, 400)

  // Blue Square
  fill(0, 81, 220);
  rect(115, 80, 205, 80);

  // Yellow Square
  fill(255, 209, 53);
  rect(330, 170, 70, 70);
  
  //Yellow Square 2
  fill(255, 209, 53)
  rect(0,0, 85, 114)

  // Left Line
  stroke(0);
  strokeWeight(30);
  line(100, 0, 100, 400);
  
  // Right Line
  stroke(0);
  strokeWeight(10);
  line(325, 0, 325, 240);

  // Bottom Line
  stroke(0);
  strokeWeight(20);
  line(115, 250, 400, 250);

  // Right Vertical Line
  stroke(0);
  strokeWeight(10);
  line(365, 40, 365, 0);

  // Low Right Line
  stroke(0);
  strokeWeight(10);
  line(330, 45, 400, 45);

  // Top Left Line
  stroke(0);
  strokeWeight(13);
  line(0, 120, 85, 120);
  
  // Top Middle Line
  stroke(0);
  strokeWeight(10);
  line(115, 75, 320, 75);
  
  // Mid Middle Line
  stroke(0);
  strokeWeight(10);
  line(115, 165, 400, 165);
  
  //Bottom Left Line
  stroke(0);
  strokeWeight(15);
  line(183, 260, 183, 400);
  
  //Bottom Left Line
  stroke(0);
  strokeWeight(20);
  line(290, 260, 290, 400);

}
