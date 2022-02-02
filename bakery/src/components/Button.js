import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Button extends React.Component {
  render() {
    return (
        <button
          onClick={this.props.handleClick}
          className={`btn btn${
            this.props.isSelected ? "" : "-outline"
          }-primary m-2`}
        >
          {this.props.children}
        </button>
    );
  }
}
export default Button;