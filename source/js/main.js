$(document).ready(function(){
  window.onload = function () {
    $('button').click(function() {
      $(this).toggleClass('is-active');
      $('#navigation').animate({visibility: visible}, 300).fadeIn(500);
    });
    var mySVG = $('#dragon-svg').drawsvg();
    mySVG.drawsvg('animate');
  }
});
