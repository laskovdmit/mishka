$('.menu__burger').on('click', function () {
    $('.menu').toggleClass('menu--closed');
});

$(window).on('resize', function() {
    
    if (window.innerWidth > 768 && $('.menu').hasClass('menu--closed')) {
        $('.menu').removeClass('menu--closed');
    } else if (window.innerWidth < 768 && !$('.menu').hasClass('menu--closed')) {
        $('.menu').addClass('menu--closed');
    }
});