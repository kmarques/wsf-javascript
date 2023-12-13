import Page1 from "./pages/page1.js";
import Page2 from "./pages/page2.js";
import Page404 from "./pages/page404.js";

export default {
  "/page1": Page1,
  "/page2": Page2,
  "*": Page404,
};
