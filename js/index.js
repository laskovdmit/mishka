$('.menu__burger').on('click', function () {
    $('.menu__main, .menu__user').toggleClass('d-none');

    if ( $('.menu__img').hasClass('d-none')) {
        $('.menu__img').removeClass('d-none');
    } else {
        $('.menu__img').addClass('d-none');
    }
   
});