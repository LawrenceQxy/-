// cust页面轮播图
let n = 0;
let len = $('.v-show ul li').length;
var timer = null;
var isAnimated;
// 右移
$('.cust .prev').click(function () {
  if($('.v-show ul').is(":animated")) {
		isAnimated = true;
	}else{
		isAnimated = false;
	}
  if (!isAnimated) {
    n--;
    tab();
  }
});
// 左移
$('.cust .next').click(function () {
  if($('.v-show ul').is(":animated")) {
		isAnimated = true;
	}else{
		isAnimated = false;
	}
  if (!isAnimated) {
    n++;
    tab();
  }
});
function tab () {
  let width = $('.v-show ul li').first().width();
  if (n == -1) {
    $('.v-show ul').css({
      'left':-width*(len-1)
    })
    n = 1
  }
  $('.v-show ul').stop().animate({
    left:-width*n
  },400,'linear',function () {
    if (n == len-1) {
      $('.v-show ul').css({
        'left':0
      });
      n = 0;
    }
  });
}
$('.v-show ul').mouseenter(function () {
  removeTimer();
})
$('.v-show ul').mouseleave(function () {
  addTimer();
})
$('.cust .prev').mouseenter(function () {
  removeTimer();
})
$('.cust .prev').mouseleave(function () {
  addTimer();
})
$('.cust .next').mouseenter(function () {
  removeTimer();
})
$('.cust .next').mouseleave(function () {
  addTimer();
})
function addTimer () {
  timer = setInterval(function () {
    n++;
    tab();
  },2000)
}
function removeTimer () {
  clearInterval(timer);
}
