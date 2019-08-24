export default $(function() {



//алгоритм раскрывающегося меню

$('.menu-hide').on('click', function(ev){
	var upper = $('#upper-footer').position().top;
	var deep = $('#deep-footer').position().top;
	var h;
	var check = true;
	if ((ev.target.style.width != '70%') && ($('#footer-menu-appear').is(':visible'))) {
		check = false;
		findMenu();
		$('#footer-menu-appear').hide();
		$('.menu-hide').each(function(i,item){
			item.style.top = '0px';
		});
	}      
	   var pos = $(this).position().top+33;
	   $('#footer-menu-appear').css({'top': pos});     

		if ($('#footer-menu-appear').is(':visible')) {
			h = $('#footer-menu-appear').outerHeight(true);
			$('#footer-menu-appear').slideToggle();
			var i = $('.menu-hide').index($(this)) + 1;
			for (var i; i <= $('.menu-hide').length; i++) {
            $($('.menu-hide')[i]).animate({"top": '0px'}, 100);
			}
			$(this).animate({width: '100%'}, 300);
			$('#upper-footer').animate({"top": upper - h}, 300);
			$('#deep-footer').animate({"top": deep - h}, 300);
		} else {

			h = $('#footer-menu-appear').outerHeight(true);
			$('#footer-menu-appear').slideToggle();
			var i = $('.menu-hide').index($(this)) + 1;
			for (var i; i <= $('.menu-hide').length; i++) {
            $($('.menu-hide')[i]).animate({"top": h}, 100);
			}

			$(this).animate({width: '70%'}, 300);
			if (check) {
			$('#upper-footer').animate({"top": upper + h}, 300);
		    $('#deep-footer').animate({"top": deep + h}, 300);

			}
		}

		});

function findMenu() {
	$('.menu-hide').each(function(i, item){
			if (item.style.width == '70%') {
				$(item).animate({width: '100%'}, 300);
			}
		});
}

//скрываем меню при клике не на нем

 $(document).click(function() {
     if ($('#footer-menu-appear').is(':visible')) {
     	$('#footer-menu-appear').slideToggle();
     findMenu();
     $('.menu-hide').each(function(i,item){
			item.style.top = '0px';
		});
     var upper = $('#upper-footer').position().top;
	var deep = $('#deep-footer').position().top;
    var h = $('#footer-menu-appear').outerHeight(true);
     $('#upper-footer').animate({"top": upper - h}, 300);
	 $('#deep-footer').animate({"top": deep - h}, 300);
     } 
});

$('#footer-menu-appear').click(function(e) {
    e.stopPropagation();
    return false;        
});
$('.menu-hide').click(function(e) {
    e.stopPropagation();
    return false;        
});






$('.cata1').on('mouseenter', function(){
	var pos = $(this).position();
	$('#catalog').css({'top': pos.top, 'left': pos.left});
	$('#catalog').toggle();

});


$('#catalog').on('mouseleave', function(){
	$(this).toggle();
});


$('.cata2').on('mouseenter', function(){
	var pos = $(this).position();
	$('#about').css({'top': pos.top, 'left': pos.left});
	$('#about').toggle();

});


$('#about').on('mouseleave', function(){
	$(this).toggle();
});




//выезжающее окно справа
$('#right-arrow-nav').on('click', function(){
	$('#movable').show().animate({'right': '0px'}, 500);

});

$('#movable').on('mouseleave', function(){
	$(this).animate({'right': '-700px'}, 500).hide(40);
});
$('#movable').on('click', function(){
	$(this).animate({'right': '-700px'}, 500).hide(40);

});



/* можно и так, поставить нулевой по ширине блок
   с края контейнера и раскрывать
   
$('#right-arrow-nav').on('click', function(){
	$('#movable p').show(250);
	$('#movable').animate({'width': '700px'}, 500);

});

$('#movable').on('mouseleave', function(){
	$('#movable p').hide(250);
	$(this).animate({'width': '0px'}, 500);
});*/




// держим блоки с каруселями в адаптивной верстке
$(window).on('resize', function(){
	var width = $('#news .fixed-container').innerWidth() - 300;
	$('#slider').css({'max-width': width + 'px'});
	//$('#carousel-items .slide').css({'max-width': width + 'px'});
	if ($(window).width() <= 1100 && $(window).width() >= 651) {
		var nwidth = $('#new-stuff .fixed-container').width();
		$('.section-info').width(nwidth);
	} else if ($(window).width() <= 650) {
		$('.section-info').width(300);
	} else if ($(window).width() > 1100) {
		$('.section-info').width(1024);
	}
    //подвал держим в верстке(из за раскрывающегося меню снизу) 
	var width1 = $(window).width();
	var poss;
	if (width1 >= 320 && width1 <= 700) {
		console.log('!!');
		if ($('#footer-menu-appear').is(':hidden')) {
			poss = $('#footer-menu').position().top + 132;
		} else {
			poss = $('#footer-menu').position().top + 132 + $('#footer-menu-appear').outerHeight();
		}
		
	} else if (width1 >= 720) {
		poss = $('aside').position().top + $('aside').outerHeight() + 20;
	}
	
   	 $('#upper-footer').css({'top': poss});
       $('#deep-footer').css({'top': poss + $('#upper-footer').outerHeight()});

});




//раскрытие верхнего меню
$('.link-top-menu').on('click', function(){
	if ($('#menu-hider').position().top == -100) {
	$('#menu-hider').animate({'top': '49px'}, 500);
	} else {
		$('#menu-hider').animate({'top': '-100px'}, 500);

	}
});
$('#menu-hider').on('mouseleave', function(){
	$(this).animate({'top': '-100px'}, 500);
});


$('.little-arrow, little-arrow2').css({'width': '30px', 'height': '30px'});

});