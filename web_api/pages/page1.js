import Header from "../components/Header.js";

export default function Page1() {
  const defaultText = "Default";
  const div = document.createElement("div");
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  div.appendChild(Header());
  div.appendChild(table);
  table.appendChild(tbody);

  function changeIntoInput(event) {
    const td = event.currentTarget;
    const textNode = td.childNodes[0];
    const text = textNode.textContent;
    const input = document.createElement("input");
    input.setAttribute("value", text);

    input.addEventListener("blur", changeIntoText);
    td.removeEventListener("click", changeIntoInput);
    td.replaceChild(input, textNode);
    input.focus();
  }

  function changeIntoText(event) {
    const input = event.currentTarget;
    const text = input.value;
    const textNode = document.createTextNode(text);
    const td = input.parentNode;

    data[td.dataset.coordinate] = text;
    const dataString = JSON.stringify(data);
    localStorage.setItem("content", dataString);

    input.removeEventListener("blur", changeIntoText);
    td.addEventListener("click", changeIntoInput);
    td.replaceChild(textNode, input);
  }

  const dataString = localStorage.getItem("content");
  const data = JSON.parse(dataString || "{}");

  for (let i = 0; i < 15; i++) {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    for (let j = 0; j < 15; j++) {
      const td = document.createElement("td");
      tr.appendChild(td);
      td.dataset.coordinate = `${i}x${j}`;
      const text = document.createTextNode(
        data[td.dataset.coordinate] ?? defaultText
      );
      td.addEventListener("click", changeIntoInput);
      td.appendChild(text);
    }
  }

  //const buttonPage2 = document.createElement("button");
  //const textNode = document.createTextNode("Page 2");
  //buttonPage2.appendChild(textNode);
  //buttonPage2.addEventListener("click", function () {
  //  location.href = "/page2.html";
  //});
  //root.appendChild(buttonPage2);
  //root.appendChild(table);
  return div;
}
