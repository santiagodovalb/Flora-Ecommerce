import React from "react";
import "../styles/sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  const prods = ["prod1", "prod2", "prod3", "prod4"];

  return (
    <div className="sidebarDiv">
      <div className="sidebarDivOut">
        {prods.map((oneProd, index) => {
          return (
            <div key={index} className="cartDivs">
              <div>{oneProd}</div>
              <div>Imagen</div>
              <div>Cantidad</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
