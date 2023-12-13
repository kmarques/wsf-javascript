function Page1() {
  const defaultText = "Default";
  const div = document.createElement("div");
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  div.appendChild(Link("Page 2", "/page2"));
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
function Link(title, href) {
  const link = document.createElement("a");
  //link.setAttribute("href", "#" + href);
  link.setAttribute("href", href);
  link.addEventListener("click", function (event) {
    event.preventDefault();
    history.pushState({}, null, event.target.getAttribute("href"));
  });
  const textNode = document.createTextNode(title);
  link.appendChild(textNode);
  return link;
}
function Page2() {
  const div = document.createElement("div");

  div.appendChild(Link("Page 1", "/page1"));
  for (let i = 0; i < 200; i++) {
    const img = document.createElement("img");
    img.setAttribute("src", "https://picsum.photos/200/200?random=" + i);
    img.setAttribute("loading", "lazy");
    div.appendChild(img);
  }
  return div;
}

function Page404() {
  const div = document.createElement("div");
  const textNode = document.createTextNode("Page 404");
  div.appendChild(textNode);
  return div;
}

const root = document.getElementById("root");
const routes = {
  "/page1": Page1,
  "/page2": Page2,
  "*": Page404,
};

function HashRouter() {
  const pathname = location.hash.slice(1);
  const pageContructor = routes[pathname] ?? routes["*"];
  const content = pageContructor();
  if (root.childNodes.length === 0) {
    root.appendChild(content);
  } else {
    root.replaceChild(content, root.childNodes[0]);
  }
}

function BrowserRouter() {
  const pathname = location.pathname;
  const pageContructor = routes[pathname] ?? routes["*"];
  const content = pageContructor();
  if (root.childNodes.length === 0) {
    root.appendChild(content);
  } else {
    root.replaceChild(content, root.childNodes[0]);
  }
}

//window.addEventListener("hashchange", HashRouter);
window.addEventListener("popstate", BrowserRouter);
const oldPushState = history.pushState;
history.pushState = function (data, title, url) {
  oldPushState.call(history, data, title, url);
  window.dispatchEvent(new Event("popstate"));
};

BrowserRouter();
