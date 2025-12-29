import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement('div',{id: 'parent'},React.createElement('div',{id: 'child'}, [React.createElement('h1',{},'This is Namaste React🚀'), React.createElement('h2',{},'I am an h2 tag')]));

const heading = React.createElement("h1", {id: 'heading'}, "Hello World from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
root.render(parent);