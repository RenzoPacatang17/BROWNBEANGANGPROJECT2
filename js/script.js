const menubtn = document.getElementById("menubtn");
const links = document.getElementById("links");

menubtn.addEventListener("click", () => {
    links.classList.toggle("hidden");
});