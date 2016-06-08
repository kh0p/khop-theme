$(document).ready(function(){
  window.onload = function () {

  $('div.hide-on-load').animate({height: '0%'}, 1000, function() {
    $('div.hide-on-load').attr('class', 'null');
  }).delay(1000);
  $('.logo').hide().delay(1400).fadeIn(2400, function () {
    $('this').animate({padding: "25"}, 300);
  });

  $('canvas#spin').delay(1400).css("visibility", "visible");
  $('.logo').delay(1400).css("visibility", "visible");

  var viewport = window.matchMedia("(max-width: 768px)");

  if (viewport.matches) {
    $('canvas#spin').attr('height', '310px').attr('width', '310px');
    drawLogoCircle(true);
  } else {
    drawLogoCircle(false);
  }

  viewport.addListener(function(mq) {
    if(mq.matches) {
      $('canvas#spin').attr('height', '310px').attr('width', '310px');
      drawLogoCircle(true);
    } else {
      $('canvas#spin').attr('height', '620px').attr('width', '620px');
      drawLogoCircle(false);
    }
  });

  }
});
