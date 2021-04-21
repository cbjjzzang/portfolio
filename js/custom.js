$(document).ready(function(){   
	$('#gnb li').mouseover(function(){
		$(this).siblings().removeClass('on');
		$(this).addClass('on');
	});

	$('h1').on('click', function(){
		$('.click').stop().fadeOut();
		$(this).stop().animate({'top':'-110px', 'left':0},1800, 'easeInOutBack');
		
		$('address').stop().animate({'right':0, 'bottom':'-90px'}, 1800, 'easeInOutBack');
		$('.top').stop().delay(2200).animate({'width':'100%'}, 900, function(){
			$('.right').stop().animate({'height':'100%'}, 900, function(){
				$('.bottom').stop().animate({'width':'100%'}, 900, function(){
					$('.left').stop().animate({'height':'100%'}, 900, function(){
						$('.box1').addClass('on');
						$('.top, .left, .right, .bottom').stop().delay(2000).animate({'opacity':0});
						$('#gnb').stop().delay(1500).animate({'top':'-35px', 'opacity':'1'}, 1800, 'easeOutBack');
						$('.name').stop().delay(2000).animate({'left':'-200px', 'opacity':'1'}, 1800, 'easeOutBack');
						$('#position').stop().delay(2200).animate({'right':'50'}, 1800, 'easeOutBack');
						$('.date').stop().delay(2500).animate({'top':'0'}, 1800, 'easeOutBack');
						$('.clock').stop().delay(2800).animate({'top':'20'}, 1800, 'easeOutBack');
						$('#page2, #page3, #page4').stop().delay(2500).fadeIn();
					});
				});
			});
		});
	});
	
	var ht = $(window).height();
	$('#page1').height(ht);
	console.log(ht);
	
	$('#gnb li').click(function(){
		var ht = $(window).height();
		var i = $(this).index();
		
		var nowTop = i*ht;
		$('html, body').stop().animate({'scrollTop':nowTop}, 1400, 'easeOutBounce');
	});
	
	
	$(window).on('scroll', function(){
		var ht = $(window).height();
		var scroll = $(window).scrollTop();
		
		for(var i=0; i<4; i++){
			if(scroll>=ht*i && scroll<=ht*(i+1)){
				$('#position li').removeClass();
				$('#position li').eq(i).addClass('on');
			}
		}
	});
	
	$('#position li span').click(function(){
		var ht = $(window).height();
		var i = $(this).parent().index();
		console.log(i);
		
		var nowTop = i*ht;
		$('html, body').stop().animate({'scrollTop':nowTop}, 1400, 'easeOutBounce', function(){
			$('#position li').removeClass();
			$('#position li').eq(i).addClass('on');
		});
	});
	
	$('body>div').on('mousewheel', function(e, delta){
		if(delta > 0){
			m = $(this).prev().offset().top;
			$('html, body').stop().animate({scrollTop:m});
		} else{
			m = $(this).next().offset().top;
			$('html, body').stop().animate({scrollTop:m});
		}
	});
	
	var timer = setInterval(function(){
		
		var today = new Date();
		var day = today.getDay();
		var dd = today.getDate();
		var mm = today.getMonth() + 1; 
		var yyyy = today.getFullYear();
		if (dd < 10) {
		  dd = '0' + dd;
		}
		if (mm < 10) {
		  mm = '0' + mm;
		}
		var nowDay = "";
		switch(day){
        case 0:
            nowDay = "Sun";
            break;
        case 1:
            nowDay = "Mon";
            break;
        case 2:
            nowDay = "Tue";
            break;
        case 3:
            nowDay = "Wed";
            break;
        case 4:
            nowDay = "Thu";
            break;
        case 5:
            nowDay = "Fri";
            break;
        case 6:
            nowDay = "Sat";
            break;
		}
		$('.date span').eq(0).text(yyyy);
		$('.date span').eq(1).text(mm);
		$('.date span').eq(2).text(dd);
		$('.date span').eq(3).text(nowDay);
		
		var now = new Date();
		var hr = now.getHours();
		var min = now.getMinutes();
		var sec = now.getSeconds();
		
		//시간이 한자리 수 일때 앞에 0 붙이기
		if(hr>=10){
			hNum = hr;
		}else{
			hNum = '0'+hr;
		};
		
		//분이 한자리 숫자일 때 앞에 0 붙이기
		if(min >=10){
			mNum = min;
		}else{
			mNum = '0'+min;
		};
		
		//초가 한자리 숫자일 때 앞에 0 붙이기
		if(sec >=10){
			sNum = sec;
		}else{
			sNum = '0'+sec;
		};
		
		//p 태그 안에 시간 출력
		$('.two span').eq(0).text(hNum);
		$('.two span').eq(1).text(mNum);
		$('.two span').eq(2).text(sNum);
	}, 1000);
	
	$('.ing').click(function(e){
		e.preventDefault();
	})
}); // document end