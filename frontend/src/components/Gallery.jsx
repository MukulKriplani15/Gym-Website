import React from "react";

const Gallery = () => {
  const gallery = [
    "/img8.jpg",  
    "/img7.jpg",  
    "/img1.webp",
    "/img2.jpg",
    "/img9.jpg",
    "/img10.jpg",
    "/img5.jpg",
    "/img6.jpg",
  ];

  return (
    <section className="gallery">
      <h1>SUPREME SURPASSES SUPERIOR</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(3, 6).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(6, 9).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
