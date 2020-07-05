const navDesktop = document.getElementById("nav-desktop");
const navButton = document.getElementById("nav-btn");

navButton.addEventListener('click', () => {
    if (navDesktop.style.display === "block") {
        navDesktop.style.display = "none";
    } else {
        navDesktop.style.display = "block";
    }
});