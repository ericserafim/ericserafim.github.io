$(document).ready(function () {

    $('.navbar-collapse a').click(function () {
        $(".navbar-collapse").collapse('hide');
    });

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);

        $('header .navbar-nav a').on( 'click', function () {
            $('header .navbar-nav').find('li.active').removeClass('active');
            $(this ).parent('li').addClass('active');
        });
    });
});

