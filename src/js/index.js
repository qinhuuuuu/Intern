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
var dropbtn = document.querySelector('.dropbtn');

window.addEventListener("load", function () {
  checkScreenSize();
});

// Kiểm tra kích thước màn hình khi thay đổi kích thước trình duyệt
window.addEventListener("resize", function () {
  checkScreenSize();
});

function checkScreenSize() {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (screenWidth > 1280) {
    cancelMenu();
  } else {
    dropbtn.onclick = openMenu;

  }
}
var isOpenMenu = false;
function cancelMenu() {
  if (dropdownContent[0].classList.contains("show")) {
    for (let i = 0; i < dropdownContent.length; i++) {
      dropdownContent[i].classList.remove("show");
    }
    if (main.classList.contains('hidden')) {
      dropbtn.classList.remove('text-primary-1');
      dropbtn.classList.add('text-white');
      main.classList.remove('hidden');
      footer.classList.remove('hidden');
    }
  }
}
function openMenu() {
  for (let i = 0; i < dropdownContent.length; i++) {
    dropdownContent[i].classList.toggle("show");
  }
  isOpenMenu = dropdownContent[0].classList.contains('show');

  dropbtn.classList.toggle('text-primary-1', isOpenMenu);
  dropbtn.classList.toggle('text-white', !isOpenMenu);
  main.classList.toggle('hidden', isOpenMenu);
  footer.classList.toggle('hidden', isOpenMenu);
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
    infinity: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.twi-19-arrow-back-fill'),
    nextArrow: $('.twi-19-arrow-forward-fill'),
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
        }
      }
    ]
  });
});