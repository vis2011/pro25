class paper{
  constructor(x,y){
   var options={
       isStatic:false,
       restitution:0.3,
       friction:0,
       density:1.2
   }

   this.body=Bodies.circle(x,y,width,height,options);
   this.image=loadImage("paper.png");
   this.x=x;
   this.y=y;
   this.width=width;
   this.height=height;
   this.image=loadImage("paper.png")
   World.add(world,this.body);
  }

  display(){
    push();
    imageMode(CENTER);
    image(this.image,x,y,width,height);
    pop();
  }
}