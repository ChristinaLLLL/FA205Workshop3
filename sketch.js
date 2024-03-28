let imgHarlow;

function preload() {
  imgHarlow = loadImage('images/Harlow.jpg');
}

function setup() {
  createCanvas(800, 800);
  background (220,20,33);

}

function draw() {
  filter (POSTERIZE);
  let x = random (imgHarlow.width);
  let y = random (imgHarlow.height);
  let c = imgHarlow.get(int(x), int(y));
  fill(c);
  noStroke(1);
  rect (x,y,20,40);
}
