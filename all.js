$(document).ready(function(){
  //navbar滑動效果
  $('.scroll_top').click(function(e){
    e.preventDefault()
    var target = $(this).attr('href')
    var targetPos = $(target).offset().top
    $('html').animate({scrollTop: targetPos},500)
  })
  //menu收放效果，不知道是怎麼回事
  $('.menu-text').on('click',function(e){
    e.preventDefault()
    $('body').toggleClass('showMenu')
  })
})



