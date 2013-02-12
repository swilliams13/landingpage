$(document).ready(function() {


//Count social media icons and set alignment
SocialSize = $('.social ul li').size()*60;
$('.social').css('width',SocialSize);

//Content align to middle 
ReAlign();


//Video Loader
//******** IF YOU WANT TO PLAY VIDEO ON BACKGROUND, UNCOMMENT THE FOLLOWING CODES ********//
//$('body').videoBG({
//    position:"fixed",
//    zIndex:0,
//    mp4:'videos/video3.mp4',
//    ogv:'videos/video3.mp4',
//    webm:'videos/video3.mp4',
//    poster:'img/bg2.jpg',
//    opacity:1,
//    fullscreen:true
//});

//$('.videoDivider').css('margin-top', ($(window).height()-700)/2);
//$('.videoDivider').css('margin-left', ($(window).width()-650)/2);
//******** IF YOU WANT TO PLAY VIDEO ON BACKGROUND, UNCOMMENT THE ABOVE CODES ********//

//******** IF YOU WANT TO PLAY VIDEO ON BACKGROUND, COMMENT THE ABOVE LINE ********//
$('.videoDivider').hide();

//Video Loader End


$(".joinusButton").click(function() {
  if (validateEmail($('.mail').val()) === false ) {$('.formvalidate').fadeIn();}
  else {
  $.ajax({
  url: 'mail.php?email='+$('.mail').val(),
  success: function(data) {
    if (data == "OK")
    {$('.formsent').fadeIn();}
  }
});
      $('.formvalidate').fadeOut();}
});


});

$(window).resize(function() {
  ReAlign();
});

function ReAlign() {   
$('.main').css('margin-top',$(window).height()/2-300);   
}

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 