$(document).ready (function(){

var stickyOffset = $('.header-container').offset().top;

$(window).scroll(function(){
  var sticky = $('.header-container'),
      scroll = $(window).scrollTop();

  if (scroll >= stickyOffset) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

$('#box1').click(function(){
        $('.target1').show();
        $('.quote-text1').show();
        $('.target2').hide();
        $('.target3').hide();
        $('.quote-text2').hide();
        $('.quote-text3').hide();
        $('.click-mess2').show();
        $('.click-mess3').show();
        $('.selector3').hide();
        $('.selector2').hide();
        $('.selector1').show();
        $('.click-mess1').hide();
});

    $('#box2').click(function(){
        $('.target2').show();
        $('.quote-text2').show();
        $('.target1').hide();
        $('.target3').hide();
        $('.quote-text').hide();
        $('.quote-text3').hide();
        $('.click-mess1').hide();
        $('.click-mess2').hide();
        $('.selector2').show();
        $('.selector1').hide();
        $('.click-mess1').show();
        $('.click-mess3').show();
        $('.selector3').hide();
        $('.quote-text1').hide();
        $('.quote-text2').show();
});

    $('#box3').click(function(){
        $('.target3').show();
        $('.target1').hide();
        $('.target2').hide();
        $('.quote-text2').hide();
        $('.selector2').hide();
        $('.selector1').hide();
        $('.selector3').show();
        $('.click-mess1').show();
        $('.click-mess2').show();
        $('.click-mess3').hide();
        $('.quote-text1').hide()
        $('.quote-text3').show()
});

    $('.click-mess1').click(function(){
    $(this).hide();
    $('.selector1').show();
    $('.click-mess3').show();
    $('.click-mess2').show();
    $('.selector3').hide();
    $('.selector2').hide();
    $('.quote-text1').show();
    $('.quote-text2').hide();
    $('.quote-text3').hide();
    $('.target1').show();
    $('.target2').hide();
    $('.target3').hide();
});


$('.click-mess2').click(function(){
    $(this).hide();
    $('.selector2').show();
    $('.selector1').hide();
    $('.click-mess1').show();
    $('.selector3').hide();
    $('.click-mess3').show();
    $('.quote-text2').show();
    $('.quote-text1').hide();
     $('.quote-text2').show();
    $('.quote-text3').hide();
    $('.target2').show();
    $('.target1').hide();
    $('.target3').hide();

});

$('.click-mess3').click(function(){
    $(this).hide();
    $('.selector3').show();
    $('.click-mess2').show();
    $('.selector2').hide();
    $('.selector1').hide();
    $('.click-mess1').show();
    $('.quote-text2').hide();
    $('.quote-text1').hide();
    $('.quote-text3').show();
    $('.target3').show();
    $('.target1').hide();
    $('.target2').hide();

});

    });

