class Box{
    constructor(x,y,width,height){

    var options = {
        density:0.04,
        restitution:0.8,
        friction:1
    }
    this.width = width;
    this.height = height;
    this.body = Matter.Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(225);
        rect(0,0,this.width,this.height);
        pop();
    }
}