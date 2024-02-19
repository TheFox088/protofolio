document.addEventListener('DOMContentLoaded', function () {

    var button = document.querySelector(".toggle-button");
    var btnText = document.getElementById("btnText");
    var btnIcon = document.getElementById("btnIcon");

    button.addEventListener('click', function () {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            // changing background color light and icon to sun
            btnIcon.src = "image/sun.png";
            btnText.innerHTML = "Light";
        } else {
            // changing background color dark and icon to moon
            btnIcon.src = "image/moon.png";
            btnText.innerHTML = "Dark";
        }
        console.log("click");
    });
});

function submitForm(){
    //Handle form data here
    let yourInputValue = document.getElementById("yourInput").value;
    let nameValue = document.querySelector(".place_name").value;
    let emailValue = document.querySelector(".place_email").value;
    let projectValue = document.querySelector(".place_project").value;

    //prevent the default form submission
    return false;

}