class Rubber{
    constructor(x,y,width,height,angle){
        var options={
            restitution:1,
            friction:1.5,
            deansity: 0.7
              
        }
           this.body=Bodies.rectangle(x,y,width,height,options);
           this.width=width;
           this.height=height;
           Matter.Body.setAngle(this.body,angle);
           World.add(world,this.body);
           
        }
    
    
    
    
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push ();
        translate (pos.x,pos.y)
        rotate (angle,)
        stroke ("red");
        strokeWeight(2);
        ellipse (0,0,this.width,this.height);
        pop ();
        
    }
    }