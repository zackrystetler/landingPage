

//slider
//slideshow

//parallax effect on element, typical speed between 0 and 1
const glide = (elem, speed) => {
    $(window).scroll(function() {
        const $glide = $(elem);
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

glide('.content.glide', 0.5);
glide('.image.glide', -0.3);
glide('aside.glide', -0.4);

//fade-in effects