import React from "react";
import { useOutletContext } from "react-router-dom";
import { Iperfume } from "../../../interfaces/Interfaces";
const PhotosInfo = () => {
  const { images }: Iperfume = useOutletContext();
  return (
    <div>
      {images.map((img) => (
        <img
          src={img}
          width={150}
          key={img}
          className='host-van-detail-image'
        />
      ))}
    </div>
  );
};

export default PhotosInfo;
