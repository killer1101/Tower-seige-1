class blocks{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.9,
            friction :0.04,
            isStatic: false
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        stroke("white")
        strokeWeight(2)
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
}