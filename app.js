$(document).ready(function() {

	$('button').click(function(e) {

	for (var i=1; i<101; i++) { 
	 if (i%5==0 && i%3==0) {
	 $('.list').append("<p>Fizz Buzz</p>");
	}

	else if (i%3==0){
	$('.list').append("<p>fizz</p>");
	}

	 else if (i%5==0){
	 $('.list').append("<p>buzz</p>");
	}

	 else {
	 $('.list').append("<p>"+ i +"</p>");
	}

	};
	})
})