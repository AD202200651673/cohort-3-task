import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/Store.tsx";
import { setTheme } from "./features/ThemeSlice.tsx";

const savedTheme = localStorage.getItem("theme");
store.dispatch(setTheme(savedTheme === "dark" ? "dark" : "light"));

const syncTheme = () => {
  const { mode } = store.getState().theme;
  document.documentElement.setAttribute("data-theme", mode);
  localStorage.setItem("theme", mode);
};

syncTheme();
store.subscribe(syncTheme);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
