import React from "react";
import { createRoot } from "react-dom"; 

const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer);

root.render(
  <h1>Hello world!</h1>
);