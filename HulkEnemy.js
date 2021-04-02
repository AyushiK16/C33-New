class Hulk extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/hulk.png");
    this.Visiblity = 255;
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 3){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     //score = score + 1;
     if(score === 0){
      score = 1
      shotsTaken = 1
    }
    else if(score ===1 && shotsTaken === 2 ){
      score = 2;
    }
     pop();

   }
  }
  score(){
    if(this.visibility < 0 && this.visibility>-1005){
      console.log('not visible')
      if(score === 0){
        score = 1
      }
      else if(score ===1 ){
        score = 2;
      }
      }
  }
};