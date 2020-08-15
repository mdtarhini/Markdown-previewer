import React from "react";
import Editor from "./Editor";
import Preview from "./Preview";

import "./App.css";
const App = () => {
  return (
    <div className="container-fluid main text-center">
      <div id="header" className="mb-6">
        <h2>Markdown Previewer</h2>
      </div>

      <div className="row">
        <div className="col-12 col-lg-6">
          <Editor />
        </div>
        <div className="col-12 col-lg-6 text-left">
          <Preview />
        </div>
      </div>
    </div>
  );
};

export default App;
