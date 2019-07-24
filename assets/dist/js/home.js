$(document).ready(function(){
    //play video
    function addVideo(el){ 
        var videoHeight = $('.video').height();
        var video = '<iframe width="100%" height="'+ videoHeight +'" src="' + $(el).attr('data-video') + '?autoplay=1"> </iframe>';
        $(el).append(video);
    }
    
    $('.play-video').on('click', function(){
        addVideo(this);
        $(this).addClass('active');
    })
    //end video

    //slider
    var swiper = new Swiper('.instagram-slider .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 0,
        loop: true,
        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        },

        breakpoints: {
            768: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            375: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        }
    });

});