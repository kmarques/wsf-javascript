export default function BrowserRouter(rootElement, routes) {
  function manageRoute() {
    const pathname = location.pathname;
    const pageContructor = routes[pathname] ?? routes["*"];
    const content = pageContructor();
    if (rootElement.childNodes.length === 0) {
      rootElement.appendChild(content);
    } else {
      rootElement.replaceChild(content, rootElement.childNodes[0]);
    }
  }

  window.addEventListener("popstate", manageRoute);
  const oldPushState = history.pushState;
  history.pushState = function (data, title, url) {
    oldPushState.call(history, data, title, url);
    window.dispatchEvent(new Event("popstate"));
  };
  manageRoute();
}
