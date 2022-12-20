import React    from "react";
import template from "./Product.test.js";

class Product extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Product;
