$('.icon-chevron-down').on('click', function(){
  if($(this).hasClass('icon-chevron-down')) {
    $(this).addClass('icon-chevron-up').removeClass('icon-chevron-down');
  } else {
    $(this).addClass('icon-chevron-down').removeClass('icon-chevron-up');
  }

  $(this).next('.submenu').toggleClass('active');
})