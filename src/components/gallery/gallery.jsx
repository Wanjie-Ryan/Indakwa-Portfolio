import React from "react";
import "./gallery.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function Gallery() {
  const imageData = [
    {
      id: 1,
      image: require("../../Images/Indak-1.jpeg"),
    },

    {
      id: 2,
      image: require("../../Images/Indak-2.jpeg"),
    },

    {
      id: 3,
      image: require("../../Images/Indak-3.jpeg"),
    },

    {
      id: 4,
      image: require("../../Images/Indak-4.jpeg"),
    },

    {
      id: 5,
      image: require("../../Images/Indak-5.jpeg"),
    },

    // {
    //   id: 6,
    //   image: require("../../Images/Indak-6.jpeg"),
    // },

    // {
    //   id: 7,
    //   image: require("../../Images/Indak-7.jpeg"),
    // },

    {
      id: 8,
      image: require("../../Images/Indak-8.jpeg"),
    },

    // {
    //   id: 9,
    //   image: require("../../Images/Indak-9.jpeg"),
    // },

    {
      id: 10,
      image: require("../../Images/Indak-10.jpeg"),
    },

    // {
    //   id: 11,
    //   image: require("../../Images/Indak.jpeg"),
    // },
  ];

  return (
    <>
      <section className="gallery">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
          <Masonry gutter="1rem">
            {imageData.map((item, index) => (
              <img
                className="masonry__img"
                src={item.image}
                key={index}
                alt=""
                style={{
                  width: "100%",
                  display: "block",
                  borderRadius: "12px",
                }}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </section>
    </>
  );
}

export default Gallery;
