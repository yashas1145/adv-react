import React from "react";
import { createRoot } from "react-dom/client"; 
// eslint-disable-next-line 
import style from "./styles.module.css";
import App from "./component/App";

const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer);

root.render(
  <App/>
);