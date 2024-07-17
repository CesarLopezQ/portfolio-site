window.onscroll = function() {fixedHeader()};

const header = main.getElementById("fixed-header");

const sticky = header.offsetTop;

function fixedHeader() {
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}