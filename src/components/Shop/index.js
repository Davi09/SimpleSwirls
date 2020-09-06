import React from "react";
import Card from '../Library/Card'
import './index.scss';

class Shop extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className ='shop_container'>
        <Card title='Avenir'>
          <div className='content'>test</div>
          <div className='footer'>footer</div>
        </Card>
    </div>;
  }
}

export default Shop;