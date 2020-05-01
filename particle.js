function Particle(x,y,r) {

      this.hue = random(360)
      var options = {
        restitution : 0.8,
        friction: 0,
        density: 0.8

      }
      this.body = Bodies.circle(x,y,r, options);
      this.r = r; 
      World.add(world, this.body);
  }  

    Particle.prototype.offScreen = function(){
      var x = this.body.position.x;
      var y = this.body.position.y;
      return(x <- 50 || x > width + 50 || y > 50+ height)
    }

    Particle.prototype.show = function(){
      fill(this.hue, 255, 255);
      noStroke();
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y)
     ellipse(0, 0, this.r*2);
     pop();
    };