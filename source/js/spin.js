var TAU = Math.PI * 2;

var drawCircle = function(context, x, y, radius, startAngle, endAngle, anticlockwise, lineColor, lineWidth) {
  var startAngle = startAngle * (Math.PI/180);
  var endAngle   = endAngle   * (Math.PI/180);
  var canvas = document.getElementById(context);
  var context = canvas.getContext( "2d" );
  context.beginPath();
  context.arc(x,y,radius,startAngle,endAngle, anticlockwise, lineColor);
  context.lineWidth   = lineWidth;
  context.strokeStyle = lineColor;
  context.stroke();
}

var drawLogoCircle = function (viewSmall, angle, moveStart) {
  var canvas = document.getElementById("spin");
  var context = canvas.getContext( "2d" );

  if (viewSmall == true) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for(i = 0; i < 3; i++) {
      drawCircle("spin", 155, 155, 100-i*8, 45-4*i+moveStart, angle-4*i, false, "#ff1e6d", 6);
    }
  } else {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for(i = 0; i < 3; i++) {
      drawCircle("spin", 310, 310, 280-i*16, 45-4*i+moveStart, angle-4*i, false, "#ff1e6d", 12);
    }
  }
}

function setDeceleratingTimeout( callback, factor, times )
{
  var internalCallback = function( t, counter )
  {
    return function()
    {
      if ( --t > 0 )
      {
        window.setTimeout( internalCallback, ++counter * factor );
        callback();
      }
    }
  }( times, 0 );

  window.setTimeout( internalCallback, factor );
}



var drawLogoCircleAnim = function (viewSmall, animate, time) {
  var canvas = document.getElementById("spin");
  var context = canvas.getContext( "2d" );

  if (animate == true) {
    var i = 0;
    var id = setInterval(function () {
      if (i==430)
        drawLogoCircle(viewSmall, 430, 45);
      else
        drawLogoCircle(viewSmall, i++, 45);
    }, time);
  } else {
    drawLogoCircle(viewSmall, 360, 45);
  }
}
