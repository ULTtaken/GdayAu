window.onload=function(){
				var menu = "close";
  $(".hamburger-menu").click(function() {

    if (menu === "close") {
      $(this).parent().next(".mobile-nav").css("transform", "translate(0%, 0)");
      menu = "open";
      $(".hamburger-menu").toggleClass('open');
    }else {
      $(this).parent().next(".mobile-nav").css("transform", "translate(100%, 0)");
      menu = "close";
      $(".hamburger-menu").toggleClass('open');
    }
  });
	setTimeout(function(){$('.loadingbox').addClass('fadeOut')},3000);
	setTimeout(function(){$('.loadingbox').css('display','none')},3400);
}