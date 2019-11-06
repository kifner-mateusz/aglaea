import React from "react";
// import { useHistory } from "react-router-dom";
import "./CategoriesMenu.css";

const CategoriesMenu = props => {
  return (
    <nav>
      <button className="btn-underline">Odzież</button>
      <button className="btn-underline">Obuwie</button>
      <button className="btn-underline">Akcesoria</button>
    </nav>
  );
};

export default CategoriesMenu;
