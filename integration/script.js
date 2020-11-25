$(".collapse").on("show.bs.collapse", function (event) {
  const collapse = event.target;
  const h1 = $("#title");
  const id = "#" + collapse.id;
  const text = $(`[data-target="${id}"]`).text();
  h1.text(text);
});

var ctxGraph1 = document.getElementById("canvasGrap1");
var graph1 = new Chart(ctxGraph1, {
  type: "bar",
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  data: {
    datasets: [
      {
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        data: [20, 10, 10, 10, 10, 10, 30],
      },
    ],
  },
});
