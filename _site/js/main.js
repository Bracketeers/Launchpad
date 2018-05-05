$('.icon-chevron-down').on('click', function(){
  if($(this).hasClass('icon-chevron-down')) {
    $(this).addClass('icon-chevron-up').removeClass('icon-chevron-down');
  } else {
    $(this).addClass('icon-chevron-down').removeClass('icon-chevron-up');
  }

  $(this).next('.submenu').toggleClass('active');
});


$('.icon-menu').on('click', function(){
  if($(this).hasClass('icon-menu')) {
    $(this).addClass('icon-x').removeClass('icon-menu');
  } else {
    $(this).addClass('icon-menu').removeClass('icon-x');
  }
  $('body').find('.sidebar .menuContainer').toggleClass('active');
});
