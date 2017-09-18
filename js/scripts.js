$(function() {
  $("h1").click(function(event) {
    event.preventDefault();
    var ices = ['choc','vanilla','butterscotch'];
    ices.forEach(function(ice) {
      $("#flavour").append("<li>"+ice+"</li>");
        
      $("ul").show();

  });




  });




});
