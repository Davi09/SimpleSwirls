import React from "react";
import Shop  from "../../components/Shop";
import "./index.scss";

class ShopHome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="home">
        <Shop />
      </div>
    );
  }
}
export default ShopHome;
