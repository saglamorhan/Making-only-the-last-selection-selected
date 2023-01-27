const buttons = document.querySelectorAll(
  ".rating-section-buttons .rating-button"
);
const submit = document.getElementsByClassName("btn-submit")[0];
let selected = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    selected = e.target.textContent;
    e.target.classList.add("selected");
    removeOtherSelection(selected);
  });
});

submit.addEventListener("click", (e) => {
  if (selected != "") {
    document.getElementsByClassName("card1")[0].style.display = "none";
    document.getElementsByClassName("card2")[0].style.display = "block";
    document.getElementsByClassName(
      "rating-info-content"
    )[0].textContent = `You selected ${selected} out of 5`;
  }
});

//Making only the last selection selected
function removeOtherSelection(selected) {
  for (var i = 0; i < buttons.length; i++) {
    if (i != selected - 1) {
      buttons[i].classList.remove("selected");
    }
  }
}
