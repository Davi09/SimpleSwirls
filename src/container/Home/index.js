import React from "react";
import HomeContainer  from "../../components/Home";
import "./index.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="home">
        <HomeContainer />
      </div>
    );
  }
}
export default Home;
