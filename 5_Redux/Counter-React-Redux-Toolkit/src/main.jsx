import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import mainStore from "./store/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* here we wrapped whole app with provider but we can use in app.jsx also if we want for any particular component */}
    <Provider store={mainStore}>
      <App />
    </Provider>
  </StrictMode>
);
