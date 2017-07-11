$(function(){
	$('.list li:first-child a').css('color','black');
	$('.list li').click(function(){
		$(this).children().css('color','black').parent().addClass('active').siblings('.active').removeClass('active').children().css('color','#ffcc00');
	
	});
});

