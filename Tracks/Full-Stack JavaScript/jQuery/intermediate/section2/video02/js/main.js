$(".animsition").animsition({
  inClass: 'fade-in-right-lg',
  outClass: 'fade-out-right-lg',
  linkElement: 'header a',
  inDuration: 750,
  outDuration: 500
});
$(".header").sticky();
$(".header").on('sticky-start', function () {
    $(".description").html('We build <strong>great</strong> apps!');
});
$(".header").on('sticky-end', function () {
    $(".description").html('We build apps');
});
$(".grid-full h5").sticky();
$(".grid-full h5").on('sticky-start', function () {
    $(this).css("top", "50px");
    $(this).html('Want us to work on your project? <a href="#">Email us!</a>');
});
$(".grid-full h5").on('sticky-end', function () {
    $(this).html('Want us to work on your project?');
});
