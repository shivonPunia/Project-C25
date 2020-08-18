class Paper{
    constructor(x,y,radius){
    	var option={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.image=loadImage("paper.png")
        this.body=Bodies.circle(x,y,radius,option)
        World.add(world,this.body)
        this.r = radius
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y)
        ellipseMode(RADIUS)
        strokeWeight(3)
        fill("purple")
        image(this.image,0,0,this.r,this.r)
        pop();
    }
}