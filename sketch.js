//Create variables here
var dog, happyDog, database, foods, foodStock;

function preload()
{
  //load images here
  dog = loadImage(images/"dogimg.png")
  happyDog = loadImage(images/"dogimg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,10,20)
  dog.addImage(images, dog)

  foodStock = database.ref("food");
  foods.on("value", readStock)
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_Arrow)){
writeStocks(foods);
dog.addImage(images,"happyDog")
}
  drawSprites();
  //add styles here
  textStroke(3)
  Text("note: Press UP_Arrow to feed drago milk", 100,30,20,10)

function readStock(data){
  food = data.val();
}

function writeStock(x){

  database.ref('/').update({
    food:x
  })
}
}



