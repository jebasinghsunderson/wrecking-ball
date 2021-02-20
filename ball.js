class Ball{
    constructor(x,y,r){
        var options={
          isStatic:false,
          density:1.0,
          frictionAir:0.005
        }
        this.body=Bodies.circle(x,y,r,options);
        this.x=x;
        this.y=y;
        this.r=r;
       // this.angle=angle;
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position
    var angle = this.body.angle;
    push()
    translate(pos.x,pos.y)
    rotate(angle);
    fill("black")
    ellipse(0,0,this.r,this.r)
    pop();
}
};