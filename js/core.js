$(document).ready(function() {
	// ====== inputmask ======

	$('.rev_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    responsive: [
      {
        breakpoint: 880,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
    ]
  });

  $('.slider_nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider_main',
    dots: false,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 2
        }
      },
    ]
  });
  
  $('.app_cards').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrow: false,
    responsive: [
     {
        breakpoint: 1200,
        settings: {
          dots: true,
          infinite: false,
          slidesToShow: 4,
          arrows: true,
        }
      },
      {
        breakpoint: 990,
        settings: {
          dots: true,
          slidesToShow: 3,
          arrows: true,
        }
      },
      {
        breakpoint: 780,
        settings: {
          dots: true,
          slidesToShow: 2,
        }
      },
    ]
  });
    
  $('.tab').on('click', function(){
    if(!$(this).hasClass('active')){
      const tabParent = $(this).closest('.tabs')
      const tabNum = $(this).index()
      tabParent.find('.active').removeClass('active')
      $(this).addClass('active')
      tabParent.find('.body').eq(tabNum).addClass('active')
    }
  })

  let smHeight = $('.advan_txt').height()
  $('.advan_card').hover(
    function() {
     if($(this).find('.advan_txt').length > 0){
        $(this).addClass("active");
        const bigHeight = $(this).find('.advan_txt-in').outerHeight()
        $(this).find('.advan_txt').css('height', bigHeight)
     }
    }, function() {
      if($(this).find('.advan_txt').length > 0){
        $(this).removeClass("active");
        $(this).find('.advan_txt').css('height', smHeight)
      }
    }
  );

  $('.what_img').hover(
    function() {
      if(!$(this).hasClass('active')){
        $('.what_img.active').removeClass('active')
        $(this).addClass("active")
        const tabNum = +$(this).attr('data-tab') - 1
        $('.what_body-wrap .what_body.active').removeClass('active')
        $('.what_body-wrap .what_body').eq(tabNum).addClass('active')
        setTimeout(()=>{
          $('.what_body-wrap .what_body .what_body-in.active').removeClass("active")
          $('.what_body-wrap .what_body.active .what_body-in').addClass("active")
        },10)
      }
    }
  );

  $('.res_img').hover(
    function() {
      if(!$(this).hasClass('active')){
        $('.res_img.active').removeClass('active')
        $(this).addClass("active")
      }
    }
  );

  $(".main_card-btn").on('click', function(){
    const card = $(this).closest('.main_card')
    card.toggleClass('active')
    card.find('.main_list').slideToggle(300)
  })

  $('.mob_btn').on('click', function(){
    $('.mob').slideToggle(300)
  })

  $('.selected').on('click', function(){
    const thisParent = $(this).closest('.input__option')
    thisParent.find('.selects').slideToggle(300)
    thisParent.toggleClass('active')
  })

  $('.select').on('click', function(){
    const thisParent = $(this).closest('.input__option')
    thisParent.find('.selected').text($(this).text())
    thisParent.find('.selects').slideUp(300)
    thisParent.removeClass('active')
  })

  $(window).on('load resize', function(){
    if($(window).width() < 768){
      if(!$('.advan_cards').hasClass('advan_slder')){
        $('.advan_cards').addClass('advan_slder')
        $('.advan_cards').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          responsive: [
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 2
              }
            },
          ]
        });
      } 
    } else{
      $('.advan_cards.slick-initialized').slick('unslick')
      $('.advan_cards').removeClass('advan_slder')
    }
  })

})