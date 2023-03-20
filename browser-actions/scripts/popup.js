(function () {
  $textDisplay = document.getElementById("textDisplay");
  $textEntry = document.getElementById("textEntry");

  $textEntry.addEventListener("keyup", (event) => {
    console.log("events", event);
    $textDisplay.innerHTML = event.target.value;
  });
})();
