import React from "react";
import { connect } from "react-redux";
import { textUpdating, InsertSomething } from "../actions";
import FirstLoad from "./FirstLoad";
import MenuBar from "./MenuBar";
import ToolBar from "./ToolBar";
import "./App.css";

const arrayOfToolbarButtons = [
  { icon: "", text: "H1", value: "h1" },
  { icon: "", text: "H2", value: "h2" },
  { icon: "fas fa-link", text: "Heading", value: "link" },
  { icon: "far fa-image", text: "Heading", value: "img" },
  { icon: "", text: "{--}", value: "codeBlock" },
];

class Window extends React.Component {
  componentDidMount() {
    this.props.textUpdating(FirstLoad());
  }
  render() {
    return (
      <div className="container">
        <MenuBar name="editor" />
        <ToolBar
          buttons={arrayOfToolbarButtons}
          onButtonClicked={this.props.InsertSomething}
        />
        <div className="form-group window">
          <textarea
            value={this.props.text}
            onChange={(e) => this.props.textUpdating(e.target.value)}
            className="form-control window"
            id="editor"
            rows="15"
          ></textarea>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.textReducer,
  };
};

export default connect(mapStateToProps, {
  textUpdating: textUpdating,
  InsertSomething: InsertSomething,
})(Window);
