window.onscroll = function() {
  var navbar_sticky = document.getElementById("navbar_sticky");
  if (navbar_sticky) {
      var sticky = navbar_sticky.offsetTop;
      var navbar_height = document.querySelector('.navbar') ? document.querySelector('.navbar').offsetHeight : 0;

      if (window.pageYOffset >= sticky + navbar_height) {
          navbar_sticky.classList.add("sticky");
          document.body.style.paddingTop = navbar_height + 'px';
      } else {
          navbar_sticky.classList.remove("sticky");
          document.body.style.paddingTop = '0';
      }
  } else {
      console.error("Element with ID 'navbar_sticky' not found.");
  }
};

$(document).ready(function () { 
  $('.dropdown').hover(function () { 
      $(this).addClass('show'); 
      $(this).find('.dropdown-menu').addClass('show'); 
  }, function () { 
      $(this).removeClass('show'); 
      $(this).find('.dropdown-menu').removeClass('show'); 
  }); 
});