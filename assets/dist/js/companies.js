$(document).ready(function(){

    $('.sorting-top').on('click', function(){
        $(this).parent().addClass('show');
    });
    $('.sort-list a').on('click', function(){
        $('.sort-list li').removeClass('active');
        $(this).parent().addClass('active');
        $('.current-value').html($(this).html());
        $('.sorting').removeClass('show');
    });

});