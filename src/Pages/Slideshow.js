import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { db } from "../FireBase";
import { collection, getDocs } from "firebase/firestore";

const Slideshow = () => {
  const [slideImages, setslideImages] = useState([]);
  const getData = async () => {
    const allSnapshot = await getDocs(collection(db, "all"));
    const allDocs = allSnapshot.docs.map((doc) => doc.data().url);
    setslideImages([...allDocs]);
    return null;
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Carousel>
      <Carousel.Item className="Carousel_div">
        <div id="carousel_img_div">
          <img
            className="Carousel_img"
            src={slideImages[0]}
            alt="First slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item className="Carousel_div">
        <div id="carousel_img_div">
          <img
            className="Carousel_img"
            src={slideImages[1]}
            alt="First slide"
          />{" "}
        </div>
      </Carousel.Item>
      <Carousel.Item className="Carousel_div">
        <div id="carousel_img_div">
          <img
            className="Carousel_img"
            src={slideImages[2]}
            alt="First slide"
          />{" "}
        </div>
      </Carousel.Item>
      <Carousel.Item className="Carousel_div">
        <div id="carousel_img_div">
          <img
            className="Carousel_img"
            src={slideImages[3]}
            alt="First slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item className="Carousel_div">
        <div id="carousel_img_div">
          <img
            className="Carousel_img"
            src={slideImages[4]}
            alt="First slide"
          />{" "}
        </div>
      </Carousel.Item>
      <Carousel.Item className="Carousel_div">
        <div id="carousel_img_div">
          <img
            className="Carousel_img"
            src={slideImages[5]}
            alt="First slide"
          />{" "}
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slideshow;
