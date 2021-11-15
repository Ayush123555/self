class Basket{
  constructor(x,y,width,height){
 var options={
     isStatic:true,
     friction:1
 }
 this.body = Bodies.rectangle(this.x, this.y, width, height, options);
 this.width = width;
 this.height = height;
 this.image = loadImage("images/basket1.png");
 World.add(world, this.body);
  }

display(){
    imageMode(CENTER);
    image(this.image, 0, 0, 100, 100);
   

}

}