$(document).ready(function(){

   // jQuery methods go here...


// events click through

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');

  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

   $(".menu-mobile").click(function(){
     $(".sub-menu").toggle();
   });

   $(".burger-button").click(function(){
       $(".nav-header-hidden").toggleClass("nav-header-hidden", false);
     $(".burger-button").toggleClass("active");
     $(".burger-menu").toggleClass("active");
     $('body').toggleClass("active-header");
   });


$(".burger-menu").click(function(){
    $(".nav-header-hidden").toggleClass("nav-header-hidden", false);
    $(".burger-button").toggleClass("active");
    $(".burger-menu").toggleClass("active");
    $('body').toggleClass("active-header");
   });

   $(".overlay-work").click(function(){
    $(".nav-header-hidden").removeClass("nav-header-hidden", false);
    $(".burger-button").removeClass("active");
    $(".burger-menu").removeClass("active");
    $('body').removeClass("active-header");
   });

});


// images


// $(".p0-button").hover(function(){
//   $(".filterable").addClass('hide');
//   $(".p0").removeClass('hide');
//   $(".filter-grid-button").removeClass('active');
//   $(".p0-button").addClass('active');

// });

  // $(".p1-button").hover(function(){
  //   $(".filterable").addClass('hide');
  //   $(".p1").removeClass('hide');
  //   $(".filter-grid-button").removeClass('active');
  //   $(".p1-button").addClass('active');

  // });

  // $(".p2-button").hover(function(){
  //    $(".filterable").addClass('hide');
  //   $(".p2").removeClass('hide');
  //   $(".filter-grid-button").removeClass('active');
  //   $(".p2-button").addClass('active');
  // });

  // $(".p3-button").hover(function(){
  //   $(".filterable").addClass('hide');
  //   $(".p3").removeClass('hide');
  //   $(".filter-grid-button").removeClass('active');
  //   $(".p3-button").addClass('active');


  // });



  // $(".p4-button").hover(function(){
  //   $(".filterable").addClass('hide');
  //   $(".p4").removeClass('hide');
  //   $(".filter-grid-button").removeClass('active');
  //   $(".p4-button").addClass('active');


  // });

  //  $(".p5-button").hover(function(){
  //    $(".filterable").addClass('hide');
  //    $(".p5").removeClass('hide');
  //    $(".filter-grid-button").removeClass('active');
  //    $(".p5-button").addClass('active');


  //  });



// Gallery pop up

$('.featured-card').not('.not-trigger').click(function() {
  var link = $(this).find('a').attr('href');
  if (link) {
    window.location = link;
  }
});


$(document).on('click','.featured-card.not-trigger',function(event){
  event.preventDefault();
  $('.overlay-work').addClass('activee');
  var datahtml = $(this).parents('.selectedthiss').find('.data-popup .event-popup.newsletter-popup').html();
  $(this).parents('body').find('.event-popup.newsletter-popup.appendhereee').html(datahtml).addClass('active');
});



$(document).on('click','.overlay-work.activee',function(){
$('.overlay-work').removeClass('activee');
$(this).parents('body').find('.event-popup.newsletter-popup.appendhereee').html('').removeClass('active');
$(this).parents('body').find('.newsletter-popup').css('display','none');
});

$('a.dark-btn.btn-border.JoinNow').click(function(event){
 event.preventDefault();
$(this).parents('body').find('.newsletter-popup').css('display','flex');
$('.overlay-work').addClass('activee'); 
});

$(document).on('click','a.readmoree',function(){
    var $this = $(this);
    var $parent = $this.parents('.newsletter-popup-content');
    $parent.toggleClass('showmore');
    if ($parent.hasClass('showmore')) {
        $this.html('Read Less');
    } else {
        $this.html('Read More');
    } 
});



lightGallery(document.getElementById('lightgallery'), {
  speed: 500,
  download: false
});

lightGallery(document.getElementById('lightgallery-mob'), {
  speed: 500,
  download: false
});
