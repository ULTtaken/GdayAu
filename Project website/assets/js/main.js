window.onload=function(){
/** TO DYNAMICALLY UPDATE THE NOTICEBOX NUMBER **/
AOS.init();
// var scollBtn = document.getElementsByClassName('markedspan');
$('#tryenter').on('click',function(){
	var pw = $('#pwtoweb').val();
	if(pw == 12345){
		$('.loadingbox2').css('display','none');
	}
})
$('.togglebar').click(function(e){
	if(this.style.background == 'yellow'){
		$(this).css('background', 'white');
		$(this).find('#secarrow').removeClass('uparrow').addClass('dowarrow');
	}
	else{
		$(this).css('background', 'yellow');
		$(this).find('#secarrow').removeClass('dowarrow').addClass('uparrow');
	}
    $(this).find('.toggleDropdown').slideToggle('fast');
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
$('.pattern1').addClass('animated fadeInUp');
$('.pattern2').addClass('animated fadeInUp');
$('.pattern3').addClass('animated fadeInUp');
$("#label1").hover(function(){
	$("#label1").addClass('animated pulse delay-1s');
},function(){
	$("#label1").removeClass('animated pulse delay-1s');
})
$("#label2").hover(function(){
	$("#label2").addClass('animated pulse delay-1s');
},function(){
	$("#label2").removeClass('animated pulse delay-1s');
})
$("#label3").hover(function(){
	$("#label3").addClass('animated pulse');
},function(){
	$("#label3").removeClass('animated pulse');
})
/** CONTROLLER **/
$(".circleController li span").on('click',function(){
	$(this).parent().parent().siblings().find('span').removeClass('activespan');
	$(this).addClass('activespan');
});
$(window).scroll(function(){
	var nowheight = $(document).scrollTop();
	// if( nowheight >= ($('#last_page').offset().top - 300)){
	// 	$(scollBtn).removeClass('activespan');
	// 	$(scollBtn[3]).addClass('activespan');
	// 	$(scollBtn).css('background','black');
	// }else if(nowheight >= ($('#thd_page').offset().top - 300)){
	// 	$(scollBtn).removeClass('activespan');
	// 	$(scollBtn[2]).addClass('activespan');
	// 	$(scollBtn).css('background','black');
	// }else if(nowheight >= ($('#sec_page').offset().top - 300)){
	// 	$(scollBtn).removeClass('activespan');
	// 	$(scollBtn[1]).addClass('activespan');
	// 	$(scollBtn).css('background','black');
	// }else{
	// 	$(scollBtn).removeClass('activespan');
	// 	$(scollBtn[0]).addClass('activespan');
	// 	$(scollBtn).css('background','white');
	// }
	if($(document).scrollTop() >= 100){
		$('#flexheader').css('display','block');
		$('#flexheader').removeClass('animated fadeOutUp');
		$('#flexheader').addClass('animated fadeInDown faster');
	}
	else{
		$('#flexheader').removeClass('animated fadeInDown');
		$('#flexheader').addClass('animated fadeOutUp faster');
	}
});
/** END THE NOTICEBOX NUMBER 			**/

/** BEGIN WITH THE SERVICE 				**/
/** END WITH THE SERVICE                **/
}
function openCurtain(event){
	var valType = event.getAttribute('name');
	var airm = document.getElementById('curtainLL');
	airm.style.display = 'block';
	document.getElementById('setType').value = valType;
	console.log(valType);
}
function disapper(event){
	event.style.display = 'none';
}
function showFileName(){
	var name = document.getElementById('file_n').value;
	document.getElementById('file_name').innerHTML = name;

}

