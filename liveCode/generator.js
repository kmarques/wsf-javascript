const root = document.getElementById("root");

const table = document.createElement("table");
const tbody = document.createElement("tbody");

for (let i = 0; i < 4; i++) {
  const tr = document.createElement("tr");
  for (let j = 0; j < 4; j++) {
    const td = document.createElement("td");
    const text = document.createTextNode("test");
    td.appendChild(text);
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
}

table.appendChild(tbody);
root.appendChild(table);
