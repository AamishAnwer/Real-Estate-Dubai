import React from "react";

const images = [
  {
    src: "https://res.cloudinary.com/dcpte972l/image/upload/v1709122856/gallary2_wfzmx7.jpg",
  },
  {
    src: "https://res.cloudinary.com/dcpte972l/image/upload/v1709122856/gallary1_shvohj.jpg",
  },
  {
    src: "https://res.cloudinary.com/dcpte972l/image/upload/v1709122856/gallary1_shvohj.jpg",
  },
  // Add other images with captions
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="button-container">
        <button className="gallery-button">Our Gallery</button>
      </div>
      <div className="image-grid cursor-pointer">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img
              src={image.src}
              alt={image.caption}
              className="gallery-image"
            />
            <div className="image-caption">{image.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
