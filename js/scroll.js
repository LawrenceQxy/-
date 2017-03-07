var isAnimated = false;
let m = null;
let state = 5;
let incr = 902;
var timer = null;
$('.case-top-right span').text(incr);
//header下的点击事件
$('#header ul li').each(function (index,ele) {
	//防止出现绑定多次事件
	$(ele).off().click(function() {
		//判断当前container是否在运动中
		if($('#container').is(":animated")) {
			isAnimated = true;
		}else{
			isAnimated = false;
		}
		//当container正在运动时，不执行后续代码
		if (isAnimated) {
			return;
		}
		//让m=跳转到的页面的值
		m = $('#header ul li').index(this);
		$('#header ul li').children().removeClass('active');
		$(this).children().addClass('active');
		if (m != 2) {
			//当container运动到位后再执行该屏的事件
			$('#container').stop().animate({'top':-index*window.innerHeight},1000,function () {
				scroll();
			});
		}else{
			$('#container').stop().animate({'top':-index*window.innerHeight},1000);
			scroll();
		}
	})
})
$(document).off().mousewheel(function(event,delta) {
	//判断当前container是否在运动中
	if($('#container').is(":animated")) {
		isAnimated = true;
	}else{
		isAnimated = false;
	}
	//当container没有运动时执行
	if (!isAnimated) {
		//delta == -1为向下滚，delta == 1为向上滚；
		if (delta == -1) {
			m++;
			if (m > $('#container>div').length-1) {
				m = $('#container>div').length-1;
			}else{
				var t = -m*window.innerHeight;
				$('#container').animate({'top':t +'px'},1000);
			}
		}
		if(delta == 1) {
			m--;
			if (m < 0) {
				m = 0;
			}else{
				var t = -m*window.innerHeight;
				$('#container').animate({'top':t +'px'},1000);
			}
		}
		//切换按钮状态
		$('#header ul li').children().removeClass('active');
		$('#header ul li').eq(m).children().addClass('active');
	}
	scroll();
})
//滚动执行内容
function scroll () {
	if (m == 0) {
		$('#header').addClass('header_first').removeClass('header_down');
		$('#header .logo img').attr('src','images/logob.png')
		$('.hotline img').attr('src','images/telb.png');
		$('.hotline span').css('color','#2d93f0');
	}else{
		$('#header').addClass('header_down').removeClass('header_first');
		$('#header .logo img').attr('src','images/logow.png')
		$('.hotline img').attr('src','images/telw.png');
		$('.hotline span').css('color','#fff');
	}
	if (m == 1) {
		$('.server_cont1').each(function (index,ele) {
			setTimeout(function () {
				$('.server_cont1').eq(index).animate({'left':'0px','top':'40%','opacity':'1'},1000);
			},500-index*200)
		})
		$('.server_cont2').animate({'left':'0px','top':'40%','opacity':'1'},1000);
		$('.server_cont3').each(function (index,ele) {
			setTimeout(function () {
				$('.server_cont3').eq(index).animate({'left':'0px','top':'40%','opacity':'1'},1000);
			},300+index*200)
		})
	}else{
		$('.server_cont1').animate({'left':'-250px','opacity':'0'},1000);
		$('.server_cont2').animate({'top':'0','opacity':'0'},1000);
		$('.server_cont3').animate({'left':'250px','opacity':'0'},1000);
	}
	if (m == 2) {
		clearInterval(timer);
		timer = setInterval(incre,30)
		setTimeout(function(){
			$('.case ul').removeClass('case_ul').addClass('case_ul_hover');
		},1000)
	}else{
		setTimeout(function(){
			incr = 800;
		},1000)
		$('.case ul').removeClass('case_ul_hover').addClass('case_ul');
	}
	if (m == 3) {
		$('.teachshow').removeClass('cont-right-out').addClass('cont-right-in');
	}else {
		$('.teachshow').removeClass('cont-right-in').addClass('cont-right-out')
	}
	if (m == 4) {
		$('.news-list').addClass('news-list-in')
	}else{
		$('.news-list').removeClass('news-list-in')
	}
	if (m == 5) {
		$('.v_out_p').addClass('cont-right-in').removeClass('cont-right-out');
		setTimeout(function () {
			$('.v_out_p').removeClass('cont-right-in');
			addTimer();
		},1100)
	}else {
		$('.v_out_p').addClass('cont-right-out');
		setTimeout(function () {
			removeTimer();
		},800)
	}
	if (m == 6) {
		$('div.connect').animate({'left':'0px','opacity':'1'},1000);
		$('div.address').animate({'left':'0px','opacity':'1'},1000);
		$('div.email').animate({'left':'0px','opacity':'1'},1000);
		$('img.cont-right').addClass('cont-right-in').removeClass('cont-right-out');
	}else{
		$('div.connect').animate({'left':'-250px','opacity':'0'},1000);
		$('div.address').animate({'left':'-650px','opacity':'0'},1000);
		$('div.email').animate({'left':'-1050px','opacity':'0'},1000);
		$('img.cont-right').addClass('cont-right-out').removeClass('cont-right-in');
	}
}
function incre(){
	if(incr < 1532){
		incr += randomNum(5,20);
	}else{
		incr = 1532;
		clearInterval(timer);
	}
	$('.case-top-right span').text(incr);
}
function randomNum(min,max){
	var random = Math.random()*(max - min) +min;
	random = Math.round(random);
    return random;
}
