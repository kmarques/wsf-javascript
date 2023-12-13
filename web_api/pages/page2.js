import Header from "../components/Header.js";

export default function Page2() {
  const div = document.createElement("div");

  div.appendChild(Header());
  for (let i = 0; i < 200; i++) {
    const img = document.createElement("img");
    img.setAttribute("src", "https://picsum.photos/200/200?random=" + i);
    img.setAttribute("loading", "lazy");
    div.appendChild(img);
  }
  return div;
}
