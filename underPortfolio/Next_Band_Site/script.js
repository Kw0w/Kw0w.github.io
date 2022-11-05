//Navbar
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-element");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");
const menuElement = document.querySelectorAll(".menu-element");
const logoElement = document.querySelector(".logo");
const footer = document.querySelector("#footer");
const main = document.querySelector("#main");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        logoElement.style.display = "block";
        menuIcon.style.display = "block";
        footer.style.display = "block";
        main.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        logoElement.style.display = "none";
        menuIcon.style.display = "none";
        footer.style.display = "none";
        main.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function (menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)
//Button to top
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//Add active site
(function () {
    var current = location.pathname.split('/')[1];
    if (current === "") return;
    var menuItems = document.querySelectorAll('.menu-item a');
    for (var i = 0, len = menuItems.length; i < len; i++) {
        if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
            menuItems[i].className += "is-active";
        }
    }
})();