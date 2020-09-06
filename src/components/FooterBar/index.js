import React from "react";
import "./index.scss";

class FooterBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="footer_bar">
        <div>Terms and Conditions</div>
        <div>Legal Info</div>
        <div>About</div>
      </div>
    );
  }
}

export default FooterBar;
