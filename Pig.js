class Pig {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
        
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.r= width;
    this.height = height;
    World.add(world, this.body);
    this.image = loadImage("sprites/mango.png");
    //this.image.scale = 0.2;
    
  }
  display(){
    var angle = this.body.angle;
    //this.image.scale(0.1);
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();
  }
};
