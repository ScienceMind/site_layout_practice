$(document).ready(function () {
    $('.burger').click(function (event) {
        $('.burger, .navigation-container').toggleClass('active');
        $('body').toggleClass('lock');
    });
});