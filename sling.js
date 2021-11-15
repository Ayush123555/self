class Slingshot{
  constructor(bodyA,pointB){
    var options={
        bodyA: bodyA,
        pointB:pointB,
        density:1,
        restitution:0.5,
        length:13
    }
    this.pointB=pointB
    this.sling=Constraint.create(options);
    World.add(world,this.sling);
  }

fly(){
    this.sling.bodyA=null;
}

attach(body){
   this.sling.bodyA=body;
}
  

 display(){
    if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
        //line(pointA.x,pointA.y,pointB.x,pointB.y);
        push();
         if(pointA.x < 100) {
            
              fill("black")
              strokeWeight(7);
              
              line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
              
             
          }
          else{

              strokeWeight(3);
              line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                          
          }
         pop();
       
      
   }

  }

}