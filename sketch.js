function setup() {
  // Create a full-page canvas
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1'); // Behind other elements if needed

  background(0); // Black background
  strokeWeight(10);
  colorMode(HSB);
}

function draw() {
  // Only draw if mouse is inside the canvas
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    let lineHue = mouseX - mouseY;
    stroke((lineHue + 360) % 360, 90, 90);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}
