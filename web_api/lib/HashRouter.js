export default function HashRouter(rootElement, routes) {
  const pathname = location.hash.slice(1);
  const pageContructor = routes[pathname] ?? routes["*"];
  const content = pageContructor();
  if (rootElement.childNodes.length === 0) {
    rootElement.appendChild(content);
  } else {
    rootElement.replaceChild(content, rootElement.childNodes[0]);
  }
}

window.addEventListener("hashchange", HashRouter);
