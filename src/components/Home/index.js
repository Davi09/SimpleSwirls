import React from "react";
import "./index.scss";
import img1 from '../../assets/home/image0.jpeg'; //
import img2 from '../../assets/home/image1.jpeg'; //

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="home_container">
        <div className='text'>
          Need a sign to welcome your guests to your wedding? Perhaps a
          beautiful birth announcement for your newest arrival? I’ve got you
          covered! (However, my dog is not for sale🐶) Feel free to browse
          through my gallery and shoot me an email with any questions you may
          have. I look forward to working with you!
        </div>
        <div><img src={img1} /></div>
        <div><img src={img2} /></div>
      </div>
    );
  }
}

export default HomeContainer;
