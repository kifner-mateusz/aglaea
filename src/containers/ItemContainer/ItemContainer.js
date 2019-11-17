import React from "react";
import PropTypes from "prop-types";

import ItemPreview from "../../components/ItemPreview/ItemPreview";
import "./ItemContainer.css";

const ItemContainer = props => {
  return (
    <section className={props.class + "_container item_container"}>
      <h4>{props.title}</h4>
      {props.items.map((value, index) => {
        return <ItemPreview {...value} key={index} class={props.class} />;
      })}
    </section>
  );
};

ItemContainer.propTypes = { items: PropTypes.array.isRequired };

export default ItemContainer;
