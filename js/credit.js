// dark mode
let dark = document.getElementById("dark");
dark.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  document.getElementById("footer").classList.toggle("dark-footer");
})