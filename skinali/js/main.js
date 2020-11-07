$(window).load(function() {
		  $(".before-after").twentytwenty({

		  });
		  $('.before-slider').slick({
		  	draggable: false,
		  	dots: true,
		  	dotsClass: 'before-slider__dots',
		  	prevArrow: $('.arrow-left'),
		  	nextArrow: $('.arrow-right')
		  });
		  $('.menu-button').on('click', function(){
		  	$('.menu').toggleClass('menu_active');
		  });

		  /* Настройки select */
		  $('.select_checked').on('click', function(){
		  	$('.select__dropdown').toggleClass('select__dropdown__open');
		  });
		  $('.select__option').on('click', function(){
		  	var value = $(this).attr('data-value');
		  	$('#select-type').val(value);
		  	$('.select_checked').text(value)
		  	$('.select__dropdown').toggleClass('select__dropdown__open');
		  });
		  $("a[href^='#']").click(function () {
		  	var _href = $(this).attr('href');
		  	$("html, body").animate({ scrollTop: $(_href).offset().top -100 + "px"});
		  	return false;
		  });
		  $('[type="tel"]').mask("+7 (999) 999 99 99");
		  /* Показывать карту только когда докрутили до нее */
		  var feedback = $('.feedback');
		  var feedbackTop = feedback.offset().top;
		  $(window).bind('scroll', function(){
		  	var windowTop = $(this).scrollTop();
		  	if (windowTop > feedbackTop) {
		  		$('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A432368799432edf7b8d91ba4c38322b43ae0f8c5f188acfafea9a6ba251f716c&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=false"></script>');
		  		$(window).unbind('scroll')
		  	}
		  });
		});