// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("#darkModeButton");
    const body = document.querySelector("body");

    button.addEventListener("click", function () {
        body.classList.toggle("darkMode");
    });
});
