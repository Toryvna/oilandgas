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

    //lock,unlock body на телефоне
    var $docEl = $('html, body'),
    $wrap = $('body'),
    scrollTop;

    $.lockBody = function() {
        if(window.pageYOffset) {
        scrollTop = window.pageYOffset;
        
        $wrap.css({
            top: - (scrollTop)
        });
        }

        $docEl.css({
            height: "100%",
            overflow: "hidden"
        });
    }

    $.unlockBody = function() {
        $docEl.css({
            height: "",
            overflow: ""
        });

        $wrap.css({
            top: ''
        });

        window.scrollTo(0, scrollTop);
        window.setTimeout(function () {
            scrollTop = null;
        }, 0);

    }

    //register popup
    $('.open-register').on("click",function(){
        $('.overlay-register').addClass('active');

        if($(window).width() < 768) {   
            $.lockBody();
        }else{
            $('body').css('overflow', 'hidden');
        }
    });
    $('.overlay-register .closeBtn, .overlay-register .close').on("click",function(){
        $('.overlay-register').removeClass('active');
        if($(window).width() < 768) {   
            $.unlockBody();
        }else{
            $('body').css('overflow', 'inherit');
        }
    });
    //end register popup

    //login popup
    $('.open-login').on("click",function(){
        $('.overlay-login').addClass('active');

        if($(window).width() < 768) {   
            $.lockBody();
        }else{
            $('body').css('overflow', 'hidden');
        }
    });
    $('.overlay-login .closeBtn, .overlay-login .close').on("click",function(){
        $('.overlay-login').removeClass('active');
        if($(window).width() < 768) {   
            $.unlockBody();
        }else{
            $('body').css('overflow', 'inherit');
        }
    });
    //end login popup

    //confirm popup
    $('.open-confirm').on("click",function(){
        $('.overlay-confirm').addClass('active');

        if($(window).width() < 768) {   
            $.lockBody();
        }else{
            $('body').css('overflow', 'hidden');
        }
    });
    $('.overlay-confirm .closeBtn, .overlay-confirm .close').on("click",function(){
        $('.overlay-confirm').removeClass('active');
        if($(window).width() < 768) {   
            $.unlockBody();
        }else{
            $('body').css('overflow', 'inherit');
        }
    });
    //end confirm popup
    
    //successful popup
    $('.open-successful').on("click",function(){
        $('.overlay-successful').addClass('active');

        if($(window).width() < 768) {   
            $.lockBody();
        }else{
            $('body').css('overflow', 'hidden');
        }
    });
    $('.overlay-successful .closeBtn, .overlay-successful .close').on("click",function(){
        $('.overlay-successful').removeClass('active');
        if($(window).width() < 768) {   
            $.unlockBody();
        }else{
            $('body').css('overflow', 'inherit');
        }
    });
    //end successful popup

    //passRecover popup
    $('.open-passRecover').on("click",function(){
        $('.overlay-passRecover').addClass('active');

        if($(window).width() < 768) {   
            $.lockBody();
        }else{
            $('body').css('overflow', 'hidden');
        }
    });
    $('.overlay-passRecover .closeBtn, .overlay-passRecover .close').on("click",function(){
        $('.overlay-passRecover').removeClass('active');
        if($(window).width() < 768) {   
            $.unlockBody();
        }else{
            $('body').css('overflow', 'inherit');
        }
    });
    //end passRecover popup

    //newPass popup
    $('.open-newPass').on("click",function(){
        $('.overlay-newPass').addClass('active');

        if($(window).width() < 768) {   
            $.lockBody();
        }else{
            $('body').css('overflow', 'hidden');
        }
    });
    $('.overlay-newPass .closeBtn, .overlay-newPass .close').on("click",function(){
        $('.overlay-newPass').removeClass('active');
        if($(window).width() < 768) {   
            $.unlockBody();
        }else{
            $('body').css('overflow', 'inherit');
        }
    });
    //end newPass popup

    //thxMsg popup
    $('.open-thxMsg').on("click",function(){
        $('.overlay-thxMsg').addClass('active');

        if($(window).width() < 768) {   
            $.lockBody();
        }else{
            $('body').css('overflow', 'hidden');
        }
    });
    $('.overlay-thxMsg .closeBtn, .overlay-thxMsg .close').on("click",function(){
        $('.overlay-thxMsg').removeClass('active');
        if($(window).width() < 768) {   
            $.unlockBody();
        }else{
            $('body').css('overflow', 'inherit');
        }
    });
    //end thxMsg popup

    

    

    //Дублирование вводимых значений в скрытый инпут
    var hiddenPass = $('.hiddenPass');

    hiddenPass.on('keyup change input paste', function () {
        var value = $(this).val();
        var visibleInput = $(this).siblings('.visiblePass');
        visibleInput.val(value);
    });

    //Дублирование вводимых значений в скрытый инпут
    $('.visiblePass').on('keyup change input paste', function () {
        var value = $(this).val();
        var hiddenInput = $(this).siblings('.hiddenPass');
        hiddenInput.val(value);
    });
    //Переключение видимых ипутов
    $('.show-pass').on('mousedown mouseup touchstart touchend click', function () {
        $(this).toggleClass('active');
        $(this).parent().find('input').toggle();
    });


});


