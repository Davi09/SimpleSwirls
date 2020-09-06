import React from "react";
import HeaderBar from "../../components/HeaderBar";
import './index.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        <HeaderBar />
      </div>
    );
  }
}

export default Header;
