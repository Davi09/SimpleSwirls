import React from "react";
import "./index.scss";

class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeitem: "Home",
      menuActive: false,
    };
  }

  handleclick = () => {
    const { menuActive } = this.state;
    this.setState({
      menuActive: !menuActive,
    });
  };

  render() {
    const { activeitem, menuActive } = this.state;
    return (
      <div className="_conatiner_header">
        {" "}
        <div className="header_bar">
          <a href="/home">Home</a>
          <a href="/gallery">Gallery</a>
          <a href="/shop">Shop</a>
          <a href="/contact">Contact us</a>
        </div>
        <div className="topnav">
          <a href="#home" className="active">
            {activeitem}
          </a>
          <div className={`myLinks ${menuActive ? "active" : ""}`}>
            <a href="/home">Home</a>
            <a href="/gallery">Gallery</a>
            <a href="/shop">Shop</a>
            <a href="/contact">Contact us</a>
          </div>
          <a href="javascript:void(0);" className="icon" onClick={this.handleclick}>
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default HeaderBar;
