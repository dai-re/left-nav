const opennav = document.getElementById("left_nav");
const body = document.getElementById("body");
function openNav() {opennav.classList.toggle("active");}
document.addEventListener("click", function handleClickOutsideOpennav(event) {
if (!opennav.contains(event.target)) {opennav.classList.remove("active");}});
