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
    a.data({index: i});
    data.s.push(a);
  }

  var elems = $('.img'),
      parent = $('body'),
      button = $('button');

  button.addClass("off");

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
        animateElemMove(elem, active_cell.data().cell_pos)
        cell.addClass("placed")
      }
      else {
        animateElemMove(elem, elem.data().begin_pos)
      }

      if (fullSetka(data)){
        button.removeClass("off")
      }
      else {
        button.addClass("off")
      }
    });

    button.on('click', function(event) {
      right = true
      for (var i = 0; i < 9; i++) {
        elem = data.c[i]
        if (cellIsCorrect(elem, i)) {
          right = false;
          (function(elem) {
            setTimeout(function() {
              animateElemMove(elem, elem.data().begin_pos);
            }, 1500);
            cell.removeClass("placed");
          })(elem)
        }
      }
      if (right){
        button.off('click');
        $(".scene").fadeOut(2000);
      }
      else {
        buttonError(button);
        elemInactive(elems);
        setTimeout(function() {
          $(".message").fadeIn(1000);
        }, 2200);
      }
    });
  });
});
