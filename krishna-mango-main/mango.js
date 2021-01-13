class Mango{
    constructor(x,y,r){
        this.image = loadImage("images/mango.png");
        var option = {
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.r = r;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,r,option);
        World.add(world,this.body);
      
    }
    display(){
        var mangopos = this.body.position
        push()
        //translate(mangopos.x,mangopos.y)
       // rotate(this.body.angle)
        imageMode(CENTER);
        image(this.image,mangopos.x,mangopos.y,this.r,this.r);
        pop()
    }
}