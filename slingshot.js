class Slingshot{
    constructor(body1,pointB){
        var slingoptions={
            bodyA:body1,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.pointB=pointB

        this.slingObj=Constraint.create(slingoptions)
        World.add(world,this.slingObj)
    }
    fly(){
        this.slingObj.bodyA=null
    }
    attach(body){
        this.slingObj.bodyA=body
    }

    display(){
        if(this.slingObj.bodyA){
         var pointA = this.slingObj.bodyA.position
        var pointB = this.pointB
        
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
     
        }
        
    }
}