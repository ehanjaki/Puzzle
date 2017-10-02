$(document).ready(function() {

  var data = {};
  data.scene = $(".scene");
  data.box = data.scene.find(".box");
  data.setka = data.scene.find(".setka");
  data.c = []
  data.s = []

  for (var i = 0; i < 9; i++) {
    var b = $("<div>", {class: "img img" +i});
    pos = getRand();
    b.data({begin_pos: pos});
    b.css(pos);
    b.appendTo(data.box);
    data.c.push(b);
  }

  for (var i = 0; i < 9; i++) {
    var a = $("<div>").addClass("b b" +i).appendTo(data.setka);
    pos = a.position();
    a.data({cell_pos: pos});
    data.s.push(a);
  }

  var elems = $('.img'),
      parent = $('body'),
      button = $('button');


  elems.on('mousedown', function(event) {
    var elem = $(this);
    cell = elem.data().cell_act;
    if (typeof cell != "undefined") {
      cell.removeClass("placed");
    }
    pos = elem.position();
    var shiftX = event.pageX - pos.left,
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

      active_cell = false
      for (var i = 0; i < 9; i++) {
        cell = data.s[i]
        if (posElemIsSetka(elem, cell)) {
          active_cell = cell;
          break;
        }
      }
      if ((active_cell) && (!(active_cell.hasClass("placed")))) {
        elem.data({cell_act: cell});
        cell.data({index: i})
        animateElemMove(elem, active_cell.data().cell_pos)
        cell.addClass("placed")
      }
      else {
        animateElemMove(elem, elem.data().begin_pos)
      }

      pos = fullSetka(data);
      if (fullSetka(data)){
        button.addClass("off")
      }
      else {
        button.removeClass("off")
      }
    });

    button.on('click', function(event) {
      for (var i = 0; i < 9; i++) {
        elem = data.c[i]
        cell = elem.data().cell_act
        cell_index = cell.data().index
        if (i == cell_index){
          true;
        }
        else {
          animateElemMove(elem, elem.data().begin_pos)
          cell.removeClass("placed")
        }
      }
      button.off('click')
    });
  });
});
