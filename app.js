const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
navToggle.onclick = function (e) {
e.preventDefault();
nav.classList.toggle("show");
console.log(nav.classList.value);
};