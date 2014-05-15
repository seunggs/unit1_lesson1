$(document).ready(function(){

	$("input[name='add']").on('click', function(){
		var x = parseInt($("input[name='x']").val());
		var y = parseInt($("input[name='y']").val());
		var result = x + y;

		$('.result').children('p').remove();

		if(validate(x, y) == true) {
			$('.result').append('<p>' + x + ' plus ' + y + ' is ' + result + '</p>');
		} else {
			$('.result').append('<p>Both numbers need to be integers</p>');
		}
	});

	$("input[name='subtract']").on('click', function(){
		var x = parseInt($("input[name='x']").val());
		var y = parseInt($("input[name='y']").val());
		var result = x - y;

		$('.result').children('p').remove();

		if(validate(x, y) == true) {
			$('.result').append('<p>' + x + ' minus ' + y + ' is ' + result + '</p>');
		} else {
			$('.result').append('<p>Both numbers need to be integers</p>');
		}
	});

});

function validate(x, y) {
	if(parseInt(x) === x && parseInt(y) === y) {
		return true;
	} else {
		return false;
	}
}