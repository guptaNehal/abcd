class paper{
    constructor(x,y,radius){
        var options= {density:1.3,restitution:0.3,isStatic:false}
        this.body=Bodies.circle(x,y,radius/2,options)
        World.add(world, this.body)
        this.img=loadImage("paper.png")
         this.r=radius
    }
    display(){
        var pos=this.body.position
        push()
			translate(pos.x, pos.y);
	         imageMode(CENTER)
			fill(255)
	
			image(this.img,0,0,this.r,this.r);
			pop()

    }
}
