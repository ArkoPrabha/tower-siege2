class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
          
      }
      this.visibility=255
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image= loadImage("block.png")
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position
      if(this.body.speed<3){
        
      imageMode(CENTER);
      //rect(pos.x,pos.y,this.width, this.height);
      image(this.image,pos.x,pos.y,30,40)
      }
      else{
        push()
        World.remove(world,this.body)
        this.visibility=this.visibility-4
        tint(255,this.visibility)
        image(this.image,pos.x,pos.y,30,40)
        pop()
      }
    }
}