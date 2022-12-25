import React    from "react";
import template from "./FormContainer.test.js";

class FormContainer extends React.Component {
  render() {
    return template.call(this);
  }
}

export default FormContainer;
