import React from "react";
import ReactDOMClient from "react-dom/client";
import { Box } from "./Box";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Box />);
