window.onload = function () {
  function handleRadio(event) {
    event.preventDefault();
    const ans1 = document.querySelector("input[name='ans1']:checked").value;
    const ans2 = document.querySelector("input[name='ans2']:checked").value;
  }

  window.addEventListener("load", function() {
    document.getElementById("quiz").addEventListener("submit", handleRadio);

    const javascript = document.getElementById("javascript")
    javascript.setAttribute("class", "hidden");
    const front = document.getElementById("front");

    if (ans1 === front) {
      javascript.removeAttribute("class");
    }
  });
}