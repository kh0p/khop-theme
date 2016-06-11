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
      drawCircle("spin", 105, 105, 100-i*8, 45+moveStart, angle-12*i, false, "#ff1e6d", 6);
    }
  } else {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for(i = 0; i < 3; i++) {
      drawCircle("spin", 320, 320, 280-i*16, 45+moveStart, angle-12*i, false, "#ff1e6d", 12);
    }
  }
}

var drawLogoCircleAnim = function (viewSmall, animate, time) {
  var canvas = document.getElementById("spin");
  var context = canvas.getContext( "2d" );

  if (animate == true) {
    var i = 0;
    var id = setInterval(function () {
      if (i==393)
        drawLogoCircle(viewSmall, 393, 45);
      else
        drawLogoCircle(viewSmall, i++, 45);
    }, time);
  } else {
    drawLogoCircle(viewSmall, 360, 45);
  }
}

var easeQuad = function (a, x, limit) {
  var y = a*(x*x-x*limit);
  var max = limit/2;
  if (y < max && y > 0)
    return y;
}
