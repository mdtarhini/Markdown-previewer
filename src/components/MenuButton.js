import React from "react";

const MenuButton = (props) => {
  return (
    <li className="nav-item my-auto">
      <a className="nav-link active my-0 py-0 px-1" href="#">
        <i className="fas fa-circle" style={{ color: props.color }}></i>
      </a>
    </li>
  );
};
export default MenuButton;
