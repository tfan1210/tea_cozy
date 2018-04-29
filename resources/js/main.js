document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
  this.classList.toggle( "active" );
});

$(document).ready(function(){
  $('#nav-toggle').click(function(event){
    event.preventDefault();
    $('.mobile-list').slideToggle();
  });

  //Use slick to set up carousel
  debugger;
  var $galleryImg = $(".items img");
  var $closeBtn = $(".btn");
  var $carousel = $(".carousel");
  var $overlay = $(".overlay");

  $carousel.slick({
    centerMode: true,
    fade: true,
    arrows: false,
    dots: true,
    draggable: false
  });

  $galleryImg.on("click", function(slick) {
    var $imgId = $(this).attr("id");
    // Kick off fade-in, specifically to set display: block
    $overlay.fadeIn();
    // Goto clicked image slide and ensure we trigger dimension calculation
    $carousel.slick("slickGoTo", $imgId, true).slick("setPosition");
  });

  $closeBtn.on("click", function(event) {
    event.preventDefault();
    $overlay.fadeOut();
  });

  //mobile list

  $('.mobile-list a').click(function(event){
    event.preventDefault();
    var headerHeight = $('header').height();
    var id = $(this).attr('href');
    var originalScrollCoordinate = $(id).offset().top;
    var newScrollCoordinate = originalScrollCoordinate - headerHeight;
    $('html').animate({
      scrollTop : newScrollCoordinate
    });
  });
});
