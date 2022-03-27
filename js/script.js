;(function($){
    $(function(){

    $('.tab_menu_btn').on('click',function(){
        $('.tab_menu_btn').removeClass('on');
        $(this).addClass('on')
        var idx = $('.tab_menu_btn').index(this);
        $('.tab_box').hide();
        $('.tab_box').eq(idx).show();
    });

});

})(jQuery);

$(document).ready(function(){
    $(".drop_menu").hide();
    
    $("header .menu>li, .drop_menu").hover(function(){
        $(".drop_menu").stop().slideToggle();
    });
});

$(function() {
    var lnb = $("#lnb").offset().top;
    $(window).scroll(function() {
        var window = $(this).scrollTop();

        if(lnb <= window) {
            $("#lnb").addClass("fixed");
        } else {
            $("#lnb").removeClass("fixed");
        }
    })
});
