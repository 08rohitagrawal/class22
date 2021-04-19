function isTouching(fr){
    var w=mr.width/2 + fr.width/2
    var h=mr.height/2 + fr.height/2
   
    if(mr.x-fr.x<w&&fr.x-mr.x<w&&mr.y-fr.y<h&&fr.y-mr.y<h){
      mr.shapeColor="black";
      fr.shapeColor="black";
      fr = 12
    }
    else{
     fr.shapeColor= "blue";
     mr.shapeColor= "red";
    }
   
  }
  