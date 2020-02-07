const initNavBar = () => {
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

// updated the carousel count that should be displayed
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

const testimonialsCarouselInit = () => {
    $('#recipeCarousel').carousel({
        interval: 10000
    });

    $('#testimonial-carousel .carousel-item').each(function(){
        const minPerSlide = 1;
        let next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (let i = 0; i < minPerSlide; i++) {
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
        let minPerSlide = count;
        let next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (let i=0; i < minPerSlide ; i++) {
            next=next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });
};

const validateEmail = (email) => !!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));

const validate = (data) => {
    data.every((item) => {
        if (item.name === 'email') {
            return validateEmail(item.value);
        }
        if (item.value != '') {
            return true;
        }
    });
};

function resetForm(form)
{
    form[0].contactBtn.disabled = false;
    form[0].contactBtn.value = "Send message";
    form.trigger('reset')
}

// Close the alert notification automatically
function fadeAlert() {
    let close = document.getElementsByClassName("closebtn");

    for (let i = 0; i < close.length; i += 1) {
        let div = close[i].parentElement;
        setTimeout(function(){ div.style.opacity= "0"; }, 3000);
        setTimeout(function(){ div.style.display = "none"; }, 4000);
        close[i].onclick = (e) => {
            let div = e.target.parentElement;
            div.style.opacity = "0";
            setTimeout(function(){ div.style.display = "none"; }, 600);
        }
    }
}

// Send the email on submit
$('form').on('submit', async (event) => {
    event.preventDefault();
    const form = $('form');
    const formData = form.serializeArray();
    const formValid = validate(formData);
    if (formValid) {
        const cleanData = {};
        formData.forEach((item) => {
            cleanData[item.name] = item.value;
        });
        form[0].contactBtn.disabled = true;
        form[0].contactBtn.value = "Please wait...";

        await sendMail(cleanData);
        resetForm(form);

        // Send successful alert
        $("body").prepend(`
            <div class="alert">
                <span class="closebtn">&times;</span>
                Message has been sent. We will get back to you as soon as possible.
            </div>
            `);
    } else {
        // Send Validation error alert
        $("body").prepend(`
            <div class="alert alert--warning">
                <span class="closebtn">&times;</span>
                The form is invalid, please make sure all fields are filled.
            </div>
        `);
    }
    fadeAlert();
});

const sendMail = async (data) => {
  const apiURL = '/send-email';
  const res = await fetch(apiURL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    credentials: 'same-origin',
    body: JSON.stringify(data),
  });
  console.log(res);
  return res
};

$(() => {
	initNavBar();
	settlementsCarouselInit(resize());
	testimonialsCarouselInit();
});
