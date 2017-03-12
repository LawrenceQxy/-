let k = 0;
let lens = $('.mr_frUl ul li').length;
var Timer = null;
var isAnimated;
var isPrev;
$('.mr_frbox .mr_frBtnL').click(function () {
  if($('.mr_frUl ul').is(":animated")) {
		isAnimated = true;
	}else{
		isAnimated = false;
	}
  if (!isAnimated) {
    isPrev = true;
    k--;
    Tab();
  }
});
$('.mr_frbox .mr_frBtnR').click(function () {
  if($('.mr_frUl ul').is(":animated")) {
		isAnimated = true;
	}else{
		isAnimated = false;
	}
  if (!isAnimated) {
    isPrev = false;
    k++;
    Tab();
  }
});
function Tab () {
  let width = $('.mr_frUl ul li').first().width();
  console.log(k);
  // 不同页面尺寸时，显示的图片数量不同，轮播操作不同，在适配移动端页面的时候会造成一些问题
  if (window.innerWidth > 1080) {
    if (k == -1) {
      $('.mr_frUl ul li:gt('+(lens-5)+')').css({
        'position':'relative',
        'left':-width*lens
      })
    }
    if (k == 5) {
      $('.mr_frUl ul li:lt('+(lens-5)+')').css({
        'position':'relative',
        'left':width*lens
      })
    }
    $('.mr_frUl ul').stop().animate({
      left:-width*k
    },400,'linear',function () {
      if (k == -4) {
        $('.mr_frUl ul li:gt('+(lens-5)+')').css({position:'static'});
        $('.mr_frUl ul').css({left:-width*(lens-4)});
        k = lens-4;
      }
      if (k == lens) {
        $('.mr_frUl ul li:lt('+(lens-5)+')').css({position:'static'});
        $('.mr_frUl ul').css({left:0});
        k = 0
      }
    });
  }else if (window.innerWidth > 954) {
    if (k == -1) {
      $('.mr_frUl ul li:gt('+(lens-4)+')').css({
        'position':'relative',
        'left':-width*lens
      })
    }
    if (!isPrev && k >= 4) {
      $('.mr_frUl ul li:lt('+(lens-6)+')').css({
        'position':'relative',
        'left':width*lens
      })
    }
    $('.mr_frUl ul').stop().animate({
      left:-width*k
    },400,'linear',function () {
      if (k == -3) {
        $('.mr_frUl ul li:gt('+(lens-4)+')').css({position:'static'});
        $('.mr_frUl ul').css({left:-width*(lens-3)});
        k = lens-3;
      }
      if (k == lens) {
        $('.mr_frUl ul li:lt('+(lens-5)+')').css({position:'static'});
        $('.mr_frUl ul').css({left:0});
        k = 0
      }
    });
  }else if (window.innerWidth > 460) {
    if (k == -1) {
      $('.mr_frUl ul li:gt('+(lens-3)+')').css({
        'position':'relative',
        'left':-width*lens
      })
    }
    if (!isPrev && k >= 6) {
      $('.mr_frUl ul li:lt('+(lens-7)+')').css({
        'position':'relative',
        'left':width*lens
      })
    }
    $('.mr_frUl ul').stop().animate({
      left:-width*k
    },400,'linear',function () {
      if (k == -2) {
        $('.mr_frUl ul li:gt('+(lens-3)+')').css({position:'static'});
        $('.mr_frUl ul').css({left:-width*(lens-2)});
        k = lens-2;
      }
      if (k == lens) {
        $('.mr_frUl ul li:lt('+(lens-5)+')').css({position:'static'});
        $('.mr_frUl ul').css({left:0});
        k = 0
      }
    });
  }
}
$('.mr_frbox').mouseenter(function () {
  RemoveTimer();
});
$('.mr_frbox').mouseleave(function () {
  AddTimer ();
});
function AddTimer () {
  Timer = setInterval(function () {
    k++;
    Tab();
  },2000)
}
function RemoveTimer () {
  clearInterval(Timer);
}
