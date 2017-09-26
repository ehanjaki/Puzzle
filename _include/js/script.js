$(document).ready(function() {

  var data = {};
  data.scene = $(".scene");
  data.box = data.scene.find(".box");
  data.setka = data.scene.find(".setka");
  data.c = []
  data.s = []

  var c = []
  for (var i = 0; i < 9; i++) {
    var b = $("<div>", {class: "img img" +i});
    pos = getRand();
    b.data({begin_pos: pos});
    b.css(pos);
    b.appendTo(data.box);
    data.c.push(b);
  }

  var s = []
  for (var i = 0; i < 9; i++) {
    var a = $("<div>").addClass("b b" +i).appendTo(data.setka);
    data.s.push(a);
  }

  var elems = $('.img'),
      parent = $('body');

  elems.on('mousedown', function(event) {
    var elem = $(this)
        pos = elem.position();
        shiftX = event.pageX - pos.left,
        shiftY = event.pageY - pos.top;

    parent.on('mousemove', function(event) {
      pos = newCoord(shiftX, shiftY);
      new_coords = positionElem(new_coords, data);
      elem.css(new_coords);
    });

    parent.on('mouseup', function(event) {
      parent.off("mouseup")
      parent.off("mousemove")
      pos = newCoord(shiftX, shiftY);
      if (mouseupInScene(new_coords, data)){
        pos = posReturn(elem);
      }
    });
  });
});
