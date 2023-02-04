import ReactDOM from "react-dom";
import React from "react";
import { HelloWorld } from "./App";

const rootEl = document.getElementById("root");

// TO composing the multiple elements with one componenets means render it multiple times
let app = <div>
    <HelloWorld name="Abhishek" />
</div>
ReactDOM.render(app, rootEl);
