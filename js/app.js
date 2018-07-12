$( document ).ready( function() {



//slider logic for full width slider with structure #slider > .slides > #slide, #slide...
const slide = (slider, width, animSpeed, pause) => {
    const $slider = $(slider);
    const $slides = $slider.find('.slides');
    const $slide = $slides.children();
    const $firstSlide = $('#slider .slides #slide:first-child');
    $firstSlide.clone().appendTo($slides);

    let currentSlide = 1;
    let interval;

    function startSlider() {
        interval = setInterval(function() {
            $slides.animate({'margin-left' : `-=${width}`}, animSpeed, function() {
                if (currentSlide === $slide.length) {
                    $slides.css('margin-left', 0);
                    currentSlide = 0
                }
                currentSlide++;
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }
    $slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);
    startSlider();
}

//parallax effect on element, typical speed between 0 and 1
const glide = (elem, speed) => {
    const $glide = $(elem);
    $(window).scroll(function() {
        let windowTop = $(this).scrollTop();
        let windowBottom = windowTop + $(this).height();
    
        $.each($glide, function(i) {
            const glideTop = this.offsetTop;
            const glideBottom = glideTop + this.offsetHeight;
            let glideTravel =  windowBottom - glideTop;
            if (windowBottom > glideTop && windowTop < glideBottom ) {
                $(this).css({'transform' : `translate(0px, ${glideTravel*speed/10}px)`})
            }
        })
    });
}

const $links = $('.exploration-content nav a');
$links.each(function(i) {
    $(this).on('click', function() {
        event.preventDefault();
        if ($(this).hasClass('active')) {
            return
        } else {
            const contentId = this.hash;
            const $section = $('.exploration-content');
            const $activeLink = $section.find('nav a.active');
            const $activeSection = $section.find('.content .active');
            const $newSection = $section.find(contentId);

            $activeLink.removeClass('active');
            $(this).addClass('active');

            $activeSection.fadeOut().removeClass('active');
            $newSection.addClass('active').fadeIn(1000);
        }
    })
})

slide('#slider', '100vw', 1500, 4000);

glide('.content.glide', 0.5);
glide('.image.glide', -0.3);
glide('aside.glide', -0.4);


})
