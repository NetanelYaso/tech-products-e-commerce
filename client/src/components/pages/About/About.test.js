import React    from "react";
import template from "./About.test.js";

class About extends React.Component {
  render() {
    return template.call(this);
  }
}

export default About;
