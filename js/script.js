function include(scriptUrl) {
    if (window.jQuery && jQuery.fn.owlCarousel) {
        return;
    }
    var s = document.createElement('script');
    s.src = scriptUrl;
    document.head.appendChild(s);
}

function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};



/* Owl Carousel
========================================================*/
;(function ($) {
    var o = $('.owl-carousel');
    if (o.length > 0) {
        if (!$.fn.owlCarousel) {
            include('js/owl.carousel.min.js');
        }
        $(document).ready(function () {
            if (!$.fn.owlCarousel) {
                return;
            }
            o.owlCarousel({
                margin: 0,
                smartSpeed: 450,
                loop: true,
                dots: true,
                dotsEach: 1,
                nav: true,
                autoplay: true,
                animateOut: 'fadeOut',
                responsive: {
                    0: { items: 1 }
                }
            });
        });
    }
})(jQuery);
