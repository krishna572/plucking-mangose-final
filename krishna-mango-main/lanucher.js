class Launcher{
    constructor(bodyA,point){
        var option = {
            bodyA:bodyA,
            pointB:point,
            stiffness:0.04,
            length:10
        }
        this.Launcher = Matter.Constraint.create(option);
        World.add(world,this.Launcher);
        this.pointB = point;
        this.bodyA = bodyA;

    }
    fly(){
        this.Launcher.bodyA = null;
        console.log("fly");
    }
    display(){
        if(this.Launcher.bodyA){
        var pointA = this.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        
    }
}


//C:\Users\Krishna\Desktop\projects\plucking mangos\images\boy.png