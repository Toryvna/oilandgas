$(document).ready(function(){

    //mobile menu
    $(document).mouseup(function(e){
        $('.toggle-menu').on('click touch', function () {
            $(this).toggleClass('active');
            $('.header__menu').toggleClass('show');
        });
        var menu = $('.header__menu.show');
        if (!menu.is(e.target) && menu.has(e.target).length === 0) {
            menu.removeClass('show');
            $('.toggle-menu').removeClass('active');
        }

    });
    //end mobile menu

});


