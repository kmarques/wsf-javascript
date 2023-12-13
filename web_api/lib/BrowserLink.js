export default function BrowserLink(title, href) {
  const link = document.createElement("a");
  link.setAttribute("href", href);
  link.addEventListener("click", function (event) {
    event.preventDefault();
    history.pushState({}, null, event.target.getAttribute("href"));
  });
  const textNode = document.createTextNode(title);
  link.appendChild(textNode);
  return link;
}
