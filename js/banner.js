let x = 0;
let keyer;
let amount = $('.bd ul li').length;
$('.hd ul li').each(function (index,ele) {
  $(ele).click(function () {
    $('.hd ul li').removeClass('on');
    $(ele).addClass('on');
    x = index;
    change();
  })
});
$('.bd ul li').css({'width':window.innerWidth,height:window.innerHeight});
let height = $('.bd ul li').first().height();
$('.bd ul').css({position:'relative'});
function change () {
  $('.bd ul').animate({'top':-x*height},1000);
  $('.hd ul li').removeClass('on');
  $('.hd ul li:eq('+x+')').addClass('on');
  switch (x) {
    case 0:
      $("#a3").addClass('animation3');
      $("#a1").removeClass('animation1');
      $("#a2").removeClass('animation2');
      $(".banner3 .another").removeClass('animation2_1');
      break;
    case 1:
      $("#a1").addClass('animation1');
      $("#a3").removeClass('animation3');
      $("#a2").removeClass('animation2');
      $(".banner3 .another").removeClass('animation2_1');
      break;
    case 2:
    $("#a2").addClass('animation2');
    $(".banner3 .another").addClass('animation2_1');
    $("#a3").removeClass('animation3');
    $("#a1").removeClass('animation1');
      break;
    case 3:
      $("#a3").addClass('animation3');
      $("#a1").removeClass('animation1');
      $("#a2").removeClass('animation2');
      $(".banner3 .another").removeClass('animation2_1');
      break;
  }
}
keyer = setInterval(function () {
  x++;
  if (x == amount-1) {
    $('.bd ul li').first().css({
      position:'relative',
      top:height*amount
    });
  }
  if (x > amount) {
    $('.bd ul li').first().css({
      position:'static'
    });
    $('.bd ul').css({top:'0'})
    x = 1
  }
  change()
},2500)
$('.hd ul li').mouseenter(function () {
  clearInterval(keyer)
});
$('.hd ul li').mouseleave(function () {
  keyer = setInterval(function () {
    x++;
    if (x == amount-1) {
      $('.bd ul li').first().css({
        position:'relative',
        top:height*amount
      });
    }
    if (x > amount) {
      $('.bd ul li').first().css({
        position:'static'
      });
      $('.bd ul').css({top:'0'})
      x = 1
    }
    change()
  },2500)
})
