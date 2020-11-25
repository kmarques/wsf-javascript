const root = document.getElementById("root");

const table = document.createElement("table");
const tbody = document.createElement("tbody");

for (let i = 0; i < 4; i++) {
  const tr = document.createElement("tr");
  for (let j = 0; j < 4; j++) {
    const td = document.createElement("td");
    const text = document.createTextNode("test");
    td.addEventListener("click", function (event) {
      const elemClicked = event.target;
      const value = elemClicked.innerText;
      elemClicked.innerText = "";
      const input = document.createElement("input");
      input.value = value;
      input.addEventListener("blur", function (event) {
        const inputBlured = event.target;
        const value = inputBlured.value;
        const text = document.createTextNode(value);
        input.parentNode.appendChild(text);
        input.parentNode.removeChild(input);
      });
      elemClicked.appendChild(input);
      input.focus();
    });

    td.appendChild(text);
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
}

table.appendChild(tbody);
root.appendChild(table);
