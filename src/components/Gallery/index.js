import React from "react";
import Gallery from 'react-photo-gallery';
import getPhotos from './PhotoConstant';
import './index.scss';

class UserGallery extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const photos = getPhotos();
    console.log(photos);
    return <div className ='gallery_container'>
        <Gallery photos={photos} />
    </div>;
  }
}

export default UserGallery;