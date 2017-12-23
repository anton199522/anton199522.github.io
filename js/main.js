
      $('.slider').slick({


  speed: 300,
  slidesToShow: 4,


    prevArrow:'<button type="button" class="slick-prev"><img src="img/prev.png"></button>',
  	nextArrow:'<button type="button" class="slick-next"><img src="img/next.png"></button>',
   
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
       
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
      });
      $('.slider-2').slick({


  autoplaySpeed: 3000,
  slidesToShow: 1,
dots:true,
autoplay:true,
arrow:false,

  
      });

  //Категории
  
$(".all").click(function(){
  $("[class=categ_1]").show();
  $("[class=categ_2]").show();
  $("[class=categ_3]").show();
  $("[class=categ_4]").show();
  $("[class=categ_5]").show();
  $("[class=categ_6]").show();
  $("[class=categ_7]").show();
  $("[class=categ_8]").show();
  $("[class=categ_9]").show();
});
$(".brand").click(function(){
  $("[class=categ_2]").hide();
  $("[class=categ_4]").hide();
  $("[class=categ_6]").hide();
});
$(".design").click(function(){
  $("[class=categ_1]").hide();
  $("[class=categ_2]").hide();
  $("[class=categ_3]").hide();
  $("[class=categ_4]").show();
  $("[class=categ_5]").show();
  $("[class=categ_6]").show();
  $("[class=categ_7]").show();
  $("[class=categ_8]").show();
  $("[class=categ_9]").show();
});
$(".develop").click(function(){
  $("[class=categ_5]").hide();
  $("[class=categ_9]").hide();
  $("[class=categ_2]").hide();
});
$(".strategy").click(function(){
  $("[class=categ_2]").hide();
  $("[class=categ_8]").hide();
  $("[class=categ_7]").hide();
});