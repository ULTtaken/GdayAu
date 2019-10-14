window.onload=function(){
AOS.init();
$(".imgbox").hover(function(){
	$(this).find('.detailed').css('display','block');
	$(this).find('.detailed').removeClass('animated fadeOutDown');
	$(this).find('.detailed').addClass('animated fadeInUp');
},function(){
	$(this).find('.detailed').removeClass('animated fadeInUp');
	$(this).find('.detailed').addClass('animated fadeOutDown');
});
$(".imgbox.abcde,.readmore").hover(function(){
	if($(this).hasClass('imgbox')){
		$(this).addClass('blur');
	}
	else{
		$(this).parent().parent().find('.imgbox').addClass('blur');
	}
	$(this).parent().find('.readmore').css('display','block');
	$(this).parent().find('.readmore').removeClass('animated fadeOut');
	$(this).parent().find('.readmore').addClass('animated fadeIn');
},function(){
	$(this).removeClass('blur');
	$(this).parent().find('.readmore').removeClass('animated fadeIn');
	$(this).parent().find('.readmore').addClass('animated fadeOut').css('display','none');
});
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
  })
$('.closetage').on('click',function(){
	$('.blacksheild').addClass('animated fadeOutUp');
	$('.imgbox.abcde').removeClass('blur');
})
$('.secpart').on('click',function(){
	var openBnum = $(this).find('.indicator').text();
	var ele = document.getElementsByClassName('blacksheild')[openBnum];
	$(ele).css('display','block');
	$(ele).removeClass('fadeOutUp');
	$(ele).addClass('animated fadeInDown');
});
}