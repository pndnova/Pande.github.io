

$(window).on('load', function(){
	
	$('#carouselExampleCaptions').addClass('active');
})


$(window).scroll(function()
{
	const scroll = $(this).scrollTop();


	if(scroll > $('#dialogku').offset().top -30)
	{
		$('.n-home').addClass('active');
	}else {
		$('.n-home').removeClass('active');
	}


	if(scroll > $('#dialogku').offset().top -30)
	{
		$('.n-sarana').addClass('active');
	}else {
		$('.n-sarana').removeClass('active');
	}


	if(scroll > $('#dialogku').offset().top -250)
	{
		$('.danau-home').addClass('active');
	}else {
		$('.danau-home').removeClass('active');
	}


	if(scroll > $('#dialogku').offset().top -280)
	{
		$('.video-home').addClass('active');
	}else {
		$('.video-home').removeClass('active');
	}



})