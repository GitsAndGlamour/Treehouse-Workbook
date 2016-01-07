$(".animsition").animsition({
  inClass: 'fade-in-right-lg',
  outClass: 'fade-out-right-lg',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500
});

$('.header').sticky({
  getWidthFrom: '.container',
  responsiveWidth: true
});

$('.header').on('sticky-start', function () {
  $('.description').html('We build <strong>great</strong> apps');
});

$('.header').on('sticky-end', function () {
  $('.description').html('We build apps');
});

$('.work').sticky({
  topSpacing: 60,
  getWidthFrom: '.container',
  responsiveWidth: true
});
$('.work').on('sticky-start', function() {
  $(this).append(' <a href="mailto:email@website.com" class="email-text">Email&nbsp;us</a>');
});
$('.work').on('sticky-end', function() {
    $('.email-text').remove();
});
$(".team h4").sticky({
    topSpacing: 50,
    getWidthFrom: '.container',
    responsiveWidth: true
});
$('.team h4').on('sticky-start', function() {
    $(this).html('United we stand <strong class="strong-text">together</strong> divided we fall');
    $("body").css("background-color", "#333");
});
$('.team h4').on('sticky-end', function() {
    $(this).html('United we stand divided we fall');
    $("body").css("background-color", "#fff");

});
