function openMenu() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeMenu() {
    document.getElementById("mySidenav").style.width = "0";
}

console.log(document.getElementById("current-year").textContent = new Date().getFullYear());

var collapse = document.getElementsByClassName("collapser");
var i;

for (i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}   