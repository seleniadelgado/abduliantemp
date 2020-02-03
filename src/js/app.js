const init = () => {
    const url = window.location.href;
    $('.navbar-nav li').each((index, elem) => {
		const menuItem = $(elem);
		const href = menuItem.children()[0].href;
		const text = menuItem.text();

		if (text && href) {
			if (href === url) {
				menuItem.addClass('active');
			}
		}
	});
};

function resize() {
    let count = 0;
    if ( $(window).width() < 800) {
        count = 1
    } else if (880 <= $(window).width() < 1256) {
        count = 2
    } else if (1256 <= $(window).width() < 1440) {
        count = 3
    }
    else {
        count = 4
    }

    return count;
}
$(window).on("resize", resize);
//

const testimonialsCarouselInit = () => {
    $('#recipeCarousel').carousel({
        interval: 10000
    });


    $('#testimonial-carousel .carousel-item').each(function(){
        console.log('hello test')
        var minPerSlide = 1;
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i=0;i<minPerSlide;i++) {
            next=next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });
};

const settlementsCarouselInit = (count) => {
    $('#recipeCarousel').carousel({
        interval: 10000
    });

    $('#settlements-carousel .carousel-item').each(function(){
        var minPerSlide = count;
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i=0;i<minPerSlide;i++) {
            next=next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });
};

$(() => {
	init();
	settlementsCarouselInit(resize());
	testimonialsCarouselInit();
});
