$(document).ready(function(){
  window.onload = function () {
    $('button').click(function() {
      $(this).toggleClass("is-active");
    });
    var mySVG = $('#dragon-svg').drawsvg();
    mySVG.drawsvg('animate');
  }
});
