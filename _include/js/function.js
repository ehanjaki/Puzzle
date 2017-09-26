function getRand() {
    var left = 555 + Math.floor(Math.random() * (240)),
        top = 30 + Math.floor(Math.random() * (240));
    return {left: left, top: top};
}

function getCoords(elem) {
  var pos = elem.position();
  return {
    top: pos.top + pageYOffset,
    left: pos.left + pageXOffset
  };
}

function positionElem(new_coords, data) {
  if(new_coords.left < 0){
    new_coords.left = 0;
  }
  else if(new_coords.left > data.scene.width() - 120){
    new_coords.left = data.scene.width() - 120;
  }
  if(new_coords.top < 0){
    new_coords.top = 0;
  }
  else if(new_coords.top > data.scene.height() - 120){
    new_coords.top = data.scene.height() - 120;
  }
  return new_coords;
}

function posElem(elem, new_coords, data){
  function posReturn(elem){
    pos = elem.data().begin_pos;
    elem.animate({left: pos.left, top: pos.top}, 500, function() {
    });
    return pos;
  }
  if(new_coords.left < 0 ){
    posReturn(elem);
  }
  else if(new_coords.left > data.scene.width() - 120){
    posReturn(elem);
  }
  if(new_coords.top < 0 ){
     posReturn(elem);
  }
  else if(new_coords.top > data.scene.height() - 120){
     posReturn(elem);
  }
  return new_coords;
}
