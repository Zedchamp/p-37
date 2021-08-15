const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine, canvas;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;
var mConstraint;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  roofobject = new roof(400, 250, 230, 20);

  pendulum1 = new bob(340, 450, 40);
  pendulum2 = new bob(400, 450, 40);
  pendulum3 = new bob(460, 450, 40);
  pendulum4 = new bob(520, 450, 40);
  pendulum5 = new bob(580, 450, 40);

  sling1 = new rope(pendulum1.body, roofobject.body, -80, 0);
  sling2 = new rope(pendulum2.body, roofobject.body, -40, 0);
  sling3 = new rope(pendulum3.body, roofobject.body, 0, 0);
  sling4 = new rope(pendulum4.body, roofobject.body, 40, 0);
  sling5 = new rope(pendulum5.body, roofobject.body, 80, 0);
}

function draw() {
  background(255);
  Engine.update(engine);
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  roofobject.display();
}

function mouseDragged() {
  Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(pendulum1.body, pendulum1.body.position, { x: -50, y: -45 });
  }
}
