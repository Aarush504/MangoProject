class Boy {
    constructor(x,y,width,height)  {
      var options = {
          isStatic: true
          
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      //this.image = loadImage("sprites/boy.png");
     // this.image.scale = 0.2;
      
    }
    display(){
    // image(this.image,10,10);
     // this.image.scale= 0;
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };