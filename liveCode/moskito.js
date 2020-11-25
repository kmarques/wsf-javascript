const root = document.getElementById("root");
root.style.position = "fixed";
root.style.height = "30px";
root.style.width = "30px";
root.style.backgroundColor = "red";
root.addEventListener("mouseenter", function (event) {
  event.target.style.top = event.y + 10 + "px";
  event.target.style.left = event.x + 10 + "px";
});
