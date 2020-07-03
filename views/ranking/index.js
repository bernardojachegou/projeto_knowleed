const open = document.querySelector(".menubutton")

const menu = document.querySelector("#menu")
const close = document.querySelector(".closebutton")

open.addEventListener("click", () => {
    menu.classList.remove("hide")
})

close.addEventListener("click", () => {
    menu.classList.add("hide")
})