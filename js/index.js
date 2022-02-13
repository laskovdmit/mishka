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

$('.production__btn').on('click', function() {
    $('.modal').removeClass('modal--hide');
});

$('.product__btn').on('click', function() {
    $('.modal').removeClass('modal--hide');
});

$('.modal').on('click', function(e) {
    if (e.target == this) {
        $('.modal').addClass('modal--hide');
    }
});