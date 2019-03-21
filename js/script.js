$(document).ready(function(){
		lightbox.option({
				'wrapAround': true
		});

		$(window).scroll(function(){
				let position = $(this).scrollTop();
				// console.log(position);
				if (position >= 350) {
						$('.gallery').addClass('change');
						$('.gallery').addClass('change');
				}
				else {
						$('.gallery').removeClass('change');
						$('.gallery').removeClass('change');
				}
		});

		$('.writers-accordian').click(function(){
				if(event.target.id.split('-')[0]==='button'){
				}
		});

});
