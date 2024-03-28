$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 950,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

// Отправка сообщения
// document.getElementById('feedbackForm').addEventListener('submit', function(event) {
// 	event.preventDefault();
   
// 	var name = document.getElementById('name').value;
// 	var email = document.getElementById('email').value;
// 	var message = document.getElementById('message').value;
   
// 	// Здесь будет код для отправки данных на сервер как делать не знаю
   
// 	alert('Сообщение отправлено!');
// 	this.reset();
//   });