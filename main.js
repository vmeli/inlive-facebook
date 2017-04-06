$('.close').click(function(e){
	e.preventDefault();
	$(this).closest('.wrapper-fbk').hide();
});

$('#grow').click(function(e){
	$(this).find('i').toggleClass('fa-compress');
	e.preventDefault();
	$('.wrapper-fbk').toggleClass('maximice');
});