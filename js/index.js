// start jquery area
console.log("hello");
$(window).on("load",function(){
    $("#preloader").delay(100).fadeOut("slow");
})
$(document).ready(function(){
    // console.log("hello");
    // start nav bar 
    $(window).on("scroll",function(){
        console.log($(this).scrollTop());
        if($(this).scrollTop() > 400){
            $(".navbar").addClass("active");
        }else {
            $(".navbar").removeClass("active");
        }
    })
    // end nav bar
    // start banner carousel
    $("#banner_carousel").owlCarousel({
        items : 1,
        dots : false,
    });

    // end banner carousel

    // start gellary sction
    $(".gellary_img_container").snakeify();

    // end gellary section

    // start testmonial sectoin
    $("#testmonial_carousel").owlCarousel({
        items : 2,
        loop : true,
        dots : true,
        dotsContainer: '#testmonial_carousel_dots',
        responsive : {
            400 : {
                items : 1,
            },
            765:{
                items : 2 
            }
        }
    });

    $('.owl-dot').click(function () {
        $("#testmonial_carousel").trigger('to.owl.carousel', [$(this).index(), 300]);
      });
    // end testmonial section

    // start wow js
    new WOW().init();
    // end wow js
})
// end jquery area
