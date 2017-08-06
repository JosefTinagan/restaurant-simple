$(document).ready(function(){
  var reference = $("#content");

  $(reference).before("<a href='#' id='home'> Home </a>");
  $(reference).before("<a href='#' id='menu'> Menu </a>");
  $(reference).before("<a href='#' id='contact'> Contact </a>");

  
  $("#home").click(function(){
  	$.fn.removeContent();
    $(reference).append("<h1> My Restaurant</h1>");
    $(reference).append("<img src='https://media-cdn.tripadvisor.com/media/photo-s/03/a9/c9/f6/stock-restaurant.jpg' alt='restaurant photo' >");
    $(reference).append("<p>My Restaurant is located in my street in my country.</p>")
  });

  $("#menu").click(function(){
  	$.fn.removeContent();
    $(reference).append("<h1> My Restaurant's Menu");
    $(reference).append("<img src='https://previews.123rf.com/images/lmv/lmv1208/lmv120800025/14957854-Restaurant-menu-design-Stock-Vector-food.jpg' alt='restaurant menu photo' ");
    $(reference).append("<p> The menu includes high class dishes and drinks.</p>")
  });

  $("#contact").click(function(){
  	$.fn.removeContent();
  	$(reference).append("<p> Contact Us : 555-55-555 </p>")
  	$(reference).append("<a href='#'> Facebook </a>")
  });

  $.fn.removeContent = function(){
    $(reference).html('');
  };
});