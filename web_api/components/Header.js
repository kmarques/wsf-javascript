import BrowserLink from "../lib/BrowserLink.js";

export default function Header() {
  const header = document.createElement("header");
  Object.assign(header.style, {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "50px",
    backgroundColor: "#C8AD7F",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
  });
  const textNode = document.createTextNode("Web API");
  header.appendChild(textNode);
  // add menu with links to page1 and page2
  const menu = document.createElement("nav");
  Object.assign(menu.style, {
    marginLeft: "auto",
  });
  const menuList = document.createElement("ul");
  Object.assign(menuList.style, {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  });
  const menuListItem1 = document.createElement("li");
  Object.assign(menuListItem1.style, {
    marginLeft: "20px",
  });
  const menuListItem1Link = BrowserLink("Page 1", "/page1");
  menuListItem1.appendChild(menuListItem1Link);
  menuList.appendChild(menuListItem1);
  const menuListItem2 = document.createElement("li");
  Object.assign(menuListItem2.style, {
    marginLeft: "20px",
  });
  const menuListItem2Link = BrowserLink("Page 2", "/page2");
  menuListItem2.appendChild(menuListItem2Link);
  menuList.appendChild(menuListItem2);
  menu.appendChild(menuList);
  header.appendChild(menu);
  return header;
}
