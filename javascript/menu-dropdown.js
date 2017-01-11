$(function(){
  $('nav li').on('mouseover', function(){
    var menuItem = $(this);
    var hoverIntent = setTimeout(function(){
      menuItem.find('.drop-menu li').show();
    }, 300);
    $(this).on('mouseleave', function(){
      clearTimeout(hoverIntent);
      menuItem.find('.drop-menu li').hide();
    });
  });
});
