window.onload=function(){
AOS.init();
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
$('.oneSeg').on('click',function(){
    $(this).find('.infoplay').addClass('show');
});
$('.closetag').on('click',function(e){
    e.stopPropagation();
    $(this).parent().removeClass('show');
});
}