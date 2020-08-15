import React from "react";
import MenuButton from "./MenuButton";

const MenuBar = (props) => {
  return (
    <div className="container">
      <div
        className="row justify-content-around"
        style={{
          backgroundColor: "black",
          height: "30px",
          borderRadius: "5px 5px 0 0",
          color: "white",
        }}
      >
        <div className="col d-flex">
          <div className="my-auto">
            <ul className="nav py-auto">
              <MenuButton color="rgb(252,100,94)" />
              <MenuButton color="rgb(252,194,65)" />
              <MenuButton color="rgb(52,200,74)" />
            </ul>
          </div>
        </div>
        <div className="col d-flex">
          <div className="m-auto">{props.name}</div>
        </div>
        <div className="col d-flex">
          {props.MenuFuntion && (
            <div className="my-auto ml-auto" onClick={props.MenuFuntion}>
              <button className="btn btn-secondary p-0">
                <i className="fas fa-code"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
