class Ball{
    constructor(x, y, width, height) {
        var options = {
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/downloadba-1.png");
        World.add(world, this.body);
        this.body.velocityY=this.body.velocityY+0.5
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 100, 100);
        pop();
      }
}