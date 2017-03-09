let k = 0;
let lens = $('.mr_frUl ul li').length;
var timer = null;
var isAnimated;
$('.mr_frbox .mr_frBtnL').click(function () {
  if($('.mr_frUl ul').is(":animated")) {
		isAnimated = true;
	}else{
		isAnimated = false;
	}
  if (!isAnimated) {
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
    k++;
    Tab();
  }
});
function Tab () {
  let width = $('.mr_frUl ul li').first().width();
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
}
$('.mr_frbox').mouseenter(function () {
  RemoveTimer();
});
$('.mr_frbox').mouseleave(function () {
  AddTimer ();
});
function AddTimer () {
  timer = setInterval(function () {
    k++;
    Tab();
  },2000)
}
function RemoveTimer () {
  clearInterval(timer);
}
