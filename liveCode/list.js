import Carousel from "./carousel.js";

function List({ title }) {
  const items = [{ id: Date.now(), name: "test" }];

  return React.createElement(Carousel, { items: items, title: title });
}

List();

const React = {
  createElement: (tag, props) => {
    return tag(props);
  },
};
