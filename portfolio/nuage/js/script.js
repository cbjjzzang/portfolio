$(function(){
/*popUp*/		
	$('.closeBt').click(function(){
		$('#popUp').hide();
	});
	$('.p1Logo').click(function(){
		$('#popUp').show();
		window.location = 'http://cbjjzzang.dothome.co.kr';
	});
	
/*menu*/

	$('img[alt=메뉴이미지]').click(function(e){
		e.preventDefault();
		$('#menu').slideDown(1000);
	});
	$('.menuClose').click(function(){
		$('#menu').slideUp(1000);
	});
	
	$('.main').mouseover(function(){
		$(this).find('ul').stop().slideDown();
	});
	$('.main').mouseout(function(){
		$(this).find('ul').stop().slideUp();
	});
	
/*slide*/
	setInterval(function(){
		$('.slide img').eq(3).fadeOut(1000, function(){
			$('.slide img').eq(3).insertBefore('.slide img:eq(0)');
			$('.slide img').eq(0).show();
		});
	},3000);
	
	setInterval(function(){
		$('.mainText h2').eq(3).fadeOut(1000, function(){
			$(this).siblings().hide();
			$('.mainText h2').eq(3).insertBefore('.mainText h2:eq(0)');
			$('.mainText h2').eq(3).show();
		});
	},3000);
	
/*check In*/
	$('.check .on').click(function(e){
		e.preventDefault();
		$('.calen').slideToggle();
	});	
	
	$('.guest .on').click(function(e){
		e.preventDefault();
		$('.calen2').slideToggle();
	});	
	
/*position*/
	$('#position li a img').click(function(){
		$('#position li a img').attr({'src':'images/locationIcon2.png'});
		$(this).attr({'src':'images/locationIcon1.png'});
	});
	
	$(window).on('scroll', function(){
		var nowScroll = $(window).scrollTop();
		var index;
		if(nowScroll>0 && nowScroll <=1299){index=0;}
		if(nowScroll>=1300 && nowScroll<=3000){index=1;}
		if(nowScroll>=3001 && nowScroll<=4700){index=2;}
		if(nowScroll>=4701 && nowScroll<=6150){index=3;}
		if(nowScroll>=6151){index=4;}
		console.log(index);
		$('#position li').eq(index).find('img').attr({'src':'images/locationIcon1.png'});
		$('#position li').eq(index).siblings().find('img').attr({'src':'images/locationIcon2.png'});
	});
	
/*객실 사진 슬라이드*/
	$('.p3footer .left').click(function(e){
		e.preventDefault();
		$('.p3footer ul li:eq(0)').insertAfter('.p3footer ul li:eq(2)')
	});
	$('.p3footer .right').click(function(e){
		e.preventDefault();
		$('.p3footer ul li:eq(2)').insertBefore('.p3footer ul li:eq(0)')
	});
});