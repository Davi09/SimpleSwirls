import React from "react";
import Gallery  from "../../components/Gallery";
import "./index.scss";

class GalleryHome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="home">
        <Gallery />
      </div>
    );
  }
}
export default GalleryHome;
