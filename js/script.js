$(function(){
    
    var navoff = $('.main_menu').offset().top;

    $(window).on('scroll',function(){
        var scrolling =  $(this).scrollTop();

        if(scrolling > navoff){
            $('.main_menu').addClass('menu_fix')
        }
        else{
            $('.main_menu').removeClass('menu_fix')
        }
    })



//banner js start


$('#banner_part').slick({
    dots: false,
    arrows:false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay:false,
  });

//team part  js start

//team js start





  //testimonial js start

  $('.test_slider').slick({
    dots: false,
    arrows:false,
    infinite: true,
    speed: 100,
    slidesToShow: 2,
    adaptiveHeight: true,
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });




  // counter js start

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

//clint js start

$('.clint_slider').slick({
    dots: false,
    arrows:false,
    infinite: true,
    speed: 100,
    slidesToShow: 5,
    adaptiveHeight: true,
    autoplay:true,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

 //team js start


 $('.team_slider').slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 100,
  slidesToShow: 4,
  adaptiveHeight: true,
  autoplay:true,
});



})