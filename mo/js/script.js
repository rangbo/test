;(function($){
    $(function(){

    $('.tab__menu--btn').on('click',function(){
        $('.tab__menu--btn').removeClass('on');
        $(this).addClass('on')
        var idx = $('.tab__menu--btn').index(this);
        $('.tab__box').hide();
        $('.tab__box').eq(idx).show();
    });

});

})(jQuery);
