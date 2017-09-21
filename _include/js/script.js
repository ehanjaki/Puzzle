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
    b.css(pos);
    b.appendTo(data.box);
    data.c.push(b);
  }

  var s = []
  for (var i = 0; i < 9; i++) {
    var a = $("<div>").addClass("b b" +i).appendTo(data.setka);
    data.s.push(a);
  }

  var elems = $('.img');
  var parent = $('.scene');

  function getCoords(elem) {
    var pos = elem.get(0).getBoundingClientRect();
    return {
      top: pos.top + pageYOffset,
      left: pos.left + pageXOffset
    };
  }

  elems.on('mousedown', function(event) {

    var coords = getCoords(elems);
    var shiftX = event.pageX - coords.left;
    var shiftY = event.pageY - coords.top;

    elems.css.position = 'absolute';
    moveAt(event);

    function moveAt(event) {
      elems.css.left = event.pageX - shiftX + 'px';
      elems.css.top = event.pageY - shiftY + 'px';
    }

    parent.on('mousemove', function(event) {
      moveAt(event);
    });

    elems.on('mouseup', function() {
      elems.off("mouseup")
      parent.off("mousemove")
    });
  });

  elems.on('dragstart', function() {
    return false;
  });
  console.log(elems);
});
