function Plinko(x,y,r) {
     var options = {
      isStatic: true
     }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r; 
      World.add(world, this.body);
}  
    Plinko.prototype.show = function(){
      fill(127);
      noStroke();
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y)
     ellipse(0, 0, this.r*2);
     pop();
    };