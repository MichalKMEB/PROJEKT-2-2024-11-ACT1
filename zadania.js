document.addEventListener("DOMContentLoaded", function() {
    const themeSwitch = document.getElementById("theme-switch");
    const body = document.body;

    themeSwitch.addEventListener("change", function() {
        if (themeSwitch.checked) {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
        }
    });

    body.classList.add("light-mode");
});

