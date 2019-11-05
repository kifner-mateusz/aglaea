import React from "react";
import PropTypes from "prop-types";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";

import "./ItemPreview.css";
import { string } from "postcss-selector-parser";

const ItemPreview = props => {
  let price = props.price - props.sale;
  let sale_percent = (100.0 - (price / props.price) * 100.0).toFixed(0);

  let rating = [];
  for (let i = 1; i < 6; i++) {
    if (i <= props.rating) {
      rating.push(<StarIcon key={"star-" + i} />);
    } else {
      if (props.rating - i > -0.51) {
        rating.push(<StarHalfIcon key={"star-" + i} />);
      } else {
        rating.push(<StarBorderIcon key={"star-" + i} />);
      }
    }
  }

  return (
    <article className={props.class + " item_preview"}>
      <img src={props.img} alt="" className="img" />
      <h5 className="title">{props.title}</h5>
      <div className="subcategory">{props.subcategory}</div>
      <div className="price">
        {price.toFixed(2)} {props.price_currency}
      </div>
      <div className="price_with_shipping">
        {(price + props.shipping).toFixed(2)} {props.price_currency} z dostawą
      </div>
      <div className="seller">
        {props.seller_login}
        <div className="rating">{rating}</div>
      </div>

      {sale_percent != 0 && <div className="sale">-{sale_percent}%</div>}
      {sale_percent != 0 && (
        <div className="sale_cut">
          {props.price} {props.price_currency}
        </div>
      )}
    </article>
  );
};

ItemPreview.propTypes = {
  title: PropTypes.string.isRequired,
  subcategory: PropTypes.string,
  price: PropTypes.number,
  price_currency: PropTypes.string,
  shipping: PropTypes.number,
  sale: PropTypes.number,
  img: PropTypes.string.isRequired
};

export default ItemPreview;
