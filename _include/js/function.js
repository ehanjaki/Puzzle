function getRand() {
    var left = 555 + Math.floor(Math.random() * (240)),
        top = 30 + Math.floor(Math.random() * (240));
    return {left: left, top: top};
}

function newCoord(shiftX, shiftY) {
  new_coords = {
    left: event.pageX - shiftX,
    top: event.pageY - shiftY
  }
  return new_coords;
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

function mouseupInScene(new_coords, data){
  if((new_coords.left < 0 ) || (new_coords.left > data.scene.width() - 120) ||
  (new_coords.top < 0 ) || (new_coords.top > data.scene.height() - 120)){
    return true;
  }
  else {
    return false;
  }
}

function posReturn(elem){
  pos = elem.data().begin_pos;
  elem.animate({left: pos.left, top: pos.top}, 500, function() {
  });
  return pos;
}

function mouseupInSetka(setka, new_coords) {
  var pos = setka.position();
  if ((new_coords.left > pos.left + 360) || (new_coords.top > pos.top + 360)){
    return true;
  }
  else {
    return false;
  }
}

function returnElemIsSetka(elem){
  pos = elem.data().setka_pos;
  elem.animate({left: pos.left, top: pos.top}, 500, function() {
  });
  return pos;
}
