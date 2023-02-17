import React from "react";
import ReactDOM from "react-dom";
import JsApp from "./component/App";

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<JsApp />, div);
  ReactDOM.unmountComponentAtNode(div)
});
