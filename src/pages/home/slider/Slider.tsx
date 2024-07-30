import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const images: string[] = [
    "https://st2.depositphotos.com/3047333/7363/i/450/depositphotos_73631603-stock-photo-panoramic-view-of-tbilisi.jpg",
    "https://st2.depositphotos.com/3047333/5744/i/450/depositphotos_57446317-stock-photo-beautiful-view-of-kura-river.jpg",
    "https://st2.depositphotos.com/1006102/10931/i/450/depositphotos_109311550-stock-photo-tbilisi-city-assembly-building-on.jpg",
    "https://www.shutterstock.com/image-photo/old-town-tbilisi-georgia-fairy-600nw-635038928.jpg",
    "https://www.photohound.co/images/1000423m.jpg",
    "https://st3.depositphotos.com/11461130/19298/i/450/depositphotos_192987932-stock-photo-the-ancient-beautiful-city-of.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ marginTop: "150px" }} className="slider-container container">
      <h3
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontFamily: "monospace",
        }}
      >
        Our Partners Are
      </h3>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Slide ${index}`} className="carousel-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
