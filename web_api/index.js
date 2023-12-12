const defaultText = "Default";
const table = document.createElement("table");
const tbody = document.createElement("tbody");
const root = document.getElementById("root");

table.appendChild(tbody);

function changeIntoInput(event) {
  const td = event.currentTarget;
  const textNode = td.childNodes[0];
  const text = textNode.textContent;
  const input = document.createElement("input");
  input.setAttribute("value", text);
  input.addEventListener("", changeIntoText);

  td.replaceChild(input, textNode);
  td.removeEventListener("click", changeIntoInput);
  input.focus();
}

function changeIntoText(event) {
  const input = event.currentTarget;
}

for (let i = 0; i < 5; i++) {
  const tr = document.createElement("tr");
  tbody.appendChild(tr);
  for (let j = 0; j < 5; j++) {
    const td = document.createElement("td");
    tr.appendChild(td);
    const text = document.createTextNode(defaultText);
    td.addEventListener("click", changeIntoInput);
    td.appendChild(text);
  }
}

root.appendChild(table);
