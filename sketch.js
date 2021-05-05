const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var division1,division2,division3,division4,division5,division6,division7;
var engine, world,ground;

var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;

var p1;

function setup() {
  createCanvas(490,600);
 
  engine = Engine.create();
  world = engine.world;
createSprite(400, 200, 50, 50);

for(var k=0;k<=width;k=k+80){
  divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
}

for(var j=20 ; j<=width ; j=j+55){

  plinkos.push(new Plinko(j,100,10));
}

for(var i=-5 ; i<=width ; i=i+55){

  plinkos.push(new Plinko(i,170,10));
}

for(var o=20 ; o<=width ; o=o+55){

  plinkos.push(new Plinko(o,240,10));
}
/*
for(var b=20 ; b<=width ; b=b+55){

  plinkos.push(new Plinko(b,100,10));
}

for(var a=20 ; a<=width ; a=a+55){

  plinkos.push(new Plinko(a,100,10));
}
*/
ground= new Ground(240,595,480,10);


//p1 = new Particle(230,200,50);


}

function draw() {
  background(00,00,00);  
  Engine.update(engine);
  
  
  
  ground.display();

  for(var k=0; k < divisions.length; k=k+1){
    divisions[k].display();
    }

  for(var j=0 ; j<plinkos.length ; j=j+1){
    plinkos[j].display();
    }

    for(var o=20 ; o<plinkos.length ; o=o+1){

      plinkos[o].display();
    }


if(frameCount%20===0){

particles.push(new Particle(random(10,480),10,10));
}

console.log(frameCount);

//random(width/2-10,width/2+10)
for(var k = 0; k<particles.length; k++){
particles[k].display();
}
 

//p1.display();
console.log("kjhkjhkj");





console.log("gkgkljihkjh");
}

