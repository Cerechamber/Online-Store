export default $(function() {


$(document).ready(function(){
  $("#slider").swipe( {
    swipeLeft: function() {
      var carusel = $(this);
      left_carusel(carusel);
    },
    swipeRight: function() {
      var carusel = $(this);
      right_carusel(carusel);
    }
  });
    $(".section-info").swipe( {
    swipeLeft: function() {
      var carusel = $(this);
      leftcarusel(carusel);
    },
    swipeRight: function() {
      var carusel = $(this);
      rightcarusel(carusel);
    }
  });
});

	//Обработка клика на стрелку вправо
$(document).on('click', "#arrow-right",function(){ 
	var carusel = $(this).parents('#slider');
	right_carusel(carusel);
	return false;
});
//Обработка клика на стрелку влево
$(document).on('click',"#arrow-left",function(){
    var carusel = $(this).parents('#slider');	
	left_carusel(carusel);
	return false;
});


function left_carusel(carusel){
	findlights('left');
   var block_width = $(carusel).find('.slide').outerWidth();
   $(carusel).find("#carousel-items .slide").eq(-1).clone().prependTo($(carusel).find("#carousel-items")); 
   $(carusel).find("#carousel-items").css({"left":"-"+block_width+"px"});
   $(carusel).find("#carousel-items .slide").eq(-1).remove();    
   $(carusel).find("#carousel-items").animate({left: "0px"}, 500);
   
}
function right_carusel(carusel){
	findlights('right');
   const block_width = $(carusel).find('.slide').outerWidth();
   $(carusel).find("#carousel-items").animate({left: "-"+ block_width +"px"}, 500, function(){
	  $(carusel).find("#carousel-items .slide").eq(0).clone().appendTo($(carusel).find("#carousel-items")); 
      $(carusel).find("#carousel-items .slide").eq(0).remove(); 
      $(carusel).find("#carousel-items").css({"left":"0px"});
   }); 

}


function findlights(direction) {
   const current = $('#ides').find('.red-id');
   if (direction === 'right') {
   	if (current.next().length) {
   	current.next().addClass('red-id');
   	current.removeClass('red-id');
}
  else {
  	$('#f').first().addClass('red-id');
  	current.removeClass('red-id');
  }
}
  else {
  	if (current.prev().length) {
  		current.prev().addClass('red-id');
  		current.removeClass('red-id');
  	}
  	else {
  		$('#l').addClass('red-id');
  		current.removeClass('red-id');
  	}
  }
}



$(function() {
//Раскомментируйте строку ниже, чтобы включить автоматическую прокрутку карусели
auto_right('#slider');

});

// Автоматическая прокрутка
function auto_right(carusel){
   $('#header3-up').click(function(){
   	$(carusel).toggleClass('hover');
   });
	        	setInterval(function(){			
		if (!$(carusel).is('.hover'))
			right_carusel(carusel);
	}, 3000);
	        
}
// Навели курсор на карусель
$(document).on('mouseenter', '#slider', function(){$(this).addClass('hover')});
//Убрали курсор с карусели
$(document).on('mouseleave', '#slider', function(){$(this).removeClass('hover')});





$(document).on('click', ".goods-right-arrow, .little-arrow2",function(){ 
	var carusel = $(this).parents('.fixed-container').find('.section-info');
	rightcarusel(carusel);
	return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".goods-left-arrow, .little-arrow",function(){
    var carusel = $(this).parents('.fixed-container').find('.section-info');
	leftcarusel(carusel);
	return false;
});

function leftcarusel(carusel){
   var block_width = $(carusel).find('.goods-block').outerWidth()+20;
   if ($(window).width() <=650) block_width -= 12;
   if ($(carusel).parent().parent().attr('id') == 'we') block_width += 15;
    if ($(carusel).parent().parent().attr('id') == 'brands') block_width += 7;
   $(carusel).find(".carousel2-items .goods-block").eq(-1).clone().prependTo($(carusel).find(".carousel2-items")); 
   $(carusel).find(".carousel2-items").css({"left":"-"+block_width+"px"});
   $(carusel).find(".carousel2-items .goods-block").eq(-1).remove();    
   $(carusel).find(".carousel2-items").animate({left: "0px"}, 500);
   
}
function rightcarusel(carusel){
	 var block_width = $(carusel).find('.goods-block').outerWidth()+20;
	 if ($(window).width() <=650) block_width -= 12;
    if ($(carusel).parent().parent().attr('id') == 'we') block_width += 15;
    if ($(carusel).parent().parent().attr('id') == 'brands') block_width += 7;
   $(carusel).find(".carousel2-items").animate({left: "-"+ block_width +"px"}, 500, function(){
	  $(carusel).find(".carousel2-items .goods-block").eq(0).clone().appendTo($(carusel).find(".carousel2-items")); 
      $(carusel).find(".carousel2-items .goods-block").eq(0).remove(); 
      $(carusel).find(".carousel2-items").css({"left":"0px"});
   }); 

}



});