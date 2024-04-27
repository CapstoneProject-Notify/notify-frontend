import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imageSet from "../../constants/imageSet";
import { useState } from "react";
import { CarouselWapper, PictureText } from "./styles";

const renderSlides = imageSet.map((image) => (
  <div key={image.alt}>
    <img src={image.url} alt={image.alt} />
  </div>
));

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return (
    <CarouselWapper>
      <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        selectedItem={imageSet[currentIndex]}
        onChange={handleChange}
      >
        {renderSlides}
      </Carousel>
      <PictureText>
        학교 생활에서의 기회가 무효화되지 않도록, Notify.
      </PictureText>
    </CarouselWapper>
  );
}

export default ImageSlider;
