import React from "react";
import { connect } from "react-redux";
import marked from "marked";
import MenuBar from "./MenuBar";
import { textUpdating, changeFormat } from "../actions";
import "./App.css";
class Preview extends React.Component {
  getMarkdownText(text) {
    return { __html: marked(text, { breaks: true, gfm: true }) };
  }

  render() {
    console.log(this.getMarkdownText(this.props.text));
    return (
      <div className="container">
        <MenuBar name="preview" MenuFuntion={() => this.props.changeFormat()} />
        <div className="p-2 window">
          {!this.props.text && (
            <div>
              <div className="spinner-grow spinner-grow-sm" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <span id="loadingMessage">
                As you write in the editor area, your markdown text will be
                rendered here!
              </span>
              <div className="spinner-grow spinner-grow-sm" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
          {!this.props.format && (
            <pre className="prettyprint" style={{ color: "white" }}>
              {this.getMarkdownText(this.props.text).__html}
            </pre>
          )}
          {this.props.format && (
            <div
              id="preview"
              dangerouslySetInnerHTML={this.getMarkdownText(this.props.text)}
            ></div>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    text: state.textReducer,
    format: state.formatReducer,
  };
};
export default connect(mapStateToProps, {
  textUpdating: textUpdating,
  changeFormat: changeFormat,
})(Preview);
