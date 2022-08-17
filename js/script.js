$(function(){  
    
    // sidebar
    function showSidebar() {
        $('.js-sidebar-inner').addClass('l-sidebar_inner_open');

        $('.js-sidebar').fadeIn('1000');
        $('html, body').css('overflow', 'hidden');
    };
    function hideSidebar() {
        $('.js-sidebar-inner').removeClass('l-sidebar_inner_open');

        $('.js-sidebar').fadeOut('1000');
        $('html, body').css('overflow', 'visible');
    };

    $('.js-sidebar-show').on('click', function(event) {
        event.preventDefault();
        showSidebar();
    });
    $('.js-sidebar-hide').on('click', function(event) {
        event.preventDefault();
        hideSidebar();
    });
});
  

