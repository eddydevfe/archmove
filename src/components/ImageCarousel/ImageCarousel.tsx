import "./ImageCarousel.scss";
import { useState } from "react";

import rightArrow from "../../assets/icons/right-arrow.svg";
import leftArrow from "../../assets/icons/left-arrow.svg";

import imgOne from "../../assets/photos/img-01.png";
import imgTwo from "../../assets/photos/img-02.png";
import imgThree from "../../assets/photos/img-03.png";
import imgFour from "../../assets/photos/img-04.png";

type ImageType = {
  id: number;
  image: string;
};

const images: ImageType[] = [
  {
    id: 1,
    image: imgOne,
  },
  {
    id: 2,
    image: imgTwo,
  },
  {
    id: 3,
    image: imgThree,
  },
  {
    id: 4,
    image: imgFour,
  },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const reorderImages = (images: ImageType[], currentIndex: number): ImageType[] => {
    return [...images.slice(currentIndex), ...images.slice(0, currentIndex)];
  };

  const reorderedImages = reorderImages(images, currentIndex);

  return (
    <section>
      <div className="container">
        <div className="carousel">
          <div className="carousel-text">
            {/* This sure is an odd choice of words... */}
            <p>
              Build professional <br /> valuable room
            </p>
            <div className="arrow-btns">
              <button onClick={handlePrevClick}>
                <img src={leftArrow} alt="Left arrow icon" />
              </button>
              <button onClick={handleNextClick}>
                <img src={rightArrow} alt="Right arrow icon" />
              </button>
            </div>
          </div>
          <div className="carousel-images">
            {reorderedImages.map((image, index) => (
              <div
                key={image.id}
                className={`carousel-image ${index === 0 ? "active" : ""}`}
              >
                <img src={image.image} alt={`Carousel image ${image.id}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
