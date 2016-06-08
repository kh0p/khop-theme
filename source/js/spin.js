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

var drawLogoCircle = function (viewSmall) {
  if (viewSmall == true) {
    var canvas = document.getElementById("spin");
    var context = canvas.getContext( "2d" );
    context.clearRect(0, 0, canvas.width, canvas.height);
    for(i = 0; i < 3; i++) {
      drawCircle("spin", 105, 105, 100-i*8, 0, 350-12*i, false, "#ff1e6d", 6);
    }
  } else {
    var canvas = document.getElementById("spin");
    var context = canvas.getContext( "2d" );
    context.clearRect(0, 0, canvas.width, canvas.height);
    for(i = 0; i < 3; i++) {
      drawCircle("spin", 320, 320, 280-i*16, 0, 350-12*i, false, "#ff1e6d", 12);
    }
  }
}
