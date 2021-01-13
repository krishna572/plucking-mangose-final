
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var ground;
var tree;
var stone;

var boyImg,boy;
var mango1,mango2;

var launcher;
function preload()
{
	boyImg = loadImage("images/boy.png");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(350,600,width,20);
	tree = new Tree(550,355,500,500);
	
  // add th p5.js from other folder
	// boy = createSprite(120,540);
	// boy.addImage(boyImg);
	// boy.scale = 0.1;
	stone = new Stone(100,100,20)

	launcher = new Launcher(stone.body,{x:70,y:486});

	mango1 = new Mango(500,300,30)
	mango2 = new Mango(600,200,30);
	mango3 = new Mango(500,250,30)
	mango4 = new Mango(500,280,30);
	mango5 = new Mango(400,270,30)
	mango6 = new Mango(420,310,30);
	mango7 = new Mango(500,170,30)
	//mango8 = new Mango(,30);
	// mango9 = new Mango(,30)
	// mango10 = new Mango(,30);

	Engine.run(engine);
  
}


function draw() {
  
  background("lightBlue");
  //Engine.update(engine);
  rectMode(CENTER);
  image(boyImg,120,520,150,150);
  
  ground.display();
tree.display();
  
  launcher.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
//   mango8.display();
detectCollision(stone,mango1)
detectCollision(stone,mango2)
detectCollision(stone,mango3)
detectCollision(stone,mango4)
detectCollision(stone,mango5)
detectCollision(stone,mango6)
detectCollision(stone,mango7)


}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	launcher.fly();
}

function detectCollision(stonebd,mangobd){
	mangoBodyPosition = mangobd.body.position;
	stoneBodyPosition = stonebd.body.position;

	

	// var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	var distance = dist(mangoBodyPosition.x,mangoBodyPosition.y,stoneBodyPosition.x,stoneBodyPosition.y)
	console.log("distance between mango and stone: "+distance);
	console.log(stonebd.r);
	console.log(mangobd.r);

		if (distance <= mangobd.r + stonebd.r) {
			Matter.Body.setStatic(mangobd.body,false);//this is not working
			console.log(mangobd)
			console.log("collision detected")
	}
}



