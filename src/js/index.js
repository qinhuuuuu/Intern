import "../scss/index.scss";

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
var dropdownContent = document.getElementsByClassName("dropdown-content");
var dropdownOpen = false;
var main = document.querySelector('main');
var footer = document.querySelector('footer');
var dropbtn = document.querySelector('.dropbtn');
dropbtn.onclick = function () {
  let dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
  dropdownOpen = dropdown.classList.contains("show");
  if (dropdownOpen) {
    main.classList.add('hidden');
    footer.classList.add('hidden');
    dropbtn.classList.remove("text-white");
    dropbtn.classList.add("text-primary-1");
  } else {
    main.classList.remove('hidden');
    footer.classList.remove('hidden');
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var i;
    for (i = 0; i < dropdownContent.length; i++) {
      dropdownOpen = dropdownContent[i];
      if (dropdownOpen.classList.contains('show')) {
        dropdownOpen.classList.remove('show');
        dropdownOpen = false;
        dropbtn.classList.remove("text-white");
        dropbtn.classList.add("text-primary-1");
        main.classList.remove('hidden');
        footer.classList.remove('hidden');
      }
    }
  }
}



main.addEventListener('scroll', function () {
  if (dropdownOpen) {
    main.classList.add('hidden');
  }
});

