import React from "react";
import './index.scss';

function Card(props) {

  const { title, children} = props;
    return <div className ='card_container'>
        <div className='title'>{title}</div>
        <div className='body'>
          {children}
        </div>
    </div>;
  
}

export default Card;