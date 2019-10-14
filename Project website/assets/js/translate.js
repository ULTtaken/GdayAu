window.onload=function(){
	var status = 0;
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
	$('#slanginput').on('keyup',function(){
		if($(this).val().length > 0){
			$('#tranbtn').css('cursor','pointer');
			$('#tranbtn').html('Translate');
		}else {
			$('#tranbtn').html('Input Slangs');
		}
	});
	$('#slanginput').on('keypress',function(e){
		if(e.keyCode == 13){
				e.preventDefault();
				searchLang();
		}
	})
	$('#tranbtn').on('click',function(){
		searchLang();
	});
	$('.Awesome').on('click',function(){
		// $('.Awesome').addClass('animated fadeOut');
		var searchword = $(this).find('h4').text();
		$('#slanginput').val(searchword);
		$('#slanginput').focus();
		searchLang();
	})
	$('.quizbtn').on('click',function(){
		$('.quizcontainer').css('display','block').removeClass('fadeOut').addClass('fadeIn');
		if(status == 0){
			requestionQuestion();
			status = 1;
		}
	});
	$('.closetag').on('click',function(){
		$('.quizcontainer').addClass('fadeOut').removeClass('fadeIn');
		$('.quizcontainer').css('display','none');
	});
function getMeaning(words){
	var links = 'https://gdayaustralia.ml:1234/query?word=' + words;
	// $.get(links,function( data ) {
	//   console.log(data);
	// });
	$.ajax(links,   // request url
    {
        success: function (data, status, xhr) {// success callback function
        	$('.lds-roller').addClass('animated fadeOut');
        	$('.lds-roller').css('display','none');
        	// $('.inputform').animate({marginTop:0},400);
            var meaning = JSON.parse(data);
            if(meaning.words.length > 0){
            	for(var i = 0;i < meaning.words.length;i++){
            		generateDiv(meaning.words[i][words],i+1);
            	}
        	}
        	else{
        		alert('No data');
        	}
    	}
	});
}
function generateDiv(meaning,i){
	var pdiv = document.createElement('p');
	$(pdiv).addClass('animated').addClass('fadeInUp').addClass('cardmeaning');
	$(pdiv).html(i+'. ' + meaning.split(';')[0]);
	$('.translationsm').append($(pdiv));
}

function searchLang(){
	if($('#slanginput').val().length > 0){
			$('.translationsm').html('');
			$('.lds-roller').removeClass('fadeOut');
			$('.lds-roller').css('display','inline-block');
			$('.lds-roller').addClass('animated fadeIn');
			var words = $('#slanginput').val();
			getMeaning(words);
	}
}
function requestionQuestion(){
			var links = 'https://gdayaustralia.ml:1234/quiz';
			$.ajax(links,   // request url
		    {
		        success: function (data, status, xhr) {// success callback function
		        	var meaning = JSON.parse(data);
		        	var questions = [];
		        	for(var i = 0; i < meaning.quiz.length; i++){	
		        		var object = {};
		        		object.q = 'What is the meaning of \'' + meaning.quiz[i][0][0] + '\'';
		        		object.options = [];
		        		var random = Math.floor(Math.random()*3);	 
		        		for (var t = 0; t < meaning.quiz[i][2][2].length; t++){
		        			if(t == random){
		        				object.options.push(meaning.quiz[i][1][1].split(';;')[0]);
		        			}
		        			object.options.push(meaning.quiz[i][2][2][t].split(';;')[0]);
		        		}
		        		object.correctIndex = random;
		        		object.correctResponse = 'Correct!!! One example of how to use this word is "' + meaning.quiz[i][3][3] +'"';
		        		object.incorrectResponse = 'Incorrect! The right one is \'' + meaning.quiz[i][1][1].split(';;')[0]
		        		+ '\', One example of how to use this word is \'' + meaning.quiz[i][3][3] + '\'.';
		        	questions.push(object);
		        	}
		        	startQuiz(questions);
		    	}
			});
}

function startQuiz(question){
			var quiz = $('#quiz').quiz({
			  counterFormat: 'Question %current of %total',
			  questions: question
			});
			$('.loadingbox1').addClass('fadeOut');
			$('.loadingbox1').css('display','none');
		}

}