import React from "react";
import ReactDOM from "react-dom/client";

//JSX - is not HTML in JS but an HTML-like or XML-like syntax
//React Element

const Title = () => (
    <h1 id="heading" tabIndex="5">
    Namaste React using JSX🚀
    </h1>
);

//Component Composition
const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);