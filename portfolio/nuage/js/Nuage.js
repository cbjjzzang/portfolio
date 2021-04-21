$(function(){
/*상단 이미지 페이징 효과*/
var count = 0;
	/**/setInterval(function(){
		
		$('.slide img').eq(14).fadeOut(500, function(){
			$('.slide img').eq(14).insertBefore('.slide img:eq(0)');
			$('.slide img').eq(0).show();
		});
		$('.position li').siblings().find('span').removeClass('on',300, function(){
			$('.position li').eq(count).find('span').addClass('on');
		});
		count+=1;
		if(count == 15) {
			count=0;
		}
	}, 4000);
	/*
	$('.position li').click(function(){
		var index = $(this).index();
		console.log(index);
		$(this).find('span').addClass('on');
		$(this).siblings().find('span').removeClass('on');
		
		$('.slide img').siblings('img').fadeOut();
		$('.slide img').eq(index).nextUntil('.redBg').fadeOut();
		count=index;
	});
	*/

/* 마우스 오버시 See all 효과*/	
	$('.text1').mouseover(function(){
		$(this).find('.seeMore_on, .seeMore_on2').stop().animate({left:0},100);
		$(this).find('.textChange, .textChange2').stop().animate({color:'#fff'},100);
	});
	
	$('.text1').mouseleave(function(){
		$(this).find('.seeMore_on, .seeMore_on2').stop().animate({left:-165},100);
		$(this).find('.textChange, .textChange2').stop().animate({color:'#000'},100);
	});
	
	$('li').mouseover(function(){
		$(this).find('.seeMore_on').stop().animate({left:0},100);
		$(this).find('.textChange').stop().animate({color:'#fff'},100);
	});
	$('li').mouseleave(function(){
		$(this).find('.seeMore_on').stop().animate({left:-165},100);
		$(this).find('.textChange').stop().animate({color:'#000'},100);
	});
	
/*검색 아이콘 클릭시 검색창 나오게 하기*/	
	$('.gnb li ul li').eq(0).click(function(){
		$(this).fadeOut();
		$('body').css({opacity:0.8});
		$('.gnb input').stop().animate({width:'100%'});
	});
	$('.gnb li ul li').eq(1).click(function(){
		$('.gnb .fa-search').parent().fadeIn();
		$('body').css({opacity:1});
		$('.gnb input').stop().animate({width:'0%'});
	});

/* service 이미지 슬라이딩*/	
	$('.service li').each(function(aa){
		$(this).css({left:aa*405});
	});
	
	$('.left1').click(function(){
		$('.service li').each(function(){
			var aa = parseInt($('.service li').eq(0).css('left'));
			console.log(aa);
			if(aa==0) {
				return false;
			}
			if(aa==-405){
				$('.left1').addClass('one');
			}
			var bb = parseInt($(this).css('left'));
			var cc = bb+405;
			$(this).stop().animate({left:cc}, function(){
				$('.right1').removeClass('one');
			});
		});
	});
	
	$('.right1').click(function(){
		$('.service li').each(function(){
			var aa = parseInt($('.service li').eq(7).css('left'));
			if(aa==1215){
				return false;
			}
			if(aa==1620){
				$('.right1').addClass('one');
			}
			console.log(aa);
			var bb = parseInt($(this).css('left'));
			var cc = bb-405;
			$(this).stop().animate({left:cc}, function(){
				$('.left1').removeClass('one');
			});
		});
	});

/* blog 이미지 무한 슬라이딩*/	
	$('.blog li').each(function(aa){
		$(this).css({left:(aa-1)*405});
	});
	
	$('.right2').click(function(){
		$('.blog li').each(function(){
			var bb = parseInt($(this).css('left'));
			var cc = bb-405;
			$(this).stop().animate({left:cc}, 500, function(){
				if(bb==-810){
					$(this).css('left','2025px');
				}
			});
		});
	});
	$('.left2').click(function(){
		$('.blog li').each(function(){
			var bb = parseInt($(this).css('left'));
			var cc = bb+405;
			$(this).stop().animate({left:cc}, 500, function(){
				if(bb==2430){
					$(this).css('left','-405px');
				}
			});
		});
	});

/* 화면 하단 이미지와 텍스트 슬라이딩 */	
	$('.lastImg img').each(function(aa){
		$(this).css({left:aa*786});
	});
	/**/
	$('.lastSlide li').each(function(aa){
		$(this).css({right:aa*-635});
	});
	
	$('.left3').click(function(){
		$('.lastImg img').each(function(){
			var aa = parseInt($('.lastImg img').eq(0).css('left'));
			if(aa==0){
				return false;
			}
			if(aa==-786){
				$('.left3').addClass('one2');
			}
			var bb = parseInt($(this).css('left'));
			var cc = bb+786;
			$(this).stop().animate({left:cc},500, function(){
				$('.right3').removeClass('one2');
			});
		});
		$('.lastSlide li').each(function(){
			var ff = parseInt($('.lastSlide li').eq(0).css('left'));
			if(ff == 0){
				return false;
			}
			var dd = parseInt($(this).css('left'));
			var ee = dd+635;
			$(this).stop().animate({left:ee}, 500);
		});
	});
	
	$('.right3').click(function(){
		$('.lastImg img').each(function(){
			var aa = parseInt($('.lastImg img').eq(2).css('left'));
			if(aa==0){
				return false;
			}
			if(aa==786){
				$('.right3').addClass('one2');
			}
			var bb = parseInt($(this).css('left'));
			var cc = bb-786;
			$(this).stop().animate({left:cc},500, function(){
				$('.left3').removeClass('one2');
			});
		});
		$('.lastSlide li').each(function(){
			var ff = parseInt($('.lastSlide li').eq(2).css('left'));
			if(ff == 0){
				return false;
			}
			var dd = parseInt($(this).css('left'));
			var ee = dd-635;
			$(this).stop().animate({left:ee}, 500);
		});
	});
	
	
/* 윈도우 스크롤에 따른 배경 페럴렉스*/
	$(window).scroll(function(){
		var winScrollTop = $(this).scrollTop();
		console.log(winScrollTop);
		if( winScrollTop >= 620&& winScrollTop<=1220){ // 숫자 300은 상황에 맞게 조절할 것.
			$(".redbg").stop().animate({top:winScrollTop}); // 숫자 -330은 상황에 맞게 조절할 것.
		}
		if(winScrollTop <=619){
			$(".redbg").css({top:620});
		}
	});



	$(window).scroll(function(){
		var winScrollTop = $(this).scrollTop();
		console.log(winScrollTop);
		if( winScrollTop >= 1620&& winScrollTop<=2540){ // 숫자 300은 상황에 맞게 조절할 것.
			$(".greenbg").stop().animate({top:winScrollTop-200}); // 숫자 -330은 상황에 맞게 조절할 것.
			}
		if(winScrollTop <=1619){
			$(".greenbg").css({top:1620});
		}
	});
});// $(function(){ 끝