$(document).ready(function(){
  window.onload = function () {
    $('button').click(function() {
      $(this).toggleClass("is-active");
    });
  }
});
