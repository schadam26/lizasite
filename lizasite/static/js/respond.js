var contentSize = $(".content-container").width()
var contentRatio = $(window).width() / 1440
$(".image-grid-container").css('width', contentSize*.9 + 'px');

$(".image").css('height', contentRatio*460 + 'px');
$(".image").css('width', contentRatio*290 + 'px');



if ($(window).width() < 700) {
  $(".menu-option").css('font-size','18px');
  $(".name-title").css('font-size','26px');
  $(".image-grid-container").css("grid-template-columns","auto");
  $(".contact-container").css('width','70%');
  $(".contact-item").css('font-size','14px');
  $(".headshot").css('width','170px');
  $(".headshot").css('height','170px');
  $(".about-par").css('width', '75%');
  var contentSize = $(".content-container").width()
  var contentRatio = $(window).width() / 700
  $(".image-grid-container").css('width', contentSize*.9 + 'px');
  $(".image").css('height', contentRatio*460*1.2 + 'px');
  $(".image").css('width', contentRatio*290*1.2 + 'px');
} else if ($(window).width() < 1200) {
  $(".menu-option").css('font-size','22px');
  $(".name-title").css('font-size','30px');
  $(".contact-container").css('width','50%');
  $(".contact-item").css('font-size','16px');
  $(".headshot").css('width','200px');
  $(".headshot").css('height','200px');
  $(".about-par").css('width', '65%');
}
else {
  $(".menu-option").css('font-size','22px');
  $(".name-title").css('font-size','32px');
  $(".image-grid-container").css("grid-template-columns","auto auto auto")
  $(".contact-container").css('width','35%');
  $(".contact-item").css('font-size','16px');
  $(".headshot").css('width','250px');
  $(".headshot").css('height','250px');
  $(".about-par").css('width', '50%');
};

$(window).resize(function() {
  var contentSize = $(".content-container").width()
  var contentRatio = $(window).width() / 1440
  $(".image-grid-container").css('width', contentSize*.9 + 'px');
  $(".image").css('height', contentRatio*460 + 'px');
  $(".image").css('width', contentRatio*290 + 'px');
  if ($(window).width() < 700) {
    $(".menu-option").css('font-size','18px');
    $(".name-title").css('font-size','26px');
    $(".image-grid-container").css("grid-template-columns","auto");
    $(".contact-container").css('width','70%');
    $(".contact-item").css('font-size','14px');
    $(".headshot").css('width','170px');
    $(".headshot").css('height','170px');
    $(".about-par").css('width', '75%');
    var contentSize = $(".content-container").width()
    var contentRatio = $(window).width() / 700
    $(".image-grid-container").css('width', contentSize*.9 + 'px');
    $(".image").css('height', contentRatio*460*1.2 + 'px');
    $(".image").css('width', contentRatio*290*1.2 + 'px');
  }else if ($(window).width() < 1200) {
    $(".menu-option").css('font-size','22px');
    $(".name-title").css('font-size','30px');
    $(".image-grid-container").css("grid-template-columns","auto auto auto")
    $(".contact-container").css('width','50%');
    $(".contact-item").css('font-size','16px');
    $(".headshot").css('width','200px');
    $(".headshot").css('height','200px');
    $(".about-par").css('width', '65%');
  }else if ($(window).width() >= 1200){
    $(".menu-option").css('font-size','22px');
    $(".name-title").css('font-size','32px');
    $(".image-grid-container").css("grid-template-columns","auto auto auto")
    $(".contact-container").css('width','35%');
    $(".contact-item").css('font-size','16px');
    $(".headshot").css('width','250px');
    $(".headshot").css('height','250px');
    $(".about-par").css('width', '50%');
  }
});
