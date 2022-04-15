;(function($){
    $(function(){

    $('.tab__menu--btn').on('click',function(){
        $('.tab__menu--btn').removeClass('on');
        $(this).addClass('on')
        var idx = $('.tab__menu--btn').index(this);
        $('.tab__box').hide();
        $('.tab__box').eq(idx).show();
    });

    $(document).ready(function(){
        $(".info--accordian").click(function() {
            $(this).nextAll(".content:first").slideToggle("fast");
            $(this).find(".accordian-arrow").toggleClass("less");
        });
});
jQuery.fn.tabs = function(tabContents, options) {
    options = $.extend({
        linkClass: "active",
        contentClass: "active",
        allowClose: false
    }, options);

    var $tabLinks = this,
        $tabContents = $(!!tabContents ? tabContents : ".tab-content");

    return $(this).click(function(event, hadClass) {
        event.preventDefault();
    
        hadClass = $(this).hasClass(options.linkClass);
    
        $tabLinks.removeClass(options.linkClass);
        $tabContents.removeClass(options.contentClass);
    
        if (hadClass && options.allowClose) return;
    
        $($(this).addClass(options.linkClass)[0].hash).addClass(options.contentClass);
    });
};

    $('.tab-link').tabs('.tab-content', { contentClass: 'alive', allowClose: true }).each(function() {
        $(this.hash + ' .tab-inner_link').tabs(this.hash + ' .tab-inner_content')
    });
});

})(jQuery);

function selectAll(selectAll)  {
    const checkboxes 
    = document.getElementsByName('check');
    
    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked;
    })
}   

