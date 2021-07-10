$(document).ready(function () {

  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > 70) {
      $(".nav-parent").addClass("nav-changeColor")
    }
    else {
      $(".nav-parent").removeClass("nav-changeColor")
    }
  });

  $(".hamburger").click(function () {
    $(".bar1").toggleClass("bar1-open")
    $(".bar2").toggleClass("bar2-open")
    $(".bar3").toggleClass("bar3-open")
    $(".nav-menu").toggleClass("menu-open")

    let scroll = $(window).scrollTop();
    if (scroll < 70) {
      $(".nav-parent").toggleClass("nav-changeColor")
    }
  })

  $(".nav-item").click(function () {

    $(".nav-menu").toggleClass("menu-open")
  })

  AOS.init();

  // $('.carousle').slick({
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   fade: true,
  //   cssEase: 'linear'
  // });
  $('.carousle').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:2500,
  });

  // ****************************************************************************************************************

  $('.gallary').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.gallary-nav'
  });
  $('.gallary-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.gallary',
    dots: true,
    centerMode: true,
    arrows: true,
    focusOnSelect: true
  });


})