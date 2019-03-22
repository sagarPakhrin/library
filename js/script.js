$(document).ready(function(){
		lightbox.option({
				'wrapAround': true
		});

		$('.hamburger-menu').click(function(){
				$('.navigation').toggleClass('change');
		})


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
						$('#book-1').attr('src','../img/writers/' + event.target.id.split('-')[1] + '-book1.jpg');
						$('#book-2').attr('src','../img/writers/' + event.target.id.split('-')[1] + '-book2.jpg');
				}
		});

});
