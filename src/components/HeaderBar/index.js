import React from "react";
import { Link } from "react-router-dom";
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

  setActiveItem = (activeitem) => {
    console.log(activeitem);
    this.setState({
      activeitem,
    });
  };

  handleClose = () =>{
    console.log('blurring');
    this.setState({
      menuActive: false,
    });
  }

  render() {
    const { activeitem, menuActive } = this.state;
    return (
      <div className="_conatiner_header" onBlur={this.handleClose}>
        {" "}
        <div className="header_bar">
        <div className='a'><Link to="/home">Home</Link></div>
        <div className='a'><Link to="/gallery">Gallery</Link></div>
        <div className='a'><Link to="/shop">Shop</Link></div>
        <div className='a'><Link to="/contact">Contact us</Link></div>
        </div>
        <div className="topnav">
          <div href="#home" className="a active">
            {activeitem}
          </div>
          <div className={`myLinks ${menuActive ? "active" : ""}`}>
            <div className='a' onClick={() => this.setActiveItem("Home")}>
              {" "}
              <Link to="/home">Home</Link>
            </div>
            <div className='a' onClick={() => this.setActiveItem("Gallery")}>
              {" "}
              <Link to="/gallery">Gallery</Link>
            </div>
            <div className='a' onClick={() => this.setActiveItem("Shop")}>
              <Link to="/shop">Shop</Link>
            </div>
            <div className='a' onClick={() => this.setActiveItem("Contact us")}>
              <Link to="/contact">Contact us</Link>
            </div>
          </div>
          <div
            href="javascript:void(0);"
            className="a icon"
            onClick={this.handleclick}
          >
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderBar;
