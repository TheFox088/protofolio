document.addEventListener('DOMContentLoaded', function () {

    let button = document.querySelector(".toggle-button");
    let btnText = document.getElementById("btnText");
    let btnIcon = document.getElementById("btnIcon");

    button.addEventListener('click', function () {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            // changing background color light
            btnIcon.src = "image/sun.png";
            btnText.innerHTML = "Light";
        } else {
            // changing background color dark 
            btnIcon.src = "image/moon.png";
            btnText.innerHTML = "Dark";
        }
    });
});