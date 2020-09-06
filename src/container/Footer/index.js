import React from "react";
import FooterBar from "../../components/FooterBar";
import './index.scss';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="footer">
        <FooterBar />
      </div>
    );
  }
}

export default Footer;
