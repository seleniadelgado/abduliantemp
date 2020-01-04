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

$(() => {
	init();
});
