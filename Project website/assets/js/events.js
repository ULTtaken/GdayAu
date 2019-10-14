window.onload=function(){
AOS.init();
$("#datepicker").on('focus',function(){
	$(this).daterangepicker(
		{
			locale: {
      			format: 'DD-MM-YYYY'
    		}
		});
});
$('.cicon2').on('click',function(e){
	$(this).parent().find('input').focus();
});
$('.cicon1').on('click',function(e){
	$('#datepicker').focus();
	$('#datepicker').click();
})
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
$('#searchevent').on('click',function(){
	$('.allevents').html('');
	$('.loadingdiv').removeClass('fadeOut');
	$('.loadingdiv').css('display','block');
	$('.loadingdiv').addClass('animated fadeIn');
	var daterange = $('#datepicker').val();
	var start_date = reorderdate(daterange.split(' - ')[0]) + 'T00:00:01Z';
	var end_date = reorderdate(daterange.split(' - ')[1]) + 'T23:59:59Z';
	var location = $('#location_event').val() +' Australia';
	var categories = $('#categories_event').val()
	getEvents(start_date,end_date,location,categories);
});
// $('.allevents').on('click','.bookbtn1',function(){
// 	if($(this).hasClass('booksup1')){
// 		$(this).removeClass('booksup1').addClass('booked1btn');
// 		$(this).html('Booked');
// 	}else{
// 		$(this).removeClass('booked1btn').addClass('booksup1');
// 		$(this).html('Book Now');
// 	}
// })
// $('.allevents').on('click','.bookbtn',function(){
// 	$(this).parent().find('.readmorebtn').css('display','block');
// 	$(this).parent().find('.readmorebtn').removeClass('fadeOut').addClass('fadeIn');
// })
// $('.allevents').on('click','.closetag',function(){
// 	$(this).parent().removeClass('fadeIn').addClass('fadeOut').css('display','none');
// })
initialEvents();

function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}

function initialEvents(){
	var d = new Date();
	var month = d.getMonth()+1;
	var day = d.getDate();
	var output = d.getFullYear() + '-' +
	    (month<10 ? '0' : '') + month + '-' +
	    (day<10 ? '0' : '') + day;
	var st = output + 'T00:00:01Z';
	var ed = output + 'T23:59:59Z';
	getEvents(st,ed,'Melbourne','000',1);
}

function reorderdate(dates){
	var y = dates.split('-')[2];
	var m = dates.split('-')[1];
	var dates = y+'-'+m+'-'+dates.split('-')[0];
	return dates;
}

function generateDiv(en,is,et,el,einfo,link){
	var div = document.createElement('div');
	$(div).addClass('events animated fadeIn');
	var moreinfo = document.createElement('div');
	$(moreinfo).addClass('readmorebtn animated');
	var infoclass = document.createElement('div');
	$(infoclass).addClass('infomid');
	var img = document.createElement('img');
	$(img).addClass('eventimg');
	var etime = document.createElement('div');
	$(etime).addClass('timenoticer');
	var closetag = document.createElement('div');
	$(closetag).addClass('closetag');
	$(closetag).html('+');
	var ename = document.createElement('div');
	$(ename).addClass('eventname');
	var eplace = document.createElement('div');
	$(eplace).addClass('eventplace');
	var bookbtn = document.createElement('div');
	$(bookbtn).addClass('bookbtn').addClass('booksup');
	var book1btn = document.createElement('div');
	$(book1btn).addClass('bookbtn1').addClass('booksup1');
	$(infoclass).html(einfo);
	img.src = is;
	$(etime).html(et);
	$(ename).html(en);
	$(eplace).html(el);
	$(bookbtn).html('<a href=\'' + link + '\' target="_blank">Know More</a>');
	$(book1btn).html('Book Now')
	moreinfo.appendChild(infoclass);
	moreinfo.appendChild(book1btn);
	moreinfo.appendChild(closetag);
	div.appendChild(moreinfo);
	div.appendChild(img);
	div.appendChild(etime);
	div.appendChild(ename);
	div.appendChild(eplace);
	div.appendChild(bookbtn);
	$('.allevents').append($(div));
}

function getEvents(sd,ed,lc,ct,num){
	var token = '3WTXCMVEEEVT5ZP3A3BB';
	var links = 'https://www.eventbriteapi.com/v3/events/search/?token='+token+'&location.address='+lc+'&expand=venue&start_date.range_start='+sd+'&start_date.range_end='+ed;
	if(ct != 000){
		links += '&categories=' + ct;
	}
	var headers = new Headers();
	var requestOptions = { method: 'GET',
	               headers: headers,
	               mode: 'cors',
	               cache: 'default' };

	fetch(links,requestOptions)
	.then(function(response) {
	  return response.json();
	})
	.then(function(myBlob) {
	   $('.loadingdiv').removeClass('fadeIn').addClass('fadeOut');
	   $('.loadingdiv').css('display','none');
	   var neve = num == 1 ? 4 : 8;
	   for(var i = 0; i < neve && myBlob.events.length; i++){
	   		var link = myBlob.events[i].url;
	   		var einfo = myBlob.events[i].description.text;
	   		var e_name = myBlob.events[i].name.text;
	   		var img_src = myBlob.events[i].logo.url;
	   		var e_time = myBlob.events[i].start.local.replace('T',' ');
	   		var detailed_address = myBlob.events[i].venue.address.address_1 == null? '' : myBlob.events[i].venue.address.address_1;
	   		var e_loc = detailed_address + ' ' + myBlob.events[i].venue.address.city;
	   		generateDiv(e_name,img_src,e_time,e_loc,einfo,link);
	   }
	});
}
}