document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const themeSwitch = document.getElementById("theme-switch");
    const themeSwitch2 = document.querySelector(".second-theme-switch");
    const themeToggle = document.querySelector(".main-switch input");
    const cards = document.querySelectorAll(".card");
    const secondRowCards = document.querySelectorAll(".second-row .card");
    const thirdContainer = document.querySelector(".third-container");
    const bar_anima = document.querySelectorAll(".bar");
    const firstRow = document.querySelector(".first-row");
    const secondRow = document.querySelector(".second-row");
    const switchInput = document.querySelector(".switch input");
    const lightText = document.querySelector(".switch .text.light");
    const darkText = document.querySelector(".switch .text.dark");
    const buttontodown = document.getElementById("arrow-icon");
    const landingsSection = document.getElementById("landings");
    const leftImage = document.querySelector(".left-image-slider2");
    const rightImage = document.querySelector(".right-image-slider2");

    function toggleTheme(switchElement) {
        if (switchElement.checked) {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
            themeSwitch.checked = true;
            themeSwitch2.checked = true;
        } else {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
            themeSwitch.checked = false;
            themeSwitch2.checked = false;
        }
    }

    function checkBars() {
        const triggerBottom = (window.innerHeight / 6) * 3.5;
    
        console.log("triggerBottom:", triggerBottom);
    
        bar_anima.forEach((bar) => {
            const barTop = bar.getBoundingClientRect().top;
    
            console.log("barTop:", barTop);
    
            if (barTop < triggerBottom) {
                bar.classList.add("visible");
            } else {
                bar.classList.remove("visible");
            }
        });
    }
    

    function checkRows() {
        const triggerBottom = (window.innerHeight / 6) * 4;
        const firstRowTop = firstRow.getBoundingClientRect().top;
        const secondRowTop = secondRow.getBoundingClientRect().top;

        if (firstRowTop < triggerBottom) {
            firstRow.classList.add("visible");
        } else {
            firstRow.classList.remove("visible");
        }

        if (secondRowTop < triggerBottom) {
            secondRow.classList.add("visible");
        } else {
            secondRow.classList.remove("visible");
        }
    }

    function checkCards() {
        const triggerBottom = window.innerHeight / 2;

        if (
            thirdContainer.getBoundingClientRect().top < triggerBottom ||
            secondRowCards[0].getBoundingClientRect().top < triggerBottom
        ) {
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add("visible");
                }, index * 100);
            });
        }
    }

    switchInput.addEventListener("change", function () {
        if (switchInput.checked) {
            lightText.style.color = "white";
            darkText.style.color = "black";
        } else {
            lightText.style.color = "black";
            darkText.style.color = "white";
        }
    });

    buttontodown.addEventListener("click", function () {
        landingsSection.scrollIntoView({ behavior: "smooth" });
    });

    themeSwitch.addEventListener("change", function () {
        toggleTheme(themeSwitch);
    });

    themeSwitch2.addEventListener("change", function () {
        toggleTheme(themeSwitch2);
    });

    themeToggle.addEventListener("change", () => {
        if (themeToggle.checked) {
            body.classList.add("dark-mode");
            body.classList.remove("light-mode");
        } else {
            body.classList.add("light-mode");
            body.classList.remove("dark-mode");
        }
    });

    window.addEventListener("scroll", function () {
        const scrollTop = window.pageYOffset;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const moveAmount = (scrollTop / maxScroll) * 40;

        leftImage.style.transform = "translateY(" + moveAmount + "%)";
        rightImage.style.transform = "translateY(-" + moveAmount + "%)";
        checkBars();
        checkRows();
    });

    window.addEventListener("scroll", checkCards);

    body.classList.add("light-mode");
    checkBars();
    checkRows();
    checkCards();
});


document.addEventListener('DOMContentLoaded', function() {
    const bars = document.querySelectorAll('.bar');

    function checkBars() {
        const triggerBottom = window.innerHeight / 5 * 4;

        bars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;

            if (barTop < triggerBottom) {
                bar.classList.add('visible');
            } else {
                bar.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkBars);

    checkBars();
});