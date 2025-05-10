(function () {
  //

  let button = document.querySelector("#quoteBtn");
  let formPopup = document.querySelector("#formPopup");

  function toggleForm() {
    document.getElementById("formPopup").style.display = "grid";
  }

  function closeFormIfClickedOutside(event) {
    if (event.target.className === "popup") {
      document.getElementById("formPopup").style.display = "none";
    }
  }

  button.addEventListener("click", toggleForm);
  formPopup.addEventListener("click", closeFormIfClickedOutside);
})();
