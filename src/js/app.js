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
//

const carouselInit = () => {
    $('#recipeCarousel').carousel({
        interval: 10000
    })

    $('.carousel .carousel-item').each(function(){
        var minPerSlide = 3;
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
	carouselInit();
});
