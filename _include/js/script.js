$(document).ready(function() {
  // При загрузке страницы выполнится весь написанный здесь код
  // alert("Привет!!!");

  var data = {};
  data.scene = $(".scene");
  data.box = data.scene.find(".box");
  data.setka = data.scene.find(".setka");

var c = []
for (var i = 0; i < 9; i++) {
  var b = $("<div>", {class: "img img" +i});
  b.css({left: 521, top: 80});
  b.appendTo(data.box);
  c.push(b);
}

var s = []
for (var i = 0; i < 9; i++) {
  var a = $("<div>").addClass("b b" +i).appendTo(data.setka);
  s.push(a);
}
});
