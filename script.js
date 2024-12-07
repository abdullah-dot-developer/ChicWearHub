const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
const cutIcons = document.querySelectorAll("#cut");
const pro = document.querySelector(".pro")




if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    })
}
if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    })
}

function cutAll() {
    cut.parentElement.style.display = "none";
}

cutIcons.forEach(cut => {
    cut.addEventListener("click", () => {
        cut.parentElement.remove();
    })
})

// const handleProClick = window.location.href = "sproduct.html"

// pro.forEach(pro => {
//     addEventListener("click", handleProClick)
// })
