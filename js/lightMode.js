// Lógica para que se vea el modo claro primero

// document.addEventListener("DOMContentLoaded", () => {
//     const darkModeBtn = document.querySelector(".dark-mode-btn");
//     const icon = document.getElementById("icon");

//     darkModeBtn.addEventListener("click", () => {
//         const body = document.querySelector("body");
//         body.classList.toggle("dark-mode");
//         changeIcon();
//     });

//     function changeIcon() {
//         if (icon.src.includes("sun.svg")) {
//             icon.src = "/assets/moon.svg";
//         } else {
//             icon.src = "/assets/sun.svg";
//         }
//     }
// });


// Lógica para que se vea el dark mode primero

document.addEventListener("DOMContentLoaded", () => {
    const darkModeBtn = document.querySelector(".dark-mode-btn");
    const icon = document.getElementById("icon");
    const body = document.querySelector("body");
    body.classList.add("dark-mode")
    darkModeBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        changeIcon();
    });

    function changeIcon() {
        if (icon.src.includes("sun.svg")) {
            icon.src = "/assets/moon.svg";
        } else {
            icon.src = "/assets/sun.svg";
        }
    }
});




