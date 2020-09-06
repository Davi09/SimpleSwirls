function getPhotos() {
  const count = 26;
  const photoObj = [];

  for (let i = 0; i < count; i++) {
    const tempObj = {
      src: "",
      width: 4,
      height: 4,
    };
    tempObj.src = `../../assets/IMG_${i + 1}.jpg`;
    photoObj.push(tempObj);
  }
  return photoObj;
}

export default getPhotos;
