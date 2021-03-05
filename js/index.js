let radioValue;
let radios = document.getElementsByName('filter-property');
let changeCatCss = document.getElementById("cat");
let css = document.getElementById('css');
let descriptions = document.querySelectorAll(".description .col");

for (let i = 0, length = radios.length; i < length; i++) {
  radios[i].addEventListener("click", function () {
    if (radios[i].checked) {
      radioValue = radios[i].value;
      css.value = radioValue;
      changeCatCss.setAttribute("style", radioValue);

      for (let j = 0; j < descriptions.length; j++) {
        if (i - 1 === j) {
          descriptions[j].setAttribute("style", "display: block;");
        }
        else {
          descriptions[j].setAttribute("style", "display: none;");
        }
      }

    }
    toTop();
  });
}

let apply = document.getElementById('apply');
apply.addEventListener("click", function () {
  let textareaCss = document.getElementById('css').value;
  changeCatCss.setAttribute("style", textareaCss);

  toTop();
});

let reset = document.getElementById('reset');
reset.addEventListener("click", function () {
  css.value = radioValue;
  changeCatCss.setAttribute("style", radioValue);

  toTop();
})

let toTopMobile = document.getElementById('toTopMobile');
toTopMobile.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})

function toTop() {
  if (window.outerWidth <= 375 || window.outerHeight <= 414) {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}

// dark mode
let dark = document.getElementById("dark");
dark.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  document.getElementById("css").classList.toggle("dark");
  document.getElementById("footer").classList.toggle("dark-footer");

  let codes = document.getElementsByTagName("code");
  for (let i = 0; i < codes.length; i++) {
    codes[i].classList.toggle("code");
  }
})