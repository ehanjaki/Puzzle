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

function posElemIsSetka(elem, cell) {
  pos = elem.position()
  center_pos = {
    left: pos.left + elem.width()/2,
    top: pos.top + elem.height()/2,
  }

  cell_pos = cell.data().cell_pos
  cell_size = {
    width: cell.width(),
    height: cell.height()
  }

  res = false

  if ((center_pos.left > cell_pos.left) && (center_pos.left < cell_pos.left + cell_size.width) &&
      (center_pos.top > cell_pos.top) && (center_pos.top < cell_pos.top + cell_size.height)) {
    res = true
  }

  return res;
};

function animateElemMove(elem, pos) {
  elem.animate({left: pos.left, top: pos.top}, 500, function(){});
}

function fullSetka(data) {
  var res = false

  for (i = 0; i < 9; i++) {
    elem = data.c[i]
    cell_act = elem.data().cell_act;
    if (cell_act == undefined) {
      res = true
      break;
    }
  }
  return res;
  }
