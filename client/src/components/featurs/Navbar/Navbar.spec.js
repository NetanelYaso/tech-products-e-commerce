import React    from "react";
import template from "./Navbar.spec.js";

class Navbar extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Navbar;
