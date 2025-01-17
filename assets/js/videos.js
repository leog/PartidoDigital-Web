---
---

$(function() {
    /*
        Carousel
        CC 2.0 License Iatek LLC 2018 - Attribution required
    
    $('#videos-carousel').on('slide.bs.carousel', function (e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 5;
        var totalItems = $('.carousel-item').length;
    
        if (idx >= totalItems-(itemsPerSlide-1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i=0; i<it; i++) {
                // append slides to end
                if (e.direction=="left") {
                    $('.carousel-item').eq(i).appendTo('.carousel-inner');
                }
                else {
                    $('.carousel-item').eq(0).appendTo('.carousel-inner');
                }
            }
        }
    });*/

    $('.video-carousel').slick({
        arrows: true,
        centerMode: true,
        centerPadding: '60px',
        prevArrow: '<a class="carousel-control carousel-control-prev ml-2" href="#videos-carousel" role="button" data-slide="prev">{% include recursos/assets/img/arrow.svg %}<span class="sr-only">Anterior</span></a>"',
        nextArrow: '<a class="carousel-control carousel-control-next mr-2" href="#videos-carousel" role="button" data-slide="next">{% include recursos/assets/img/arrow.svg %}<span class="sr-only">Siguiente</span></a>',
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        lazyLoad: 'ondemand',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });

    $('.video-btn, .video-play').click(function() {
        $videoSrc = "https://www.youtube.com/embed/" + $(this).data("vid");
    });

    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function (e) {
        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
    })
    
    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#video").attr('src',""); 
    }) 
})