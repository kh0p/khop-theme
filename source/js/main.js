$(document).ready(function(){
  window.onload = function () {

  $('div.hide-on-load').animate({height: '0%'}, 1000, function() {
    $('div.hide-on-load').attr('class', 'null');
    $('.logo').delay(2000).css("visibility", "visible");
  }).delay(2000);
  $('.logo').hide().delay(1400).fadeIn(2400, function () {
    $('this').animate({padding: "25"}, 300);
  });
  $('#spin').hide().delay(1400).fadeIn(2400);
  $('#spin').hide().delay(1400).fadeIn(2400, function () {
    if (viewport.matches) {
      $('canvas#spin').attr('height', '310px').attr('width', '310px');
      drawLogoCircleAnim(true, true, 30);
    } else {
      drawLogoCircleAnim(false, true, 30);
    }
  });

  var viewport = window.matchMedia("(max-width: 768px)");

  // viewSmall, animate, interval



  viewport.addListener(function(mq) {
    if(mq.matches) {
      $('canvas#spin').attr('height', '310px').attr('width', '310px');
      var canvas = document.getElementById("spin");
      var context = canvas.getContext( "2d" );
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawLogoCircleAnim(true, false, 0);
    } else {
      $('canvas#spin').attr('height', '620px').attr('width', '620px');
      var canvas = document.getElementById("spin");
      var context = canvas.getContext( "2d" );
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawLogoCircleAnim(false, false, 0);
    }
  });

  }
});
