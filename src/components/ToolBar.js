import React from "react";

const ToolBar = (props) => {
  const renderedContent = props.buttons.map((button) => {
    return (
      <button
        className="btn btn-secondary p-0 mr-3"
        onClick={() => props.onButtonClicked(button.value)}
      >
        {button.icon && <i className={button.icon}></i>}
        {!button.icon && <span>{button.text}</span>}
      </button>
    );
  });
  return (
    <div className="container bg-secondary">
      <ul className="nav py-auto">{renderedContent}</ul>
    </div>
  );
};

export default ToolBar;
