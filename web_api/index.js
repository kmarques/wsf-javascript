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

root.appendChild(table);

//window.addEventListener("mousemove", function (event) {
//  console.log(event.clientX, event.clientY);
//});
//
//document.addEventListener("visibilitychange", () => {
//  if (document.visibilityState === "visible") {
//    console.log("foreground");
//  } else {
//    console.log("background");
//  }
//});
//
//document.addEventListener("mouseleave", function (e) {
//  console.log("screen changed");
//});
