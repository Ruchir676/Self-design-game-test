class Scm{
    constructor(x,y){
        this.star = Bodies.rectangle(x,y);
        this.image = loadImage("images/Scm.png");
        World.add(world, this.scm);
        
    }
    display(){
       imageMode(CENTER);
       image(this.image, this.scm.position.x,this.star.position.y,100,100);
    }
  }