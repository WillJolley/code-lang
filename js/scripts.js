window.onload = function () {
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const ans1 = document.querySelector("input[name='ans1']:checked").value;
    const ans3 = document.querySelector("input[name='ans3']:checked").value;

    const javascript = document.getElementById("javascript")
    javascript.setAttribute("class", "hidden");
    const ruby = document.getElementById("ruby");
    ruby.setAttribute("class", "hidden");
    const python = document.getElementById("python");
    python.setAttribute("class", "hidden");

    if (ans1 === "front") {
      javascript.removeAttribute("class");
    } else if (ans3 === "edu") {
      python.removeAttribute("class");
    } else if (ans3 === "webApps") {
      ruby.removeAttribute("class");
    }
  });
}