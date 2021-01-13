class Tree{
    constructor(x,y,width,height){
        var option = {
            isStatic:true

        }
        this.body = Bodies.rectangle(x,y,width,height,option)
        //World.add(world,this.body);
        this.image = loadImage("images/tree.png");
        this.width = width;
        this.x = x;
        this.y = y;
        this.height = height;
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
        
    }
}