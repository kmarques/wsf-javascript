export default function HashLink(title, href) {
  const link = document.createElement("a");
  link.setAttribute("href", "#" + href);
  const textNode = document.createTextNode(title);
  link.appendChild(textNode);
  return link;
}
