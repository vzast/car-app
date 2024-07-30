import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const SliderContainer = styled.div`
  width: 100%;
  height: 50vh;
  overflow: hidden;
`;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const SlideImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const UpsideDownSlider = () => {
  return (
    <SliderContainer>
      <Carousel
        axis="vertical"
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={2000}
        transitionTime={500}
        swipeable
        emulateTouch
      >
        <Slide>
          <SlideImage
            src="https://via.placeholder.com/800x600"
            alt="Placeholder"
          />
        </Slide>
        <Slide>
          <SlideImage
            src="https://via.placeholder.com/800x600"
            alt="Placeholder"
          />
        </Slide>
        <Slide>
          <SlideImage
            src="https://via.placeholder.com/800x600"
            alt="Placeholder"
          />
        </Slide>
      </Carousel>
    </SliderContainer>
  );
};

export default UpsideDownSlider;
