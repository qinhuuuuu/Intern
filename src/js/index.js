import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.js';
import "../scss/index.scss";


window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
var main = document.querySelector('main');
var footer = document.querySelector('footer');
var dropdownContent = document.getElementsByClassName("dropdown-content");
var dropdownOpen = false;
var dropbtn = document.querySelector('.dropbtn');
dropbtn.onclick = function () {
  for (let i = 0; i < dropdownContent.length; i++) {
    dropdownContent[i].classList.toggle("show");
    dropdownOpen = dropdownContent[0].classList.contains("show");
  }
  // Ẩn hiện main và footer
  main.classList.toggle('hidden', dropdownOpen);
  footer.classList.toggle('hidden', dropdownOpen);
  // Đổi màu dropbtn
  dropbtn.classList.toggle("text-primary-1", dropdownOpen);
  dropbtn.classList.toggle("text-white", !dropdownOpen);
}
$(document).ready(function () {
  $('.slider-kinh-nghiem-lam-viec').slick({
    infinity: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    mobileFirst: true,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: false,
    customPaging: function (slider, i) {
      return '<div class="h-[5px] w-5 bg-neutral-2-300 rounded"></div>';
    },
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  });
});
$(document).ready(function () {
  $('.slider-khach-hang-noi-gi').slick({
    arrows: false,
    dots: true,
    mobileFirst: true,
    customPaging: function (slider, i) {
      return '<div class="h-1.5 w-1.5 bg-dot rounded"></div>';
    },
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: false,
          arrows: true,
          prevArrow: $('.twi-19-arrow-back-fill'),
          nextArrow: $('.twi-19-arrow-forward-fill')
        }
      }
    ]
  });
});